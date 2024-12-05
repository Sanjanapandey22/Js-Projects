const tasks = document.querySelectorAll(".checked");

// Add event to existing tasks
tasks.forEach(task => attachTaskEvents(task));

const input = document.getElementById("input-box");
const button = document.querySelector(".Addbtn");
const taskList = document.getElementById("list-container");

// Function to add click toggle (so when i reclick it goes back to original state)
function attachTaskEvents(task) {
  task.addEventListener("click", function () {
    if (task.style.textDecoration === "line-through") {
      task.style.textDecoration = "none";
    } else {
      task.classList.toggle("done");
    }
  });
}

button.addEventListener("click", function () {
  const taskText = input.value;

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    newTask.classList.add("task");

    attachTaskEvents(newTask); 
    taskList.appendChild(newTask);
    input.value = "";
  }
});
