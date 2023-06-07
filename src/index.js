// Importing CSS styles
import './style.css';
import render from './modules/displaylist.js';

// Adding main component to the HTML file
const mainContainer = document.querySelector('.main');
mainContainer.appendChild(render());
