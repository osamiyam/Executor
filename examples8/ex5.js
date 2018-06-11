

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

var a = make_table()
function search(s){
  m = a[h(s)]
  if (m === undefined) puts(s + " is undefined")
  else puts(m)
}
search("irinaka")
search("foo")

function delete_element(s){
  var val = a[h(s)]
  if (val === undefined)
    puts("cannot delete " + s + ".")
  else{
    a[h(s)] = undefined
    puts("ok. " + s + " has been deleted.")
  }
}

delete_element("irinaka")
delete_element("foobar")
search("irinaka")
