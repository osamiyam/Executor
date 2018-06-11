function work(A, b){
    var m = 50
    function h(k){
        var b = A * k
        var n = Math.floor((b - Math.floor(b)) * m)
        return n
    }
    var freq = []
    for (var i = 0; i < m; i++) freq[i] = 0
    for (var i = 0; i < 100000; i += b){
        var j = h(i)
        freq[j] += 1
    }
    var amax = Math.max.apply(null, freq)
    var amin = Math.min.apply(null, freq)
    return (amax - amin)
}

for (var b = 1; b < 100; b++)
   puts(b + " " + work(Math.sqrt(2), b) + " " + work((Math.sqrt(5) - 1) / 2, b))
