document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('to-do-form');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            removeTask(e.target.parentElement);
        } else if (e.target.tagName === 'LI') {
            toggleTask(e.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const button = document.createElement('button');
        button.textContent = 'Remove';
        li.appendChild(button);
        taskList.appendChild(li);
    }

    function removeTask(task) {
        task.remove();
    }

    function toggleTask(task) {
        task.classList.toggle('completed');
    }
});
