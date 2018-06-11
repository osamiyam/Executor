use_dict()
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
var len = wordlist.length
res = bsearch(0, len, "zygote", wordlist)
var t2 = new Date()
puts("Time = " + (t2 - t1) + " ms")
puts("Result = " + res)
