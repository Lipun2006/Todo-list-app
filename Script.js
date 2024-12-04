const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});