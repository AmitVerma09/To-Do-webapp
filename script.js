function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerText = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.style.background = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
}