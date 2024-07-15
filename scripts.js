document.addEventListener('DOMContentLoaded', () => {
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

        const title = document.createElement('textarea');
        title.classList.add('note__title');
        title.placeholder = 'Título';

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

        note.appendChild(title);
        note.appendChild(content);
        note.appendChild(deleteBtn);
        note.appendChild(dateString);

        document.getElementById('notes-list').appendChild(note);
    });

    document.getElementById('add-task-btn').addEventListener('click', () => {
        const taskLabel = document.createElement('label');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-task-btn');
        deleteBtn.textContent = '-';
        deleteBtn.addEventListener('click', () => {
            taskLabel.remove();
            updateProgress();
        });

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', updateProgress);

        const span = document.createElement('span');
        span.textContent = 'Nueva tarea';

        taskLabel.appendChild(deleteBtn);
        taskLabel.appendChild(checkbox);
        taskLabel.appendChild(span);
        document.getElementById('tasks').appendChild(taskLabel);
    });

    function updateProgress() {
        const tasks = document.querySelectorAll('#tasks input[type="checkbox"]');
        const completedTasks = document.querySelectorAll('#tasks input[type="checkbox"]:checked');

        const progress = tasks.length === 0 ? 0 : (completedTasks.length / tasks.length) * 100;

        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-badge').style.left = progress + '%';
        document.getElementById('progress-badge').textContent = Math.round(progress) + '%';
        document.getElementById('progress-text').textContent = '(' + Math.round(progress) + '%)';
    }

    document.querySelectorAll('.delete-task-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            updateProgress();
        });
    });

    document.querySelectorAll('#tasks input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
});
