const addButton = document.getElementById('add-button');
const inputLine = document.querySelector('input');
const myTasks = document.querySelector('#tasks');
const scoreKeeper = document.getElementById('score');

addButton.onclick = function () {
   if (inputLine.value.length == 0) {
       alert('You have to type something, gosh!');
   }
   else {
       myTasks.innerHTML += `
       <div class="current-tasks">
       <span class="tasks-pending">${inputLine.value}</span>
       <button class="delete">
       <ion-icon name="trash-outline"></ion-icon>
       </button>
       </div>`;

       const deleteButton = document.querySelectorAll(".delete");
       for(let i = 0; i < deleteButton.length; i++) {
           deleteButton[i].onclick = function () {
            this.parentNode.remove();
           }
       }
       const tasksPending = document.querySelectorAll(".tasks-pending");
       for(let i = 0; i < tasksPending.length; i++) {
           tasksPending[i].onclick = function () {
               this.classList.toggle("accomplished");
           }
       }
       inputLine.value = "";
       }
   }