// Sierpinski Carpet by Chaos Game //

function work(n){
  var pt = [0.5, 0.5]
  cls()
  for (var i = 0; i < n; i++){
    var [x, y] = pt
    draw_rect([x, y], [x + 0.003, y + 0.003])
    x /= 3
    y /= 3
    r = Math.random() * 8
    if (r < 1){}
    else if (r < 2){
        y += 1/3
    } else if (r < 3){
        y += 2/3
    } else if (r < 4){
        x += 1/3
        y += 2/3
    } else if (r < 5){
	x += 1/3
    } else if (r < 6){
        x += 2/3
        y += 2/3
    } else if (r < 7){
        x += 2/3
        y += 1/3
    } else {
        x += 2/3
    }
    pt = [x, y]
  }
}

work(60000)
