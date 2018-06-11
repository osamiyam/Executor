function make_tree(n){
    if (n == 0) return [0]
    else {
	return [n, make_tree(n - 1), make_tree(n - 1)]
    }
}

puts(make_tree(3))
