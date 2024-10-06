document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const taskDescription = document.getElementById('new-task-description').value;
      if (taskDescription) {
          const newTask = document.createElement('li');
          newTask.textContent = taskDescription;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'x';
          deleteButton.addEventListener('click', function() {
              taskList.removeChild(newTask);
          });

          newTask.appendChild(deleteButton);
          taskList.appendChild(newTask);

          document.getElementById('new-task-description').value = '';
      }
  });
});
