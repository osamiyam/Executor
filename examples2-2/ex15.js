function prob_int(){
    for (var i = 1; i <= 20; i++)
	for (var j = 1; j <= 20; j++)
	    for (var k = 1; k <= 30; k++)
		if (i * i + j * j == k * k)
		    puts( i + " " + j + " " + k)
}
prob_int()
