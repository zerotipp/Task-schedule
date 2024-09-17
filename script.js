document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskTime = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');

    const task = taskInput.value;
    const time = new Date(taskTime.value);

    if (task && taskTime.value) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${task} - ${time.toLocaleString()}</span><button>Delete</button>`;
        taskList.appendChild(listItem);

        listItem.querySelector('button').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        setTimeout(() => {
            alert(`Reminder: ${task}`);
        }, time - new Date());

        taskInput.value = '';
        taskTime.value = '';
    }
});