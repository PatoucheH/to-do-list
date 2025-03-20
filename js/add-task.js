import { tasks, list } from "../main.js";
import { updateLocalStorage } from "./update-storage.js";

/**
 *
 * @param {li} li Receive a li in argument to add to the list and to the arraay
 */

export function addTask(li) {
  const textP = li.querySelector(".text-task");

  list.appendChild(li);
  tasks.push(textP.innerText);
  updateLocalStorage();
}
