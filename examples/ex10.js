
pt1 = [0.1, 0.1]
pt2 = [0.8, 0.8]
N = 100
var f = (x) => x * x - 2
var fd = (x) => 2 * x

function convpt(pt){
   var [x, y] = pt
   var xx = x / 2.4 / 2 + 0.5
   var yy = y / 2.4 / 2 + 0.5
   return [xx, yy]
}
function conv(i){
   var x = i / N * 2.4
   return convpt([x, f(x)])
}
function draw_graph(){
   draw_line([0, 0.5], [1, 0.5])  
   draw_line([0.5, 0], [0.5, 1])

   for (i = -N - 1; i < N; i++){ 
      pt1 = conv(i)
      pt2 = conv(i + 1)
      draw_line(pt1, pt2)
   }
}

function draw_newton(){
  var x = 0.5
  draw_line(convpt([x, 0]), convpt([x, f(x)]))
  for (var i = 0; i < 5; i++){
   var x_old = x
   var y = f(x_old)
   var x = x - f(x) / fd(x)
   var pt1 = convpt([x_old, y])
   var pt2 = convpt([x, 0])
   var pt3 = convpt([x, f(x)])
   draw_line(pt1, pt2)
   draw_line(pt2, pt3)
   puts(x)
  }
}
draw_graph()
draw_newton()
