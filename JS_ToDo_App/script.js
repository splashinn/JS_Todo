var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

switch(mm) {
  case 1:
    mm = "January"
    break;
  case 2:
    mm = "February"
    break;
  case 3:
    mm = "March"
    break;
  case 4:
    mm = "April"
    break;
  case 5:
    mm = "May"
    break;
  case 6:
    mm = "June"
    break;
  case 7:
    mm = "July"
    break;
  case 8:
    mm = "August"
    break;
  case 9:
    mm = "September"
    break;
  case 10:
    mm = "October"
    break;
  case 11:
    mm = "November"
    break;
  case 12:
    mm = "December"
    break;
  default:
    break;
}

today = mm + ' ' + dd + ', ' + yyyy;

var currentDate = document.getElementById('current_date');
currentDate.innerHTML = today;

var addButton = document.getElementById('add_button');
var taskField = document.getElementById('task_field');
var taskList = document.getElementById('task_list');

addButton.onclick = function(event) {
  event.preventDefault();
  
	var newTaskElement = document.createElement('div');
  newTaskElement.classList.add('tasks');
  var newTask = document.createTextNode(taskField.value);

  var removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  var removeButtonX = document.createTextNode('x');

  if (taskField.value !== '') {
    taskList.appendChild(newTaskElement);
    newTaskElement.appendChild(newTask);
    newTaskElement.appendChild(removeButton);
    removeButton.appendChild(removeButtonX);
  }

  newTaskElement.onclick = function() {
    newTaskElement.classList.add('strike_through');
  };

  removeButton.onclick = function() {
    taskList.removeChild(newTaskElement);
  };

  taskField.value = '';

};