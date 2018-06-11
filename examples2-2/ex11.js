var j = 1
while (j <= 9 ){
    var i = 1
    var s = ''
    while (i <= 9){
	var s = s + ' ' + (i * j)
	i = i + 1
    }
    puts(s)
    j = j + 1
}
