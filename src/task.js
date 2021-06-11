class Task {
    constructor(title, description, dueDate, priority, project = "default") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.exists = true;
    }
}

// Tasks Form Information
const TASKS_FORM = document.forms['tasks-form'];

// prevent form default behaviour
TASKS_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Task Creation Module (IIFE);
export const taskCreation = (() => {
    // create task and display it on the UI
    const createNewTask = (tasksArr) => {
        const TASK_BTN = document.querySelector("#task-btn");
        TASK_BTN.addEventListener('click', () => {
            const TASK_NAME = TASKS_FORM.querySelector("#task-name").value;
            const TASK_DESCRIPTION = TASKS_FORM.querySelector("#task-description").value;
            const TASK_DATE = TASKS_FORM.querySelector("#task-date").value;
            const TASK_PRIORITY = TASKS_FORM.querySelector("#task-priority").value;
            const TASK_PROJECT = TASKS_FORM.querySelector("#task-project").value;

            // create new task instance
            newTask(tasksArr, TASK_NAME, TASK_DESCRIPTION, TASK_DATE, TASK_PRIORITY, TASK_PROJECT);

            // render task to the UI
            renderTask(TASK_PROJECT, tasksArr);

            document.querySelector('#tasks-form').reset();
        })
    }

    // create task object
    const newTask = (tasksArr, name, description, date, priority, project) => {
        const newTask = new Task(name, description, date, priority, project);
        tasksArr.push(newTask);
    }

    // render tasks in the UI
    const renderTask = (taskProject, tasksArr) => {
        const TASKS_LIST = document.querySelector("#tasks-list");

        TASKS_LIST.innerHTML = ``;
        let projectTasks = tasksArr.filter(task  => task.project === taskProject && task.exists === true);

        for (let i = 0; i < projectTasks.length; i++) {
            let color = getColor(projectTasks, i);

            TASKS_LIST.innerHTML += `
            <li class="">
                <p>
                    <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                      ${projectTasks[i].title}
                    </button>
                </p>
                    
                <div class="collapse" id="task-${i}">
                    <div class="card card-body bg-${color} mb-4">
                        <ul class="list-group ">
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${projectTasks[i].description}</li>
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${projectTasks[i].dueDate}</li>
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${projectTasks[i].priority}</li>
                        </ul>
                    
                        <div class="d-flex mt-3">
                            <div>
                                <p>
                                    <button id="edit-task" type="button" class="btn btn-info mt-4" href="#multiCollapseExample1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1">Edit</button>
                                    <button id="delete-task" type="button" class="btn btn-outline-warning mt-4 ms-4">Delete</button>
                                </p>
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <form id="tasks-form">
                                        <div class="mb-3">
                                            <label for="edit-task-name" class="form-label text-info">Task Title</label>
                                            <input type="text" class="form-control" id="edit-task-name">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-description" class="form-label text-info">Task Description</label>
                                            <input type="text" class="form-control" id="edit-task-description">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-date" class="form-label text-info">Due Date</label>
                                            <br>
                                            <input type="date" id="edit-task-date" name="trip-start">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-priority" class="form-label text-info">Priority</label>
                                            <select id="edit-task-priority" class="form-select" aria-label="Default select example">
                                                <option selected>Select Priority</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button id="edit-task-btn" type="submit" class="btn btn-info">Submit</button>
                                        </div
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;

            const DELETE = document.querySelector('#delete-task');
            DELETE.onclick = () => {
                projectTasks[i].exists = false;
                renderTask(taskProject, projectTasks);
            }

            const EDIT = document.querySelector('#edit-task-btn');
            EDIT.onclick = () => {
                const EDIT_NAME = document.querySelector('#edit-task-name').value;
                const EDIT_DESC = document.querySelector('#edit-task-description').value;
                const EDIT_DATE = document.querySelector('#edit-task-date').value;
                const EDIT_PRIOR = document.querySelector('#edit-task-priority').value;

                projectTasks[i].title = EDIT_NAME;
                projectTasks[i].description = EDIT_DESC;
                projectTasks[i].dueDate = EDIT_DATE;
                projectTasks[i].priority = EDIT_PRIOR;
                renderTask(taskProject, projectTasks);
            }
        }
    }

    const getColor = (arr, i) => {
        let color;
        if (arr[i].priority === 'low') {
            color = 'success';
        } else if (arr[i].priority === 'medium') {
            color = 'info';
        } else {
            color = 'danger';
        }
        return color;
    }

    return {
        createNewTask
    }
})();

export default { taskCreation };