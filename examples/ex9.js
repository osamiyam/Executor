
function newton2(){
   var x = 2.0
   for (var i = 0; i < 10; i++){
      x = (x * x + 2) / x / 2
      puts(i + " " + x)
   }
}

newton2()
