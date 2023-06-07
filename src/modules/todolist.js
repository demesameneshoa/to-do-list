// toDoLists data
export const toDoLists = [
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
  
  // Todo Component
export const Todo = (toDoList) => {
    let isSelected = false;
    
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
    checkBox.id = `check${toDoList.index}`;
    
    label.htmlFor = `check${toDoList.index}`;
    label.innerText = toDoList.description;
  
   
    // Appending DOM elements to parent elements
    checkBoxContainer.append(checkBox, label);
    itemTaskElement.append(checkBoxContainer, iconMenu);
    li.appendChild(itemTaskElement);
  
    // Return todo list item
    return li;
  };