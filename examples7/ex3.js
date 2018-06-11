function make_a_tree(n){
    if (n === 0) return ['L']
    var fun_out = 2
    if (Math.random()< 0.5) fun_out = 3
    var s = ['A']
    for (var i = 0; i < fun_out; i++){
	s.push(make_a_tree(n - 1))
    }
    return s
}

function spaces(n){
    var s = ""
    for (var i = 0; i < n; i++) s += " "
    return s
}

function print_tree2(tree, level){
    var len = tree.length
    puts( spaces(level * 2) + tree[0] )
    for (var i = 1; i < len; i++){
	print_tree2(tree[i], level + 1)
    }
}

+ function (){
    var dd = make_a_tree(3)
    puts(dd)
    print_tree2(dd, 0)
}()
