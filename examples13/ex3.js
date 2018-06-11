function make_points(n){
    var pts = []
    for (var i = 0; i < n; i++){
        var x = Math.random()
        var y = Math.random()
        pts.push([x, y])
    }
    return pts
}
function draw_points(lst){
    dx = 0.005
    dy = 0.005
    for (var i = 0; i < lst.length; i++){
        var x = lst[i][0]
        var y = lst[i][1]
        draw_rect([x-dx, y-dy], [x + dx, y + dy])
    }
}

function make_edge_list(lst){
    function sqr(x){ return x * x }
    function dist2(p1, p2){
        var [x1, y1] = p1
        var [x2, y2] = p2
        return sqr(x1 - x2)  + sqr(y1 - y2)
    }
    var elist = []
    for (var i = 0; i < lst.length; i++){
        var p1 = lst[i]
        for (var j = i + 1; j < lst.length; j++){
            var p2 = lst[j]
            var d = dist2(p1, p2)
            if (d < 0.04){
                elist.push([d, i, j])
            }
        }
    }
    return elist
}


function sort_edge_list(elist){
    if (elist.length <= 1) return elist
    var key = elist[0][0]
    var low = []
    var eq = []
    var high = []
    for (var i = 0; i < elist.length; i++){
        if (elist[i][0] < key) low.push(elist[i])
        else if (elist[i][0] > key) high.push(elist[i])
        else eq.push(elist[i])
    }
    return sort_edge_list(low).concat(eq.concat(sort_edge_list(high)))
}

a = make_edge_list(make_points(1000))
a = sort_edge_list(a)
puts(a.length)
puts(a[0])
puts(a[999])

