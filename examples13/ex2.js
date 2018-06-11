function make_points(n){
    var pts = []
        for (var i = 0; i < n; i++){
        var x = Math.random()
        var y = Math.random()
¡¡      pts.push([x, y])
    }
¡¡  return pts
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
draw_points(make_points(1000))

