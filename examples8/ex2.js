function h(s){
   var n = 0
   for (var i = 0; i < s.length; i++){
      n = (n * 234 + s.charCodeAt(i)) % 103
   }
   return n
}
function test(){
    var strs = ["meijo", "university", "abc",
        "shiogama","yagoto", "ueda", "hara",
        "irinaka", "yagoto-nisseki", "kanayama"]
    for (var i = 0; i < strs.length; i++){
        puts(strs[i] + " : " + h(strs[i]))
    }
}

test()
