// DOM:

const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

const arrayTasks = [];

// Funciones para las tareas
function addTask() {
  if (inputTask.value == "") {
    alert("Ingrese un texto para la tarea1.");
    return;
  }
  // Creamos la nueva tarea
  const task = new Task(inputTask.value);
  // Agregamos al arreglod e tareas
  arrayTasks.push(task);
  // Agregamos la tarea al DOM:
  document.querySelector(".form").before(task.createElement());
  inputTask.value = "";
  inputTask.focus();
}

function checkTask(checkbox) {
  if (checkbox.checked) {
    parentTask(checkbox).done();
    checkbox.setAttribute("disabled", true);
  }
}

function deleteTask(anchor) {
  parentTask(anchor).delete();
}

function updateTask(anchor) {
    const newText = prompt("Ingrese le nuevo nombre de su tarea");
    parentTask(anchor).update(newText);
}

function parentTask(element) {
    return arrayTasks.find((task) => task.id == element.parentElement.parentElement.id);
}

const chxTaskDone = document.querySelector("#chx_task_done");
const chxTaskDelete = document.querySelector("#chx_task_delete");
const chxTaskTodo = document.querySelector("#chx_task_todo");

chxTaskDone.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".delete");
  // const taskTodo = document.querySelectorAll(".todo");
  // const taskDelete = document.querySelectorAll(".delete");
  // if (this.checked) {
  //     taskTodo.forEach((todo) => (todo.style.display = "none"));
  //     taskDelete.forEach((task) => (task.style.display = "none"));
  //     // Vamos a mostrar solo las tareas terminadas
  //     // por ende vamos a buscar las tareas que tenan todo y delete
  // } else {
  //     taskTodo.forEach((todo) => (todo.style.display = "block"));
  //     taskDelete.forEach((task) => (task.style.display = "block"));
  // }
};

chxTaskDelete.onchange = function () {
  showOrHideElement(this.checked, ".done", ".todo");
  // const taskTodo = document.querySelectorAll(".todo");
  // const taskDone = document.querySelectorAll(".done");
  // if (this.checked) {
  //     taskTodo.forEach((todo) => (todo.style.display = "none"));
  //     taskDone.forEach((done) => (done.style.display = "none"));
  //     // Vamos a mostrar solo las tareas terminadas
  //     // por ende vamos a buscar las tareas que tenan todo y delete
  // } else {
  //     taskTodo.forEach((todo) => (todo.style.display = "block"));
  //     taskDone.forEach((done) => (done.style.display = "block"));
  // }
};

chxTaskTodo.onchange = function () {
  showOrHideElement(this.checked, ".done", ".delete");
  // const taskDelete = document.querySelectorAll(".delete");
  // const taskDone = document.querySelectorAll(".done");
  // if (this.checked) {
  //     taskDelete.forEach((del) => (del.style.display = "none"));
  //     taskDone.forEach((done) => (done.style.display = "none"));
  //     // Vamos a mostrar solo las tareas terminadas
  //     // por ende vamos a buscar las tareas que tenan todo y delete
  // } else {
  //     taskDelete.forEach((del) => (del.style.display = "block"));
  //     taskDone.forEach((done) => (done.style.display = "block"));
  // }
};

function showOrHideElement(checked, typeOne, typeTwo) {
  const elementOne = document.querySelectorAll(typeOne);
  const elementTwo = document.querySelectorAll(typeTwo);
  if (checked) {
    elementOne.forEach((One) => (One.style.display = "none"));
    elementTwo.forEach((Two) => (Two.style.display = "none"));
  } else {
    elementOne.forEach((One) => (One.style.display = "flex"));
    elementTwo.forEach((Two) => (Two.style.display = "flex"));
  }
}
