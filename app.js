const addButton = document.getElementById('add-button');
const inputLine = document.querySelector('input');
const myTasks = document.querySelector('#tasks');

addButton.onclick = function () {
   if (inputLine.value.length == 0) {
       alert('You have to type something, gosh!');
   }
   else {
       myTasks.innerHTML += `
       <div class="current-tasks">
       <span>${inputLine.value}</span>
       <button class="delete">Delete</button>
       </div>`;

       const deleteButton = document.querySelectorAll(".delete");
       for(let i = 0; i < deleteButton.length; i++) {
           deleteButton[i].onclick = function () {
            this.parentNode.remove();
           }
       }
       }
   }