var UP = 0
var DOWN = 1
var RIGHT = 2
var LEFT = 3
var dir = "udrl"

start_board8()

function find_zero(state){
    for (var i =0; i < 9; i++){
        if (state[i] == 0) return i
    }
    return null
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

function make_node(dir, pat, parent){
    return [dir, pat, parent]
}

function eq_pat(pat1, pat2){
    for (var i = 0; i < 9; i++){
        if (pat1[i] != pat2[i]) return 1
    }
    return 0
}

function encode(pat){
    var s = 0
    for (var i = 0; i < 9; i++)
        s = s * 9 + pat[i]
    return s
}

function in_list(a, lst){
    for(var i = 0; i < lst.length; i++){
        if (a == lst[i]) return true
    }
    return false
}


function work(){
    var state1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var state = make_random_state(40, state1)
    puts(state)
    var mm = []
    var queue = [make_node(null, state, null)]
    var count = 0
    while (queue.length > 0){
        var node = queue.shift()
        if (eq_pat(node[1], state1) == 0) break
        var mlist = next_move_list(node[1], node[0])
        for (var i = 0; i < mlist.length; i++){
            var st = move(node[1], mlist[i])
            if (in_list(encode(st), mm)) continue
            var node1 = make_node(mlist[i], st, node)
            mm.push(encode(st))
            queue.push(node1)
        }
        count += 1
        if (count >= 200000){
            puts("counter!")
            break
        }
    }
    puts("queue length = " + queue.length)
    action = ""
    while (true){
        if (node[0] == null) break
        action = dir[node[0]] + action
        node = node[2]
    }
    puts(action)
    set_board_state(state)
    play_moves(action)
}

work()
//  run()
