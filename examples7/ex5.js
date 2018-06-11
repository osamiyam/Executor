function hanoi(n, x, y, z){
    if (n == 0) return
    else {
	hanoi(n - 1, x, z, y);
	puts("ディスク " + n + " を " + x + " から " +
	     z + " へ移動" )
	hanoi(n - 1, y, x, z);
    }
}

hanoi(6, 'X', 'Y', 'Z')
