// create list from local storage
const taskLists = JSON.parse(localStorage.getItem('toDoLists')) || [];
// change complete status true or false by checkbox status
export const updateStatus = (checkedIndex, boxstatus) => {
  taskLists[checkedIndex - 1].completed = boxstatus;
  localStorage.setItem('toDoLists', JSON.stringify(taskLists));
  window.location.reload();
};
// function that clears all completed lists
export const clearCompleted = () => {
  const filteredArray = taskLists.filter((obj) => obj.completed === false);
  const maxIndex = filteredArray.length;
  for (let i = 0; i < maxIndex; i += 1) {
    filteredArray[i].taskindex = i + 1;
  }
  localStorage.setItem('toDoLists', JSON.stringify(filteredArray));
  window.location.reload();
};