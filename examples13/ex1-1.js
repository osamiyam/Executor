

function make_polygons(m, w){
    polygons = []
    var pi = Math.PI
    var r = 0.4
    for (var i = -m; i < m; i++){
        for (var j = -m; j < m; j++){
            var x1 = i / m
            var x2 = (i + 1) / m
            var z1 = j / m
            var z2 = (j + 1) / m
            var y11 = Math.sin(x1 * w) * Math.sin(z1 * w) 
            var y12 = Math.sin(x1 * w) * Math.sin(z2 * w) 
            var y21 = Math.sin(x2 * w) * Math.sin(z1 * w) 
            var y22 = Math.sin(x2 * w) * Math.sin(z2 * w) 
            var p1 = [x1, y11, z1]
            var p2 = [x1, y12, z2]
            var p3 = [x2, y21, z1]
            var p4 = [x2, y22, z2]
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

function rot_xz(polygons){
    var rr = function(pt){
        var th = 0.5
        var x = pt[0]
        var y = pt[1]
        var z = pt[2]
        var c = Math.cos(th)
        var s = Math.sin(th)
        var xx = x * c - z * s
        var zz = x * s + z * c
        return [xx, y, zz]
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

var polygons = rot_yz(rot_xz((make_polygons(20, 5.0))))
sort_p(polygons)
draw_polygons(polygons)

