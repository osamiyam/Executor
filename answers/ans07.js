
// 第７回課題解答例 //

function kadai(n){
    var res = [];
    function hanoi4(offset, n, p1, p2, p3, p4){
        if (n == 0) return;
        else {
            var m = Math.floor((n - 1) / 2);
            hanoi4(offset, m, p1, p3, p4, p2);
            hanoi4(offset + m, n - 1 - m, p1, p2, p4, p3);
            // puts("move " + (n + offset)  + " from " + p1 + " to " + p4);
            res.push([p1, p4]);
            hanoi4(offset + m, n - 1 - m, p3, p1, p2, p4);
            hanoi4(offset, m, p2, p1, p3, p4);
        }
    }
    hanoi4(0, n, 0, 1, 2, 3);
    return res;
}

function test(){
    var res = kadai(20);
    puts(res);
    puts("# of steps = " + res.length);
}
test();

