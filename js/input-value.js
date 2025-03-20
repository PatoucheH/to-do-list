/**
 *
 * @param {li} li Get the input value and put it in the p of the newLi
 */

export function getInputValue(li) {
  const input = document.getElementById("add-task");
  const textP = li.querySelector(".text-task");
  const inputValue = input.value;
  const inputClean = inputValue[0].toUpperCase() + inputValue.slice(1);

  textP.innerText = inputClean;
  return textP;
}
