import { tasks, checkedTasks } from "../main.js";
import { updateLocalStorage } from "./update-storage.js";

/**
 *
 * @param {li} li Delete the task
 */

export function deleteTask(li) {
  li.remove();
  const text = li.querySelector(".text-task").innerText;

  if (tasks.includes(text)) {
    const index = tasks.indexOf(text);
    tasks.splice(index, 1);
  } else if (checkedTasks.includes(text)) {
    const index = checkedTasks.indexOf(text);
    checkedTasks.splice(index, 1);
  }
  updateLocalStorage();
}
