// function toDo(){
// 	var todoInput = document.getElementById('wtd').value;
// 	//alert(todoInput);
// 	document.getElementById('root').innerHTML = todoInput;
// }

// Create a "close" button and append it to each list item
var closeBtnNode = document.getElementsByTagName("LI");
for (var i = 0; i < closeBtnNode.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	closeBtnNode[i].appendChild(span);
}

//Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function (ev) {
		// debugger;
		ev.target.parentElement.remove();
		//var div = this.parentElement;
		//div.style.display = "none";
	}
}

var list = document.querySelector("ul");
list.addEventListener('click', function (event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("checked");
	}
}, false);

function toDo() {
	var li = document.createElement("li");
	var todoInputVal = document.getElementById("wtd").value;
	var todoInputValNod = document.createTextNode(todoInputVal);
	li.appendChild(todoInputValNod);

	if (todoInputVal === "") {
		alert("Please enter value");
	} else {
		document.getElementById("root").prepend(li);
	}
	document.getElementById("wtd").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function (ev) {
			// debugger;
			ev.target.parentElement.remove();
			// var div = this.parentElement;
			// div.style.display = "none";
		}
	}
}