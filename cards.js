"use strict";
// var cardOutput = document.getElementById("cardOutput");
var i = [];
var deleteListen;
var listen;
// var textInput = document.getElementById("textArea").value;
var cardOutput = document.getElementById("cardOutput"); //placeholder
var deleteBtn;

// Button click
var create = document.getElementById("createButton").addEventListener("click", function(event) {

var text = textArea.value;
buttonClick(text,deleteBtn);
listen = document.getElementsByClassName("i");
textArea.value = "";
});
// Button click
// var create = document.getElementById("createButton").addEventListener("click", buttonClick);

// var text = textArea.value;
// create(text,deleteBtn);
// listen = document.getElementsByClassName("i");
// textArea.value = "";



// Create element and button
function buttonClick(element, deleteBtn) {
  var textInput = document.getElementById("textArea").value;

  console.log("textInput: ", textInput);
  var element = document.createElement("div");
  element.setAttribute("class", "i" + i);

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");

  deleteBtn.innerHTML = "Delete";

  var text = document.createTextNode(textInput);
  element.appendChild(text);
  document.getElementById("cardOutput").appendChild(element);
  document.body.appendChild(element);
  // i++;
  // element.innerHTML;
  // deleteBtn.innerHTML;

  console.log("element: ", element);
  console.log("deleteBtn: ", deleteBtn);

  element += cardOutput.appendChild(element).appendChild(deleteBtn);
  var listen = document.getElementsByClassName("delete");

  cardOutput.addEventListener("click", function(event) {
    if (event.target === deleteBtn) {
      i++;
      console.log("i: ", i);
      remove();
    }
  });
}

function remove(cardOutput) {
  listen = document.getElementsByClassName("i");
  console.log("listen: ", listen);
  listen[0].remove();
}


function counter() {
  i++;
  return i;
}
