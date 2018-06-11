
function jacobi(n){
    var [a, b, c, d] = [1, 2, 1, 4]
    var [e, f] = [2, -3]
    var F = function (p){
        var [x, y] = p
        return [(e - b * y) / a, (f - c * x) / d]
    }
    var p = [0, 0]
    for (var i = 0; i < n; i++){
        p = F(p)
    }
    return p
}
