
## CとJavaScriptの比較

#### １．バブルソート　ー配列のアクセス速度の比較ー

Linux 4.10.0 上で GCC 5.4 、NodeJS 8.11.1, および SpiderMonkey 45 を 10万個の要素のバブルソートを用いて性能比較した。 まず、Cのプログラムは以下のとおり。
```
     1	#include <stdio.h>
     2	#include <stdlib.h>
     3	#include <time.h>
     4	
     5	double * make_data(int n);
     6	void bsort(double *a, int n);
     7	
     8	
     9	double * make_data(int n){
    10	  double *a = (double *)malloc(sizeof(double) * n);
    11	  for (int i = 0; i < n; i++)
    12	    a[i] = (double)rand() / RAND_MAX;
    13	  return a;
    14	}
    15	
    16	void bsort(double *a, int n){
    17	  for (int i = n - 1; i >= 1; i--){
    18	    for (int j = 0; j < i; j++)
    19	      if (a[j] > a[j + 1]){
    20	        double tmp = a[j];
    21	        a[j] = a[j + 1];
    22	        a[j + 1] = tmp;
    23	      }
    24	  }
    25	}
    26	
    27	int main(){
    28	  int n = 100000;
    29	  double *a = make_data(n);
    30	  clock_t t1 = clock();
    31	  bsort(a, n);
    32	  clock_t t2 = clock();
    33	  printf("Time = %ld ms\n", (int)(t2 - t1) * 1000 / CLOCKS_PER_SEC);
    34	  return 0;
    35	}
```

このプログラムを`bubble.c`というファイル名でセーブする。さらにJavaScriptのプログラムを以下のように書く。

```javascript
     1	var print
     2	if (print == undefined)
     3	    var puts = console.log
     4	else
     5	    var puts = print
     6	
     7	function make_data(n){
     8	    a = []
     9	    for (var i = 0; i < n; i++)
    10		a.push(Math.random())
    11	    return a
    12	}
    13	
    14	function bsort(a){
    15	    var n = a.length
    16	    for (var i = n - 1; i >= 1; i--){
    17		for (var j = 0; j < i; j++)
    18		if (a[j] > a[j + 1]){
    19		    var tmp = a[j]
    20		    a[j] = a[j + 1]
    21		    a[j + 1] = tmp
    22		}
    23	    }
    24	}
    25	
    26	var a = make_data(100000)
    27	var t1 = new Date()
    28	bsort(a)
    29	var t2 = new Date()
    30	puts("Time = " + (t2 - t1) + " ms")
```
このプログラムを`bubble.js`としてセーブする。以下のようにそれぞれのプログラムを実行した。
```
osami-virtual-machine:yama718> gcc -O3 bubble.c -o bubble
osami-virtual-machine:yama719> ./bubble 
Time = 17820 ms
osami-virtual-machine:yama720> node bubble.js
Time = 23616 ms
osami-virtual-machine:yama721> js bubble.js
Time = 20958 ms
```
Cの方が若干速い（SpiderMonkeyと比較して1.17倍）という結果になったが、 JavaScriptがCに比べて動的な高級言語であること、特にJavaScriptの配列はCに比べてかなりフレキシブルな機能をもっていることなどを考えると NodeJS (V8エンジン）やSpiderMonkeyは驚異的に速いと言える。

####  2. たらい関数（竹内関数）　ー関数呼び出し時間の比較ー

関数呼び出しの時間を比較してみる．Cのプログラムは以下のとおり：
```
     1	#include <stdio.h>
     2	#include <stdlib.h>
     3	#include <time.h>
     4	
     5	int tak(int x, int y, int z);
     6	
     7	int tak(int x, int y, int z){
     8	  if (x <= y) return y;
     9	  else return tak(tak(x - 1, y, z), tak(y - 1, z, x), tak(z - 1, x, y));
    10	}
    11	
    12	int main(){
    13	  clock_t t1 = clock();
    14	  int res = tak(16, 8, 0);
    15	  clock_t t2 = clock();
    16	  printf("Time = %ld ms\n", (long)(t2 - t1) * 1000 / CLOCKS_PER_SEC);
    17	  printf("Result = %d\n", res);
    18	  return 0;
    19	}
```

一方，JavaScriptのプログラムは以下のようになる．
```javascript
     1	var print
     2	if (print == undefined)
     3	    puts = console.log
     4	else
     5	    puts = print
     6	
     7	function tak(x, y, z){
     8	    if (x <= y) return y
     9	    else return tak(tak(x - 1, y, z), tak(y - 1, z, x), tak(z - 1, x, y))
    10	}
    11	
    12	var t1 = new Date()
    13	var res = tak(16, 8, 0)
    14	var t2 = new Date()
    15	puts("Time = " + (t2 - t1) + " ms")
    16	puts("Result = " + res)
```
それぞれのプログラムを動かしてみる．
```
osami-virtual-machine:yama966> gcc -O3 tak.c -o tak
osami-virtual-machine:yama967> ./tak
Time = 52468 ms
Result = 16
osami-virtual-machine:yama968> node tak.js
Time = 133985 ms
Result = 16
osami-virtual-machine:yama969> js tak.js
Time = 126783 ms
Result = 16
```
この場合，JavaScript は約2.5倍 C よりも時間がかかっている． さすがに，引数をスタックに乗せるのはCの方が圧倒的に有利である．

> Written with [StackEdit](https://stackedit.io/).
