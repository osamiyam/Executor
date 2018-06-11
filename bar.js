function play_moves_iter2(width, c){
    for (var i = 0; i < 9; i++){
	if (board_state[i] == 0) break
    }
    if (i == 9) return
    var ix = i % 3
    var iy = Math.floor(i / 3)
    if (c == 'u'){
        if (iy < 2) {
            ct.fillStyle = '#0000ff'
            ct.fillRect(ix * 120 + 20, iy * 120 + 20, 120, 240)
            ct.fillStyle = '#ffeeee'
            ct.fillRect(ix * 120 + 20, iy * 120 + 20 + (120 - width), 120, 120)
            ct.fillStyle = '#000000'
            var x = ix * 120 + 20 + 50
            var y = iy * 120 + 20 + 70 + (120 - width)
            ct.fillText("" + board_state[(iy + 1) * 3 + ix], x, y)
        }
    } else  if (c == 'd'){
        if (iy > 0){
            ct.fillStyle = '#0000ff'
            ct.fillRect(ix * 120 + 20, (iy - 1) * 120 + 20, 120, 240)
            ct.fillStyle = '#ffeeee'
            ct.fillRect(ix * 120 + 20, (iy - 1) * 120 + 20 + width, 120, 120)
            ct.fillStyle = '#000000'
            var x = ix * 120 + 20  + 50
            var y = (iy - 1) * 120 + 20  + 70 + width
            ct.fillText("" + board_state[(iy - 1) * 3 + ix], x, y)
        }
    }  else  if (c == 'l'){
        if (ix < 2){
            ct.fillStyle = '#0000ff'
            ct.fillRect(ix * 120 + 20, iy * 120 + 20, 240, 120)
            ct.fillStyle = '#ffeeee'
            ct.fillRect(ix * 120 + 20 + (120 - width), iy * 120 + 20, 120, 120)
            ct.fillStyle = '#000000'
            var x = ix * 120 + 20 + (120 - width) + 50
            var y = iy * 120 + 20  + 70
            ct.fillText("" + board_state[iy * 3 + (ix + 1)], x, y)
        }
    }  else  if (c == 'r'){
        if (ix > 0){
            ct.fillStyle = '#0000ff'
            ct.fillRect((ix - 1) * 120 + 20, iy * 120 + 20, 240, 120)
            ct.fillStyle = '#ffeeee'
            ct.fillRect((ix - 1) * 120 + 20 + width, iy * 120 + 20, 120, 120)
            ct.fillStyle = '#000000'
            var x = (ix - 1) * 120 + 20 + width + 50
            var y = iy * 120 + 20  + 70
            ct.fillText("" + board_state[iy * 3 + (ix - 1)], x, y)
        }
    }
    if (width < 120){
        // alert("here(" + width + ")")
        setTimeout(function (){play_moves_iter2(width + 15, c)}, 20)
    }else{
        setTimeout(play_moves_iter, 20)
    }
}
