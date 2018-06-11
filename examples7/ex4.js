var b = []
var n = 10
function print_bin(){
    var s = ""
    for (var i = 0; i < n; i++){
	s += b[i]
    }
    puts(s)
}

function binary(k){
    if (k >= n){
	print_bin();
    } else {
	b[k] = 0
	binary(k + 1)
	b[k] = 1
	binary(k + 1)
    }
}

binary(0)
