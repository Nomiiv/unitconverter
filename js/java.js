"use strict"

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",convert);
inputType.addEventListener("change",convert);
resultType.addEventListener("change",convert);

function convert() {
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;

	if(inputTypeValue === "meter" && resultTypeValue==="inch"){

		result.value = Number(input.value) * 39.4;
	}else if(inputTypeValue === "meter" && resultTypeValue==="feet"){

		result.value = Number(input.value) * 3.3;

	}else if(inputTypeValue === "meter" && resultTypeValue==="yard"){
		result.value = Number(input.value) * 1.1
	}

	if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
		result.value = Number(input.value) * 39370.1;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
		result.value = Number(input.value) * 3280.8;
	}else if(inputTypeValue === "kilometre" && resultTypeValue==="yard"){
		result.value = Number(input.value) * 1093.6;
	}

	if(inputTypeValue === "Centimeter" && resultTypeValue==="inch"){
		result.value = Number(input.value) * 0.394;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="feet"){
		result.value = Number(input.value) * 0.033;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="yard"){
		result.value = Number(input.value) * 0.011;
	}
}

let todos = [];
let listRoot = document.querySelector("#list-root");
let listForm = document.querySelector("[data-list-form]");
let listInput = document.querySelector("[data-list-input]");

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (listInput.value.trim() === "") {
    return;
  }
  todos.push(listInput.value.trim());
  updateList();
  listInput.value = "";
});

function todoList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let todoListItem = document.createElement("li");
    todoListItem.innerText = item;
    todoListItem.classList.add("todo-list-item");
    todoListItem.addEventListener("click", removeItem);
    list.append(todoListItem);
  });
  return list;
}

function removeItem(event) {
  let itemToRemove = event.target.innerText;
  todos = todos.filter((item) => item !== itemToRemove);
  updateList();
}

function updateList() {
  listRoot.innerHTML = "";
  listRoot.append(todoList(todos));
}

updateList();
