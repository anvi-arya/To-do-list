const createTask = document.querySelector("btn");
createTask.addEventListener("click", display);

function display() {
  const task = document.getElementById(task).value;
  const dispTask = document.createElement("input");
  dispTask.textContent = task;
  body.appendchild(dispTask);
}
