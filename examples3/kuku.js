// Kuku table
function kuku(n){
    var i, j, k;
    for (i = 1; i <= n; i++){
        var s = "";
        for (j = 1; j <= n; j++){
            k = i * j;
            s = s + "   " + ((k < 10)?" ":"") + k;
        }
        puts(s);
    }
}
kuku(9);
