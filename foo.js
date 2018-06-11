
var download_file = function (){
    var url = "data:x-application/text," + escape(editor.getValue())
    window.open(dataUrl(url))
}

var read_file = function (fname) {
    var httpObj = new XMLHttpRequest();
    httpObj.onreadystatechange = function (){
	if (httpObj.readyState == 4 && httpObj.status == 200){
	    editor.setValue(httpObj.responseText);
	}
    };
    httpObj.open("get", fname, true);
    httpObj.send(null);
};

var back_stack = [];
var forward_stack = [];

var show_stack_indicator = function(){
    getElementById("stack_inidicator").innerHTML = 
	(back_stack.length + ":" + forward_stack.length);
}

var pop_stack = function(){
    if (back_stack.length > 0){
	back_stack.push(editor.getValue());
	editor.setValue(back_stack.pop());
	show_stack_inidicator();
    }
    
}

var push_stack = function(){
    if (forward_stack.length > 0){
	forward_stack.push(editor.getValue());
	editor.setValue(back_stack.pop());
	show_stack_inidicator();
    }
    
}

var pushCurrent = function(){
    back_stack.push(editor.getValue());
    editor.setValue("");
    show_stack_inidicator();
}

var deleteCurrent = function(){
    if (back_stack.length > 0){
	editor.setValue(back_stack.pop());
    } else if (forward_stack.length > 0){
	editor.setValue(forward_stack.pop());
    } else {
	editor.setValue("");
    }
    show_stack_inidicator();
}

var dupulicateCurrent = function(){
    back_stack.push(editor.getValue());
    show_stack_inidicator();
}
