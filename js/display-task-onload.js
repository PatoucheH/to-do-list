import { tasks, list } from "../main.js";
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
}
