function make_a_tree(n){
    if (n == 0) return ['L']
    var fun_out = 2
    if (Math.random()< 0.5) fun_out = 3
    var s = ['A']
    for (var i = 0; i < fun_out; i++){
	s.push(make_a_tree(n - 1))
    }
    return s
}

puts(make_a_tree(3))
