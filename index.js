const createTask = document.querySelector(".form-designn");
const taskContainer = document.querySelector(".container");
createTask.addEventListener("submit", display);

function display(event) {
  event.preventDefault();
  const task = document.getElementById("task-input");
  const dispTask = document.createElement("div");
  const text = document.createElement("span");
  const cross = document.createElement("span");
  dispTask.appendChild(text);
  dispTask.appendChild(cross);
  cross.textContent = "❌";
  dispTask.classList.add("task-item");
  if (task.value === "") return;
  text.textContent = task.value;

  text.onclick = (e) => {
    console.log(e);
    e.target.classList.add("completed");
  };
  cross.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    console.log(e);
  });
  task.value = "";
  taskContainer.appendChild(dispTask);
}
