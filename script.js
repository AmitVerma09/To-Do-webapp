const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Write something!");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = ` <span class="text">${taskText}</span>
        <button class="delete-btn">❌</button>`;

    li.addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') {
            this.classList.toggle('done');
        }
    });

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = ""; 
    taskInput.focus();   // Cursor wapas set karein
}

// Enter key se add karne ke liye
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});