import { tasks, checkedTasks, list } from "../main.js";
import { updateLocalStorage } from "./update-storage.js";


/**
 * 
 * @param {li} newLi change the li of array if he is checked or not 
 */

export function changeArray(newLi) {
  const text = newLi.querySelector(".text-task").innerText;

  if (tasks.includes(text)) {
    const index = tasks.indexOf(text);
    tasks.splice(index, 1);
    checkedTasks.push(text);
  } else if (checkedTasks.includes(text)) {
    const index = checkedTasks.indexOf(text);
    checkedTasks.splice(index, 1);
    tasks.push(text);
  }
  updateLocalStorage();
}
