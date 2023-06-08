import Todo from './todolist.js';
import Task from './list.js';

const container = document.createElement('div');
const input = document.createElement('input');
const ul = document.createElement('ul');
const clearBtn = document.createElement('button');
// toDoLists data
let toDoLists = [];

// Main component that holds all the elements
export const render = () => {
  toDoLists = JSON.parse(localStorage.getItem('toDoLists')) || [];
  // Adding classes and attributes to DOM elements
  container.classList.add('list-container');
  input.classList.add('task-desc');
  input.placeholder = 'Add to your list...';
  clearBtn.textContent = 'Clear all completed';
  clearBtn.classList.add('clear-btn');
  clearBtn.disabled = true;
  container.append(input);
  // Mapping through toDoLists array
  ul.innerHTML = '';
  toDoLists.map((toDoList) => {
    ul.appendChild(Todo(toDoList));
    return 'completed';
  });
  container.append(ul);
  // Appending DOM elements to parent container
  container.append(clearBtn);
  const mainContainer = document.querySelector('.main');
  mainContainer.appendChild(container);
};

export const addTostorage = () => {
  localStorage.setItem('toDoLists', JSON.stringify(toDoLists));
  // window.location.reload();
};
// adding tasks to the todolist array
export const addTask = (description) => {
  const newTask = new Task();
  newTask.description = description;
  newTask.completed = false;
  newTask.taskindex = toDoLists.length + 1;
  toDoLists.push(newTask);
  addTostorage();
  window.location.reload();
};
// adding to local storage

export const editTask = (newDescription, editindex) => {
  toDoLists[editindex - 1].description = newDescription;
  addTostorage();
};

export const removeTask = (delteIndex) => {
  // remove object from array
  const newindex = Number(delteIndex);
  toDoLists.splice(newindex - 1, 1);
  // reset indexes of all array values
  const maxIndex = toDoLists.length;
  for (let i = 0; i < maxIndex; i += 1) {
    toDoLists[i].taskindex = i + 1;
  }
  addTostorage();
};
