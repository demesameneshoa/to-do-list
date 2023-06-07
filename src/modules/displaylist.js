import Todo from './todolist.js';

// toDoLists data
const toDoLists = [
  {
    description: 'Read all the lesson articles.',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete all the projects.',
    completed: false,
    index: 1,
  },
  {
    description: 'Do the quiz.',
    completed: false,
    index: 2,
  },
];

// Main component that holds all the elements
const render = () => {
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

export default render;