function power(a, n){
    if (n == 0) return 1
    else if (n % 2 == 0){   /* nが偶数のとき */
        var b = power(a, n / 2);
        return b * b
    } else {               /* nが奇数のとき */
        var b = power(a, (n - 1) / 2)
        return b * b * a
    }
}

puts(power(2, 10))
