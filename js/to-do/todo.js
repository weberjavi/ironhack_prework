
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

 document.getElementById("todo-input");

  function addToDoItem() {
    "use strict";
    var input = document.getElementById("todo-input").value;// A través del metodo .value accedemos al texto introducido dentro dentro de la <form>
    var list = document.getElementsByClassName("todo-list-items");//El método .getElementsByClassName devuelve un array (es imprescindible especificar el número del elemento dentro del Array)
    var item = document.createElement("li");//Es necesario crear el elemento antes de introducirlo en la página
    item.textContent = input;
    list[0].appendChild(item);
  }

  function markAsDone() {
    "use strict";
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var firstListItem = document.querySelector('.todo-list-items li:nth-of-type(1)');
    firstListItem.remove();
    var doneList = document.getElementsByClassName("done-list-items");
    doneList[0].classList.add('done');
    doneList[0].appendChild(firstListItem);   

  }
  
}
