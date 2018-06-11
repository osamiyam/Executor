function sum_n(n){
    puts('-->sum_n(' + n + ')')
    if (n == 0) var val = 0
    else var val = sum_n(n - 1) + n
    puts('<--sum_n(' + n + ') = ' + val)  
    return val
}

puts(sum_n(5))
