import { deleteTask } from "./delete-task.js";
/**
 *  Create the li to add to the list
 * @returns a li to add to a ul within a check the task and a delete button
 */

export function createTask() {
  const newLi = document.createElement("li");
  newLi.classList.add("task");

  const P = document.createElement("p");
  P.classList.add("text-task");

  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "check-task");
  check.addEventListener("click", (e) => {
    newLi.classList.toggle("active");
    buttonDelete.classList.toggle("active");
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("id", "delete-button");
  buttonDelete.innerText = "X";
  buttonDelete.addEventListener("click", () => {
    deleteTask(newLi);
  });

  newLi.appendChild(P);
  newLi.appendChild(check);
  newLi.appendChild(buttonDelete);

  return newLi;
}
