const tasks = [
  {
    description: 'Buy milk',
    completed: false,
    index: 0,
  },
  {
    description: 'Pick up laundry',
    completed: true,
    index: 1,
  },
  {
    description: 'Water plants',
    completed: false,
    index: 2,
  },
];

const renderTasks = () => {
  const todoList = document.getElementById('todo-list');

  tasks.forEach((task) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = task.description;

    if (task.completed) {
      todoItem.classList.add('completed');
    }

    todoList.appendChild(todoItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});