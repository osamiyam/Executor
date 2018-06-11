var puts = function(mesg){
    var tt = typeof mesg;
    if (tt == 'object')
        postMessage("++" + JSON.stringify(mesg));
    else 
        postMessage("++" + mesg);
}
function draw_line(pt1, pt2){
    postMessage("+g1" + JSON.stringify([pt1, pt2]));
}
function draw_rect(pt1, pt2){
    postMessage("+g2" + JSON.stringify([pt1, pt2]));
}
function draw_triangle(pt1, pt2, pt3){
    postMessage("+g3" + JSON.stringify([pt1, pt2, pt3]));
}
function draw_triangle_w(pt1, pt2, pt3){
    postMessage("+g4" + JSON.stringify([pt1, pt2, pt3]));
}
function cls(){
    postMessage("+g0");
}
function use_dict(){
    importScripts("wordlist.compress.js")
}

function start_board8(pt1, pt2){
    postMessage("+b0");
}

function set_board_state(board){
    postMessage("+b1" + JSON.stringify(board))
}

function play_moves(moves){
    var i;
    for (i = 0; i < moves.length; i++){
	postMessage("+b2" + moves[i])
    } /* for */
}

var foo = function(event){
   try {
      eval(event.data);
   } catch (err){
      puts("Error: " + err.message);
   }
   postMessage("**");
}
addEventListener("message", foo, false);
