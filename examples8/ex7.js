var strs = ["meijo", "university", "abc",
    "shiogama","yagoto", "ueda", "hara",
    "irinaka", "yagoto-nisseki", "kanayama"]

function make_table2(){
   var a = []
   for (var i = 0; i < strs.length; i++){
     var v = h(strs[i])
     if (a[v] === undefined) a[v] = [strs[i]]
     else a[v].push(strs[i])
   }
   return a
}
puts(make_table2().join("|"))
