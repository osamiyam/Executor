// Random segments

function work(n){
    var i;
    cls();
    for (i = 0; i < n; i++){
        var pt1 = [Math.random(), Math.random()];
        var pt2 = [Math.random(), Math.random()];
        draw_line(pt1, pt2);
    }
}
work(1000);
