
var move_list = [[1, 0], [0, 1], [1, 1], [2, 0], [0, 2]]

function move_state(st, mv){
    var [c0, e0, boat, c1, e1] = st
    var [mc, me] = mv
    if (boat == 0){
	if (c0 >= mc && e0 >= me)
	    return [c0 - mc, e0 - me, 1, c1 + mc, e1 + me]
	else return null
    } else {
	if (c1 >= mc && e1 >= me)
	    return [c0 + mc, e0 + me, 0, c1 - mc, e1 - me]
	else return null
    }
}

function check_cond(st){
    if ((st[0] > st[1] && st[1] > 0) ||
	(st[3] > st[4] && st[4] > 0)) return false
    else return true
}


var tabu_list = []

function eq_state(st1, st2){
    for (var i = 0; i < 5; i++)
	if (st1[i] !== st2[i]) return false
    return true
}

function put_tabu_list(st){
    for (var i = 0; i < tabu_list.length; i++){
	if (eq_state(tabu_list[i], st)) return false
    }
    tabu_list.push(st)
    return true
}

function work(){
    var queue = []

    var init_state = [3, 3, 0, 0, 0]
    var final_state = [0, 0, 1, 3, 3]
    put_tabu_list(init_state)
    queue.push([init_state, null])

    while(true){
	if (queue.length == 0){
	    puts("no solutions.")
	    return
	}
	var ele = queue.shift()
	var [st, parent] = ele
	if (eq_state(st, final_state)) break;
	else if (check_cond(st)){
	    for (var i = 0; i < move_list.length; i++){
		var m = move_state(st, move_list[i])
		if (m == null) continue
		if (put_tabu_list(m) == false) continue
		queue.push([m, ele])
	    }
	}
    }

    var answer = []
    while (ele != null){
	var [st, parent] = ele
	answer.unshift(st)
	ele = parent
    }
    for (var i = 0;  i < answer.length; i++)
	puts(i + " : " + answer[i])
}

work()

