


function make_polygons(m, n){
    polygons = []
    var pi = Math.PI
    var r = 0.4
    for (var i = 0; i < m; i++){
        var th1 = 2 * pi * i / m
        var th2 = 2 * pi * ((i + 1) % m) / m
        for (var j = 0; j < n; j++){
            var phi1 = 2 * pi * j / n
            var phi2 = 2 * pi * ((j + 1) % n) / n
            var x1 = r * Math.cos(phi1) + 1
            var y1 = r * Math.sin(phi1)
            var x2 = r * Math.cos(phi2) + 1
            var y2 = r * Math.sin(phi2)
            var xx11 = x1 * Math.cos(th1)
            var zz11 = x1 * Math.sin(th1)
            var xx12 = x1 * Math.cos(th2)
            var zz12 = x1 * Math.sin(th2)
            var xx21 = x2 * Math.cos(th1)
            var zz21 = x2 * Math.sin(th1)
            var xx22 = x2 * Math.cos(th2)
            var zz22 = x2 * Math.sin(th2)
            var p1 = [xx11, y1, zz11]
            var p2 = [xx12, y1, zz12]
            var p3 = [xx21, y2, zz21]
            var p4 = [xx22, y2, zz22]
            polygons.push([p1, p2, p3])
            polygons.push([p2, p3, p4])
        }
    }
    return polygons
}

function rot_yz(polygons){
    var rr = function(pt){
        var th = 0.5
        var x = pt[0]
        var y = pt[1]
        var z = pt[2]
        var c = Math.cos(th)
        var s = Math.sin(th)
        var yy = y * c - z * s
        var zz = y * s + z * c
        return [x, yy, zz]
    }
    var pp = []
    for (var i = 0; i < polygons.length; i++){
        var p = polygons[i]
        var pt1 = p[0]
        var pt2 = p[1]
        var pt3 = p[2]
        pp.push([rr(pt1), rr(pt2), rr(pt3)])
    }
    return pp
}

function center_z(polygon){
    var p1 = polygon[0]
    var p2 = polygon[1]
    var p3 = polygon[2]
    var z1 = p1[2]
    var z2 = p2[2]
    var z3 = p3[2]
    return (z1 + z2 + z3) / 3
}

function sort_p(polygons){
   for (var i = 0; i < polygons.length - 1; i++){
     var mi = i
     var mv = center_z(polygons[i])
     for (var j = i + 1; j < polygons.length; j++){
       if (mv > center_z(polygons[j])){
          mi = j
          mv = center_z(polygons[j])
       }
     }
     var tmp = polygons[mi]
     polygons[mi] = polygons[i]
     polygons[i] = tmp
  }
}

function draw_tr(pt1, pt2, pt3){
   draw_triangle_w(pt1, pt2, pt3)
   draw_line(pt1, pt2)
   draw_line(pt2, pt3)
   draw_line(pt3, pt1)
}
function pt3_2(pt){
    var x = pt[0]
    var y = pt[1]
    return [x / 4 + 0.5, y / 4 + 0.5]
}

function draw_polygons(polygons){
   for (var i = 0; i < polygons.length; i++){
     var p = polygons[i]
     var pt1 = p[0]
     var pt2 = p[1]
     var pt3 = p[2]
     draw_tr(pt3_2(pt1), pt3_2(pt2), pt3_2(pt3))
   }
}

var polygons = rot_yz(make_polygons(30, 30))
sort_p(polygons)
draw_polygons(polygons)

