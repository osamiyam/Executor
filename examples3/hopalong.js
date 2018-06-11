/***********************************************
 * Title: Hopalong attractors
 * Author: Osami Yamamoto (osami@meijo-u.ac.jp)
 * Date: Tue Jul  1 12:27:52 JST 2014
 ***********************************************/

function sg(x){
    if (x > 0) return 1
    else return -1
}

function make_data(a, b, c, n){
    var x = 1.0
    var y = 1.0
    var ans = []
    for (var i = 0; i < n; i++){
	var xx = y - sg(x) * Math.sqrt(Math.abs(b * x - c))
	var yy = a - x
	x = xx
	y = yy
	ans.push([x, y])
    }
    return ans
}

function maxmin(a){
    var xmin = 10000
    var xmax = -10000
    var ymin = 10000
    var ymax = -10000

    for(var i = 0; i < a.length; i++){
	if (xmin > a[i][0]) xmin = a[i][0]
	if (xmax < a[i][0]) xmax = a[i][0]
	if (ymin > a[i][1]) ymin = a[i][1]
	if (ymax < a[i][1]) ymax = a[i][1]
    }
    return [xmin, xmax, ymin, ymax]
}

function draw_points(a){
    mm = maxmin(a)
    var x0 = mm[0]
    var x1 = mm[1]
    var y0 = mm[2]
    var y1 = mm[3]
    for (var i = 0; i < a.length; i++){
	var x = a[i][0]
	var y = a[i][1]
	var xx = (x - x0) / (x1 - x0)
	var yy = (y - y0) / (y1 - y0)
	// puts(xx + " " + yy)
	draw_rect([xx - 0.003, yy - 0.003], [xx + 0.003, yy + 0.003])
    }
}

function main(){
    cls()
    a = Math.random() * 20 - 10
    b = Math.random() * 20 - 10
    c = Math.random() * 20 - 10
    dat = make_data(a, b, c, 5000)
    draw_points(dat)
}

main()
