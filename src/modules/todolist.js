// Todo Component
const Todo = (toDoList) => {
  // Creating DOM elements
  const li = document.createElement('li');
  const itemTaskElement = document.createElement('div');
  const checkBox = document.createElement('input');
  const checkBoxContainer = document.createElement('div');
  const label = document.createElement('label');
  const iconMenu = document.createElement('div');
  iconMenu.innerHTML = '<i class="fas fa-ellipsis-v"></i>';

  // Adding classes and attributes to DOM elements
  checkBoxContainer.classList.add('checkbox-container');
  iconMenu.classList.add('menu-container');
  itemTaskElement.classList.add('list-element');

  checkBox.type = 'checkbox';
  checkBox.id = `${toDoList.taskindex}`;
  checkBox.checked = false;
  label.classList.remove('completed-task');
  if (toDoList.completed === true) {
    checkBox.checked = true;
    label.classList.add('completed-task');
  }
  label.htmlFor = `check${toDoList.taskindex}`;
  label.classList.add('tasks');
  label.id = `${toDoList.taskindex}`;
  label.innerText = toDoList.description;

  // Appending DOM elements to parent elements
  checkBoxContainer.append(checkBox, label);
  itemTaskElement.append(checkBoxContainer, iconMenu);
  li.appendChild(itemTaskElement);

  // Return todo list item
  return li;
};

export default Todo;