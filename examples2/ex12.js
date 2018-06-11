function power(a, n){
  if (n == 0) return 1
  else return power(a, n - 1) * a
}
puts(power(2, 10))
