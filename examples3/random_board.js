
start_board8()
// set_board_state([0, 4, 3, 2, 1, 8, 7, 6, 5])
// set_board_state([0, 1, 2, 3, 4, 5, 6, 7, 8])

var state
var [UP, DOWN, RIGHT, LEFT] = [0, 1, 2, 3]
var dir = "udrl"

function find_zero(){
   for (var i =0; i < 9; i++){
      if (state[i] == 0) return i
   }
   return null
}

function move(i){
   var z = find_zero()
   var ix = z % 3
   var iy = Math.floor(z / 3)
   if (i == DOWN && iy > 0){
        state[z] = state[z - 3]
        state[z - 3] = 0
   } else if (i == UP && iy < 2){
        state[z] = state[z + 3]
        state[z + 3] = 0
   } else if (i == RIGHT && ix > 0){
        state[z] = state[z - 1]
        state[z - 1] = 0
   } else if (i == 3 && ix < 2){
        state[z] = state[z + 1]
        state[z + 1] = 0
   }
}

function next_move_list(pat, last_move){
   var moves = []
   var z = find_zero()
   var [ix, iy] = [z % 3, Math.floor(z / 3)]
   if (ix > 0 && last_move != LEFT) moves.push(RIGHT)
   if (ix < 2 && last_move != RIGHT) moves.push(LEFT)
   if (iy > 0 && last_move != UP) moves.push(DOWN)
   if (iy < 2 && last_move != DOWN) moves.push(UP)
   return moves   
}

function make_random_state(N){
   state = [0, 1, 2, 3, 4, 5, 6, 7, 8]
   var last_move = null
   var res = ""
   for (var n = 0; n < N; n++){
      var moves = next_move_list(state, last_move)
      var m = Math.floor(Math.random() * moves.length)
      res = res + dir[moves[m]]
      move(moves[m])
      last_move = moves[m]
   }
   return res
}

function main(N){
    var rr = ""
    var moves = make_random_state(N)
    set_board_state(state)
    for (i = 0; i < moves.length; i++){
        var c = moves[i];
        var cc;
        if (c == 'u') cc = 'd'
        else if (c == 'd') cc = 'u'
        else if (c == 'r') cc = 'l'
        else cc = 'r'
        rr = cc + rr
    }
    play_moves(rr)
}

main(20)
