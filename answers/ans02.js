
// 第２回課題解答例 //

function kadai1(n){
    var i1, i2, i3;
    var count = 0;
    for (i1 = 0; i1 <= n; i1++){
        for (i2 = 0; i2 <= n; i2++){
            for (i3 = 0; i3 <= n; i3++){
                if (i1 + i2 == 2 * i3)
                    count += 1;
            } /* for */
        } /* for */
    } /* for */
    return count;
} /* kadai1 */

function kadai2(n, m1, m2){
    var i;
    var count = 0;
    for (i = 1; i <= n; i++){
        if (Math.floor(i / m1) * m1 == i &&
            Math.floor(i / m2) * m2 != i)
            count += 1;
    }
    return count;
} /* kadai2 */

function test(){
    puts("--- kadai1 ---");
    for (i = 1; i < 20; i++){
        puts(i + ": " + kadai1(i));
    } /* for */
    puts("--- kadai2 ---");
    puts(kadai2(1000, 5, 7));
    puts(kadai2(1000, 3, 7));
}
test();