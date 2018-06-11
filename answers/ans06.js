
// 第６回課題解答例 //

function kadai(a, b){
    function f(x, y){
        return y * y - x * x * x  - a * x - b;
    }
    function transform(x, y){
        return [x * 4 - 2, y * 4 - 2];
    }
    function draw(x1, y1, x2, y2, depth){
        var [xx1, yy1] = transform(x1, y1);
        var [xx2, yy2] = transform(x2, y2);
        var v1 = f(xx1, yy1);
        var v2 = f(xx1, yy2);
        var v3 = f(xx2, yy1);
        var v4 = f(xx2, yy2);
        if ((v1 > 0 && v2 > 0 && v3 > 0 && v4 > 0) ||
            (v1 < 0 && v2 < 0 && v3 < 0 && v4 < 0)) return;
        else if (depth == 0){
            draw_rect([x1, y1], [x2, y2]);
        } else{
            var mx = (x1 + x2) / 2;
            var my = (y1 + y2) / 2;
            draw(x1, y1, mx, my, depth - 1);
            draw(x1, my, mx, y2, depth - 1);
            draw(mx, y1, x2, my, depth - 1);
            draw(mx, my, x2, y2, depth - 1);
        }
    }
    draw(0, 0, 1, 1, 8);
}

function test(){
    cls();
    kadai(-2, 0);
    // kadai(-1, 1);
    // kadai(-3, 2)
}
test();