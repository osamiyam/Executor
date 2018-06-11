
// 第３回課題解答例 //

function kadai1(a, n){
    function is_even(n){
        return Math.floor(n / 2) * 2 == n;
    } /* is_even */
    if (n == 0) return 1;
    else{
        var an2 = kadai1(a, Math.floor(n / 2));
        if (is_even(n)) return an2 * an2;
        else return an2 * an2 * a; 
    } /* if */
} /* kadai1 */

function kadai2(n){
    function A(n){
        if (n == 0) return "a";
        else{
            var A1 = A(n - 1);
            var B1 = B(n - 1);
            return A1 + A1 + B1;
        } /* if */
    } /* A */
    function B(n){
        if (n == 0) return "b";
        else {
            var A1 = A(n - 1);
            var B1 = B(n - 1);
            return B1 + A1;
        } /* if */
    } /* B */
    return [A(n), B(n)];
} /* kadai2 */

function test(){
    puts("---kadai1---");
    puts(kadai1(2, 1000));
    puts("---kadai2---");
    var i;
    for (i = 0; i < 5; i++){
        puts(i + ": " +
             JSON.stringify(kadai2(i)));
    } /* for */
} /* test */

test();