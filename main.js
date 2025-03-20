import { displayTasksOnLoad } from "./js/display-task-onload.js";
import { createTask } from "./js/create-task.js";
import { getInputValue } from "./js/input-value.js";
import { addTask } from "./js/add-task.js";
import { deleteTask } from "./js/delete-task.js";

export const list = document.getElementById("container-task");
export const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
export const checkedTasks =
  JSON.parse(localStorage.getItem("checkedTasks")) || [];

const buttonToAdd = document.getElementById("button-add-task");
const input = document.getElementById("add-task");
const deleteTasksDone = document.getElementById("delete-done-task");

displayTasksOnLoad();

buttonToAdd.addEventListener("click", (e) => {
  e.preventDefault();

  const newLi = createTask();

  getInputValue(newLi);
  addTask(newLi);
  input.value = "";
});

deleteTasksDone.addEventListener("click", (e) => {
  const items = list.querySelectorAll("li");

  items.forEach((item) => {
    if (item.classList.contains("active")) {
      deleteTask(item);
    }
  });
});
