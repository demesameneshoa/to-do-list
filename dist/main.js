(()=>{const e=[{description:"Buy milk",completed:!1,index:0},{description:"Pick up laundry",completed:!0,index:1},{description:"Water plants",completed:!1,index:2}];renderTasks=()=>{const t=document.getElementById("todo-list");e.forEach((e=>{const d=document.createElement("li");d.textContent=e.description,e.completed&&d.classList.add("completed"),t.appendChild(d)}))},document.addEventListener("DOMContentLoaded",(()=>{renderTasks()}))})();