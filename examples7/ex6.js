ans = []
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
qsort([3, 5, 4, 8, 2, 3, 1])
puts(ans)
