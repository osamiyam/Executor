function test(){
    var a = 23
    var b = 44
    puts(a + b)
    {
	var c = 33
	puts(a + c)
	{
	    var d = 34
	    puts(a + d)
	    puts(d + d)
	}
	{
	    var e = 99
	    puts(a + e)
	}
    }
}
test()
