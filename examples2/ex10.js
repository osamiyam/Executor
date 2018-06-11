function sum_n(n){
    if (n == 0) return 0
    else return sum_n(n - 1) + n
}

puts(sum_n(100))
