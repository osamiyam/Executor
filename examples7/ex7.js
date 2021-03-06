
function qsort(lst){
    if (lst.length <= 1) ans = ans.concat(lst)
    else{
	var key = lst[0]
	var low = []
	var eq = [key]
	var high = []
	for (var i = 1; i < lst.length; i++){
	    var m = lst[i]
	    if (key > m) low.push(m)
	    else if (key < m) high.push(m)
	    else eq.push(m)
	}
	qsort(low)
	ans = ans.concat(eq)
	qsort(high)
    }
}

var ans = []
prob = []
for (var i = 0; i < 10000; i++){
    prob.push(Math.random())
}
t1 = new Date()
qsort(prob)
t2 = new Date()
puts(ans[0] + " " + ans[5000] + " " + ans[9999])
puts((t2 - t1) + " ms")
