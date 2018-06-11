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

function bsearch(p, q, word, wl){
   while (q - p > 1){
     var m = Math.floor((p + q) / 2)
     if (wl[m] == word) return [m, word]
     else if (wl[m] < word) p = m
     else q = m
   }
   return [null, word]
}

var t1 = new Date()
  for (var i = 0; i < 1000; i++)
    res = find("zygote", wordlist)
var t2 = new Date()
puts("dumb algorithm -> " + (t2 - t1) + " ms")
puts(res)

var t1 = new Date()
  for (var i = 0; i < 1000; i++)
    res = bsearch(0, wordlist.length, "zygote", wordlist)
var t2 = new Date()
puts("binary search algorithm -> " + (t2 - t1) + " ms")
puts(res)
