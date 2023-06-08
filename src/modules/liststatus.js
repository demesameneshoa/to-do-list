import {
  addTostorage,
} from './handletodo.js';
// create list from local storage
const toDoLists = JSON.parse(localStorage.getItem('toDoLists')) || [];
// change complete status true or false by checkbox status
const updateStatus = (checkedIndex, boxstatus) => {
  toDoLists[checkedIndex - 1].completed = boxstatus;
  addTostorage(toDoLists);
  window.location.reload();
};

export default updateStatus;