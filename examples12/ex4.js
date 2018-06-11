function qsort(lst){
    if (lst.length <= 1) return lst
    var key = lst[0]
    var lt = []
    var eq = []
    var gt = []
    for (var i = 0; i < lst.length; i++){
        var ele = lst[i]
        if (ele < key) lt.push(ele)
        else if (ele > key) gt.push(ele)
        else eq.push(ele)
    }
    return qsort(lt).concat(eq).concat(qsort(gt))
}

function work(){
    var lst = []
    var N = 100000
    for (var i = 0; i < N; i++)
        lst.push(Math.random())
    var t1 = new Date()
    var res = qsort(lst)
    var t2 = new Date()
    puts((t2 - t1) + "ms")
    puts(res[0] + ":" + res[N / 2] + ":" + res[N - 1])
}

work()
