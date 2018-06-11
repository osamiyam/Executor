
function binary(left, right){
   var EPS = 1.0e-6
   if (right - left <= EPS){
      puts(left + ", " + right)
   } else {
      var m = (left + right) / 2
      if (m * m - 2 < 0) binary(m, right)
      else binary(left, m)
   }
}

binary(0, 2)
