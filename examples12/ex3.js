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

m = [7,3,5,4,1,2,4]
puts(m)
puts(qsort(m))
