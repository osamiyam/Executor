function merge(lst1, lst2){
    var lst = []
    while (true){
        if (lst1.length == 0) return lst.concat(lst2)
        else if (lst2.length == 0) return lst.concat(lst1)
        if (lst1[0] < lst2[0]) lst.push(lst1.shift())
        else lst.push(lst2.shift())
    }
}

function msort(lst){
    var n = lst.length   
    if (n < 2) return lst
    else {
        var n2 = Math.floor(n / 2)
        return merge(
            msort(lst.slice(0, n2)), msort(lst.slice(n2, n)))
    }
}

function time_measurement(n){
    var lst = []
    for (var i = 0; i < n; i++){
        lst.push(Math.random())
    }
    var t1 = new Date()
    msort(lst)
    var t2 = new Date()
    return t2 - t1
}

function measurement(){
    var res = []
    for (var n = 0; n < 2000; n += 10){
        res.push([n, time_measurement(n)])
    }
    for (var i = 0; i < res.length; i++){
        var data = res[i]
        var x = data[0] / 2000
        var y = data[1] / 300
        puts(x + " " + y)
        draw_line([x, 0], [x, y])
    }
}

cls()
measurement()
