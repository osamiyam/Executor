function add2(x, y){
    return x + y
}

var add2x = (x, y) => x + y;
var add2y = (x, y) =>{
    let x1 = x
    let y1 = y
    return x1 + y1
}

puts(add2(23, 34))
puts(add2x(23, 34))
puts(add2y(23, 34))
