function work(){
    var A = (Math.sqrt(5) - 1) / 2
    var m = 50
    function h(k){
        var b = A * k
        var n = Math.floor((b - Math.floor(b)) * m)
        return n
    }
    var freq = []
    for (var i = 0; i < m; i++) freq[i] = 0
    for (var i = 0; i < 100000; i++){
        var j = h(i)
        freq[j] += 1
    }
    puts(freq)
}

work()
