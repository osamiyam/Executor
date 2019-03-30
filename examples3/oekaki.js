// Oekaki //

function work(progx){
    var step = 0.05;
    var pendown = true;
    var i;
    var s = "";
    var prog = "";
    for (i = 0; i < progx.length; i++)
	prog += progx[i]
    cls();
    var curX = step, curY = step;
    for (i = 0; i < prog.length; i++ ){
        var c = prog[i];
        if (c == 'u'){
            if (pendown) draw_line([curX, curY], [curX, curY + step]);
            curY = curY + step;
            s += c;
        } else if (c == 'd'){
            if (pendown) draw_line([curX, curY], [curX, curY - step]);
            curY = curY - step;
            s += c;
        } else if (c == 'r'){
            if (pendown) draw_line([curX, curY], [curX + step, curY]);
            curX = curX + step;
            s += c;
        } else if (c == 'l'){
            if (pendown) draw_line([curX, curY], [curX - step, curY]);
            curX = curX - step;
            s += c;
        } else if (c == 'z'){
            pendown = ! pendown
            s += c;
        }
    }
    puts(s);
}

work(input_string)

/**** 以下を右上の「プログラムへの入力」欄へコピー＆ペースト
uuuuddrruuddddzrrz
rrlluurrlluurrzrrz
ddddrrzrruuuuz
ddddrrzrruuuuz
ddddrruuuull
****/
