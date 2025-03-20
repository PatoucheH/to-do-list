import { tasks } from "../main.js";
import { updateLocalStorage } from "./update-storage.js";

/**
 *
 * @param {li} li Delete the task
 */

export function deleteTask(li) {
  li.remove();
  const textP = li.querySelector(".text-task");
  const index = tasks.indexOf(textP.innerText);

  tasks.splice(index, 1);
  updateLocalStorage();
}
