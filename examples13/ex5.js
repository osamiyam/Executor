
function selection_sort(lst){
    var n = lst.length
    for (i = 0; i< n; i++){
        var m = lst[i]
        var mj = i
        for (j = i + 1; j < n; j++){
            if (m > lst[j]){
                m = lst[j]
                mj = j
            }
        }
        var tmp = lst[mj]
        lst[mj] = lst[i]
        lst[i] = tmp
    }
}

function time_measurement(n){
    var lst = []
    for (var i = 0; i < n; i++){
        lst.push(Math.random())
    }
    var t1 = new Date()
    selection_sort(lst)
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
