function judge(c){
    var m = ["aa", "bb", "ababab"]
    for (var i = 0; i < m.length; i++){
	if (c.search(m[i])>= 0) return true
    }
    return false
}

var ans = []
function dfs(s){
    if (judge(s)) return
    else {
	ans.push(s)
	dfs(s + "a")
	dfs(s + "b")
    }
}

dfs("")
puts(ans)
