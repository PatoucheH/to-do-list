import { tasks, list } from "../main.js";
import { updateLocalStorage } from "./update-storage.js";

/**
 *
 * @param {li} li Receive a li in argument to add to the list and to the arraay
 */

export function addTask(li) {
  const text = li.querySelector(".text-task").innerText;
  if (tasks.includes(text)) {
    alert("Tâche déjà ajouté ! ");
  } else {
    list.appendChild(li);
    tasks.push(text);
    updateLocalStorage();
  }
}
