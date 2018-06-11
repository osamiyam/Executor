

function iter(n){
    var EPS = 1.0e-7
    var F = (x) => (x + n) / (x + 1)
    var [x, x2] = [2.0, 0.0] 
    while (Math.abs(x - x2) > EPS){
        x2 = x
        x = F(x)
    }
    return x
}
