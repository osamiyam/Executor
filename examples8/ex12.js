
function h(s){
  var sum = 0
  var p = 255
  for (var i = 0; i < s.length; i++){
     var c = s.charCodeAt(i)
     sum = (sum * 256 + c) % p
  }
  return sum
}

function work(s){
  puts(s + ": " + h(s))
}

work("abc")
work("bca")
work("yamamoto")
work("motoyama")
