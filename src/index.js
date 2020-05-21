document.addEventListener("DOMContentLoaded", () => {

  const todoList = document.querySelector("#tasks");
  const taskText = document.querySelector("#new-task-description");
  const addTaskButton = document.querySelector("#submit-button");

  addTaskButton.addEventListener('click', addTask);

function addTask (event){
  event.preventDefault();
  const task = document.createElement("li");
  task.innerText = `${taskText.value}`;
  todoList.appendChild(task);
  taskText.value = "";
  
}

});
