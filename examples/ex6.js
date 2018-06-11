

function binary(){
   var EPS = 1.0e-6
   var left = 0.0
   var right = 2.0
   while (right - left > EPS){
      var m = (left + right) / 2
      if (m * m - 2 < 0) left = m
      else right = m
   }
   puts(left + ", " + right)
}

binary()
