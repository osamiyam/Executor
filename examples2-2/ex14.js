var count = 0
for (var i = 1000; i < 10000; i++){
    if (i % 6 == 0 || i % 7 == 0)
	count += 1
}
puts(count)
