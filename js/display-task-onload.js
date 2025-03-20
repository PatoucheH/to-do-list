import { tasks, list, checkedTasks } from "../main.js";
import { createTask } from "./create-task.js";

/**
 * display tasks when page load
 */

export function displayTasksOnLoad() {
  tasks.forEach((task) => {
    const newLi = createTask();
    const p = newLi.querySelector(".text-task");
    p.innerText = task;
    list.appendChild(newLi);
  });

  checkedTasks.forEach((task) => {
    const newLi = createTask();
    const p = newLi.querySelector(".text-task");
    const check = newLi.querySelector("#check-task");
    const deleteButton = newLi.querySelector("#delete-button");

    deleteButton.classList.add("active");
    check.setAttribute("checked", true);
    p.innerText = task;
    newLi.classList.add("active");
    list.appendChild(newLi);
  });
}
