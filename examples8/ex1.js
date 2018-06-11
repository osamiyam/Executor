function charCode(str){
   var m = []
   for (var i = 0; i < str.length; i++){
     code = str.charCodeAt(i)
     m.push(code.toString(16))
   }
   puts(str)
   puts(m.join("-"))
}

charCode("Meijo University")
