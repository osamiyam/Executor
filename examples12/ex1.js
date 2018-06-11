function selection_sort(lst){
    var n = lst.length
    for (var i = 0; i< n; i++){
        var m = lst[i]
        var mj = i
        for (var j = i + 1; j < n; j++){
            if (m > lst[j]){
                m = lst[j]
                mj = j
            }
        }
        [lst[mj], lst[i]] = [lst[i], lst[mj]]
    }
}

lst = [7, 3, 5, 4, 1, 2, 4]
puts(lst)
selection_sort(lst)
puts(lst)
