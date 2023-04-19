function addNewTask() {
  event.preventDefault();
  
  const taskList = document.getElementById('task-list');

  // Get the values of the task and priority input fields
  const taskInput = document.getElementById('task');
  const priorityInput = document.getElementById('priority');
  const task = taskInput.value;
  const priority = priorityInput.value;

  // Dicionario para nueva tarea
  const newTask = {
    task: task,
    priority: priority
  };

  // Crea un "li" para cada tarea
  const taskItem = document.createElement('li');

  // Añade un checkbox a cada elemento de la lista
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'task';
  checkbox.value = task;

  // Detecta cuando se marcan los checkbox y le cambia la clase
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      taskItem.classList.add('completed');
      taskList.appendChild(taskItem); // Mueve las tareas completas al final de la lista
    } else {
      taskItem.classList.remove('completed');
      taskList.insertBefore(taskItem, taskList.firstChild); // Mueve las tareas incompletas al principio de la lista
    }
  });

  taskItem.appendChild(checkbox);

  // Crea un nuevo elemento "label" dentro de la lista
  const label = document.createElement('label');
  label.innerText = task + ' - Prioridad: ' + priority;
  taskItem.appendChild(label);

  // Mueve las tareas incompletas al principio de la lista
  taskList.insertBefore(taskItem, taskList.firstChild);

  // Resetea los campos del formulario
  const form = document.getElementById('task-form');
  form.reset();
}

const addButton = document.getElementById('add-task-btn');
addButton.addEventListener('click', addNewTask);


function clearAllTasks() {
  event.preventDefault();
  var taskList = document.getElementById("task-list");
  var completedTaskList = document.getElementById("completed-task-list");
  
  // Crea un array con todos los elementos "li" de la lista
  const taskItems = Array.from(taskList.getElementsByTagName('li'));

  // Bucle para eliminar los checkbox
  taskItems.forEach((item) => {
    const checkbox = item.getElementsByTagName('input')[0];
    if (checkbox && checkbox.type === 'checkbox') {
      item.removeChild(checkbox);
    }
  });

  // Copia las tareas a la lista oculta
  while (taskList.firstChild) {
    completedTaskList.appendChild(taskList.firstChild);
  }

}

var clearAllBtn = document.getElementById('clear-all-btn');
clearAllBtn.addEventListener('click', clearAllTasks);

// Funcion para mostrar la lista oculta de tareas
function showCompletedTasks() {
  event.preventDefault();
  var completedTaskListContainer = document.getElementById("completed-task-list-container");
  var button = document.getElementById("show-completed-tasks-button");

  const hiddenTaskList = document.getElementById('completed-task-list');

  if (completedTaskListContainer.style.display === "none") {
    completedTaskListContainer.style.display = "block";
    button.innerHTML = "Ocultar Tareas Anteriores";
  } else {
    completedTaskListContainer.style.display = "none";
    button.innerHTML = "Mostrar Tareas Anteriores";
  }
}

var showCompletedTasksButton = document.getElementById("show-completed-tasks-button");
showCompletedTasksButton.addEventListener("click", showCompletedTasks);
