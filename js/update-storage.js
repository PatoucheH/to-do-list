import { checkedTasks, tasks } from "../main.js";

/**
 * Update local storage use to add or remove a task
 */

export function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("checkedTasks", JSON.stringify(checkedTasks));
}
