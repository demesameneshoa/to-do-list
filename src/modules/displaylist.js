import {toDoLists,Todo} from './todolist.js';

// Main component that holds all the elements
export const render = () => {
  const container = document.createElement('div');
  const input = document.createElement('input');
  const ul = document.createElement('ul');
  const clearBtn = document.createElement('button');

  // Adding classes and attributes to DOM elements
  container.classList.add('list-container');
  input.placeholder = 'Add to your list...';
  clearBtn.textContent = 'Clear all completed';
  clearBtn.classList.add('clear-btn');
  clearBtn.disabled = true;

  // Mapping through toDoLists array
  toDoLists.map((toDoList) => {
    ul.appendChild(Todo(toDoList));
    return 'Completed';
  });

  // Appending DOM elements to parent container
  container.append(input, ul, clearBtn);
  return container;
};