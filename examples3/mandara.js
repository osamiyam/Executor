// Mandara

function work(n){
    var i, j;
    var ptx = [];
    var r = 0.45;
    puts("start...");
    cls();
    for (i = 0; i < n; i++){
        var th = 2 * Math.PI * i / n;
        ptx[i] = [r * Math.cos(th) + 0.5, r * Math.sin(th) + 0.5];
    }
    for (i = 0; i < n; i++){
        for (j = i + 1; j < n; j++){
            draw_line(ptx[i], ptx[j]);
        }
    }
}
work(21);

