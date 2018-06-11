var n = 100000
var s = 0
for (var i = 1; i < n; i++){
    var x = Math.random()
    var y = Math.random()
    if (x * x + y * y < 1) s = s + 1
}
puts(s / n)
puts(s / n * 4)
