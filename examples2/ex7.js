function vdiff(p1, p2){
    var x1 = p1[0]; var y1 = p1[1]
    var x2 = p2[0]; var y2 = p2[1]
    return [x2 - x1, y2 - y1]
}
function prod(p1, p2){
    var x1 = p1[0]; var y1 = p1[1]
    var x2 = p2[0]; var y2 = p2[1]
    return x1 * y2 - y1 * x2
}
function menseki(p1, p2, p3){
    return Math.abs(prod(vdiff(p3, p1), vdiff(p2,p1))) / 2
}
var p1 = [3, 3]
var p2 = [2, 1]
var p3 = [1, 7]
puts(menseki(p1, p2, p3))

function polygon_menseki(poly){
    var n = poly.length
    var s = 0
    for (var i = 1; i < n - 1; i++)
	s += menseki(poly[0], poly[i], poly[i + 1])
    return s
}

function regular_polygon_menseki(n){
    var poly = []
    for (var i = 0; i < n; i++){
	var theta = 2 * Math.PI * i / n
	var x = Math.cos(theta)
	var y = Math.sin(theta)
	poly.push([x, y])
    }
    return polygon_menseki(poly)
}

for (var i = 3; i < 20; i++){
    puts(i + ", " + regular_polygon_menseki(i))
}
