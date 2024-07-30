document.addEventListener('DOMContentLoaded', () => {
    // Manejador de Notas
    document.querySelectorAll('.dashboard-nav__item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.dashboard-nav__item').forEach(i => i.classList.remove('dashboard-nav__item--selected'));
            item.classList.add('dashboard-nav__item--selected');

            let itemId = item.querySelector('a').getAttribute('href');

            document.querySelectorAll('.dashboard-content__panel').forEach(panel => panel.style.display = 'none');
            document.querySelector('.dashboard-content__panel[data-panel-id="' + itemId + '"]').style.display = 'block';

            console.log(itemId);
        });
    });

    document.querySelectorAll('.dashboard-list__item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.dashboard-list__item').forEach(i => i.classList.remove('dashboard-list__item--active'));
            item.classList.add('dashboard-list__item--active');

            let itemId = item.getAttribute('data-item-id');

            document.querySelectorAll('.dashboard-preview__panel').forEach(panel => panel.style.display = 'none');
            document.querySelector('.dashboard-preview__panel[data-panel-id="' + itemId + '"]').style.display = 'block';

            console.log(itemId);
        });
    });

    document.getElementById('add-note-btn').addEventListener('click', () => {
        const note = document.createElement('div');
        note.classList.add('note');

        const content = document.createElement('textarea');
        content.classList.add('note__content');
        content.placeholder = 'Escribe tu nota aquí...';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('note__delete');
        deleteBtn.textContent = '-';
        deleteBtn.addEventListener('click', () => note.remove());

        const date = new Date();
        const dateString = document.createElement('span');
        dateString.classList.add('note__date');
        dateString.textContent = date.toLocaleString();

        note.appendChild(content);
        note.appendChild(deleteBtn);
        note.appendChild(dateString);

        document.getElementById('notes-list').appendChild(note);
    });

    // Manejador de Tareas
    const tasks = document.getElementById("tasks");
    const addTaskBtn = document.getElementById("add-task-btn");
    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");
    const progressBadge = document.getElementById("progress-badge");

    // Función para actualizar el progreso
    function updateProgress() {
        const checkboxes = tasks.querySelectorAll("input[type='checkbox']");
        const checked = tasks.querySelectorAll("input[type='checkbox']:checked").length;
        const total = checkboxes.length;
        const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;

        progressText.textContent = `(${percentage}%)`;
        progressBar.style.width = `${percentage}%`;
        progressBadge.style.left = `calc(${percentage}% - 1.5625rem)`;
        progressBadge.textContent = `${percentage}%`;
    }

    // Función para eliminar una tarea
    function deleteTask(event) {
        if (event.target.classList.contains("task-delete-btn")) {
            const label = event.target.parentNode;
            tasks.removeChild(label);
            updateProgress();
        }
    }

    // Función para editar una tarea
    function editTask(event) {
        if (event.target.tagName === "SPAN") {
            const span = event.target;
            const currentText = span.textContent;
            const input = document.createElement("input");
            input.type = "text";
            input.value = currentText;
            input.classList.add("task-edit-input");

            input.addEventListener("blur", () => {
                span.textContent = input.value;
                span.style.display = "inline";
                input.remove();
            });

            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    input.blur();
                }
            });

            span.style.display = "none";
            span.parentNode.insertBefore(input, span.nextSibling);
            input.focus();
        }
    }

    // Event listener para añadir una nueva tarea
    addTaskBtn.addEventListener("click", () => {
        const label = document.createElement("label");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = "Nueva tarea";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "task-delete-btn";
        deleteBtn.textContent = "-";

        label.appendChild(checkbox);
        label.appendChild(span);
        label.appendChild(deleteBtn);
        tasks.appendChild(label);

        updateProgress();
    });

    tasks.addEventListener("change", updateProgress);
    tasks.addEventListener("click", deleteTask);
    tasks.addEventListener("dblclick", editTask);

    updateProgress();
});
