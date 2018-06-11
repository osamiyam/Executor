var strs = ["meijo", "university", "abc",
    "shiogama","yagoto", "ueda", "hara",
    "irinaka", "yagoto-nisseki", "kanayama"]
function make_table(){
   var a = []
   for (var i = 0; i < strs.length; i++){
     var v = h(strs[i])
     a[v] = strs[i]
   }
   return a
}
puts(make_table())
