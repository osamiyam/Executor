function h(s){
   var n = 0
   for (var i = 0; i < s.length; i++){
      n = (n * 234 + s.charCodeAt(i)) % 31
   }
   return n
}

var strs = ["meijo", "university", "abc",
    "shiogama","yagoto", "ueda", "hara",
    "irinaka", "yagoto-nisseki", "kanayama"]
for (var i = 0; i < strs.length; i++){
    puts(strs[i] + " : " + h(strs[i]))
}

table = []


function add_data(table, data){
   var i = 0
   while (true){
     var v = (h(data) + i + i * i) % 31
     if (table[v] === undefined){
        table[v] = data
        return
     }
     i = i + 1
   }
}

for (var i = 0; i < strs.length; i++){
   add_data(table, strs[i])
}
for (var i = 0; i < table.length; i++){
    puts(i + ":" + table[i])
}

