var m = 6
var n = 6
function phi(i, j){
    if (i == m) return 1
    else if (j == n) return 1
    else return phi(i + 1, j) + phi(i, j + 1)
}

puts(phi(0, 0))
