document.addEventListener("DOMContentLoaded", () => {

  const todoList = document.querySelector("#tasks");
  const taskText = document.querySelector("#new-task-description");
  const addTaskButton = document.querySelector("#submit-button");

  addTaskButton.addEventListener('click', addTask);

function addTask (event){
  event.preventDefault();
  const task = document.createElement("li");
  const deleteBtn = document.createElement("button");

  todoList.appendChild(task);
  todoList.appendChild(deleteBtn);

  task.innerText = `${taskText.value}`;
  deleteBtn.innerText = `❌`;
  taskText.value = "";

  deleteBtn.addEventListener('click', function (event){
    event.preventDefault();
    task.remove();
  })

}

});
