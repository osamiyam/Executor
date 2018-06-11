/*                                                                              
 * A hash function which outputs values
 * less than 20,011                        
 */
 
var UP = 0
var DOWN = 1
var RIGHT = 2
var LEFT = 3
var dir = "udrl"

function h(pat){
    var s = 0
    for (var i = 0; i < 9; i++){
        s = (s  * 3444 + pat[i]) % 20011
    }
    return s
}

function eq_pat(pat1, pat2){
    for (var i = 0; i < 9; i++){
        if (pat1[i] != pat2[i])
            return false
    }
    return true
}

var pat_table = []

function add_pat(pat, dist){
    var v = h(pat)
    if (pat_table[v] === undefined){
        pat_table[v] = [[pat, dist]]
        return 1
    } else{
        lst = pat_table[v]
        for (var i = 0; i < lst.length; i++)
            if (eq_pat(lst[i][0], pat)) return 0
        pat_table[v].push([pat, dist])
        return 1
    }
}
function find_pat(pat){
    var v = h(pat)
    if (pat_table[v] === undefined) return -1
    else {
        var lst = pat_table[v]
        for (var i = 0; i < lst.length; i++)
            if (eq_pat(lst[i][0], pat)) return lst[i][1]
        return -1
    }
}


function find_zero(pat){
    for (var i = 0; i < 9; i++){
        if (pat[i] == 0) return i
    }
    return -1
}

function make_table(){
    var init_pat = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var queue = [[init_pat, 0]]
    var counter = 0
    while (queue.length > 0){
        var [pat, dist] = queue.shift()
        var ddist = find_pat(pat)
        if (ddist < 0){
            add_pat(pat, dist)
            counter += 1
            var p = find_zero(pat)
            var px = p % 3
            var py = Math.floor(p / 3)

            if (px > 0){
                ppat = pat.slice(0)
                ppat[p] = ppat[p - 1]
                ppat[p - 1] = 0
                queue.push([ppat, dist + 1])
            }
            if (px < 2){
                ppat = pat.slice(0)
                ppat[p] = ppat[p + 1]
                ppat[p + 1] = 0
                queue.push([ppat, dist + 1])
            }
            if (py > 0){
                ppat = pat.slice(0)
                ppat[p] = ppat[p - 3]
                ppat[p - 3] = 0
                queue.push([ppat, dist + 1])
            }
            if (py < 2){
                ppat = pat.slice(0)
                ppat[p] = ppat[p + 3]
                ppat[p + 3] = 0
                queue.push([ppat, dist + 1])
            }
        }
    }
    return counter
}

function move(state, i){
    state = state.slice(0)
    var z = find_zero(state)
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
    return state
}

function next_move_list(state, last_move){
    var moves = []
    var z = find_zero(state)
    var ix = z % 3
    var iy = Math.floor(z / 3)
    if (ix > 0 && last_move != LEFT)
        moves.push(RIGHT)
    if (ix < 2 && last_move != RIGHT)
        moves.push(LEFT)
    if (iy > 0 && last_move != UP)
        moves.push(DOWN)
    if (iy < 2 && last_move != DOWN)
        moves.push(UP)
    return moves
}

function make_random_state(N, state){
    var last_move = null
    for (var n = 0; n < N; n++){
        var moves = next_move_list(state, last_move)
        var m = Math.floor(Math.random() * moves.length)
        state = move(state, moves[m])
        last_move = moves[m]
    }
    return state
}

function work(){
    var state = make_random_state(1000, [0, 1, 2, 3, 4, 5, 6, 7, 8])
    puts(state)
    set_board_state(state)
    var last_move = -1
    var d = find_pat(state)
    while (d > 0){
        var mdirs = next_move_list(state, last_move)
        var dirx
        for (var i = 0; i < mdirs.length; i++){
            dirx = mdirs[i]
            var state1 = move(state, dirx)
            var d1 = find_pat(state1)
            if (d1 == d - 1) break
        }
        state = state1
        d = d - 1
        play_moves(dir[dirx])
    }
}

puts(make_table())
start_board8()
work()
