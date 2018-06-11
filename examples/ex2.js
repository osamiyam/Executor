use_dict()
function find(word, wl){
   for (var i = 0; i < wl.length; i++){
      if (word == wl[i] ){
          return [i, word]
          break;
      }
   }
   return null
}
var t1 = new Date()
res = find("zygote", wordlist)
var t2 = new Date()
puts("Time = " + (t2 - t1) + " ms")
puts("Result = " + res)
