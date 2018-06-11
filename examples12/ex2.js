
function selection_sort(lst){
    var n = lst.length
    for (var i = 0; i< n; i++){
        var m = lst[i]
        var mj = i
        for (var j = i + 1; j < n; j++){
            if (m > lst[j]){
                m = lst[j]
                mj = j
            }
        }
        [lst[mj], lst[i]] = [lst[i], lst[mj]]
    }
}

function work(){
    var lst = []
    var N = 100000
    for (var i = 0; i < N; i++)
        lst.push(Math.random())
    var t1 = new Date()
    selection_sort(lst)
    var t2 = new Date()
    puts((t2 - t1) + "ms")
    puts(lst[0] + ":" + lst[N / 2] + ":" + lst[N - 1])
}

work()

