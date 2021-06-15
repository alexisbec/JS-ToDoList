export class Task {
  constructor(title, description, dueDate, priority, project = 'default') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  // UI color logic
  static getColor(arr, i) {
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

  static buttonColor(color) {
    let btnEdit;
    let btnDelete;
    if (color === 'success' || color === 'info') {
      btnEdit = 'warning';
      btnDelete = 'danger';
    }
    if (color === 'danger') {
      btnEdit = 'primary';
      btnDelete = 'warning';
    }
    return [btnEdit, btnDelete];
  }

  static allTasks(projectArr) {
    const allProjects = [];

    for (let i = 0; i < projectArr.length; i += 1) {
      allProjects.push(...projectArr[i].tasks);
    }
    return allProjects;
  }

  // button logic for tasks edit/delete

  // Delete Tasks
  static deleteTask(tasksArr, projectName, projectArr, renderTasks) {
    const DELETE_BTN = document.querySelectorAll('#delete-btn');
    for (let i = 0; i < DELETE_BTN.length; i += 1) {
      DELETE_BTN[i].addEventListener('click', () => {
        tasksArr.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(projectArr));
        renderTasks(projectName, tasksArr);
      });
    }
  }

  // Edit tasks
  static editTask(projectTasks, taskProject, projectArr, renderTasks) {
    const EDIT_BTN = document.querySelectorAll('#edit-btn');

    for (let i = 0; i < EDIT_BTN.length; i += 1) {
      EDIT_BTN[i].addEventListener('click', () => {
        const EDIT_TASK_NAME = document.querySelector(`#edit-task-name-${i}`).value;
        const EDIT_TASK_DESCRIPTION = document.querySelector(`#edit-task-description-${i}`).value;
        const EDIT_TASK_DATE = document.querySelector(`#edit-task-date-${i}`).value;
        const EDIT_TASK_PRIORITY = document.querySelector(`#edit-task-priority-${i}`).value;

        if (EDIT_TASK_NAME === '') {
          return;
        }
        if (EDIT_TASK_DESCRIPTION === '') {
          return;
        }
        if (EDIT_TASK_DATE === '') {
          return;
        }
        if (EDIT_TASK_PRIORITY === '') {
          return;
        }

        projectTasks[i].title = EDIT_TASK_NAME;
        projectTasks[i].description = EDIT_TASK_DESCRIPTION;
        projectTasks[i].date = EDIT_TASK_DATE;
        projectTasks[i].priority = EDIT_TASK_PRIORITY;

        localStorage.setItem('projects', JSON.stringify(projectArr));
        renderTasks(taskProject, projectTasks);
      });
    }
  }
}

// Task Creation Module (IIFE);
export const taskCreation = (() => {
  // Task Form
  const taskForm = () => {
    // Tasks Form Information
    const TASKS_FORM = document.forms['tasks-form'];

    // prevent form default behaviour
    TASKS_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    return TASKS_FORM;
  };

  // Render tasks on the UI
  const renderTasks = (projectName, tasksArr, projectArr) => {
    const TASK_LIST = document.querySelector('#tasks-list');
    TASK_LIST.innerHTML = '';
    const ADD_TASK_BTN = document.querySelector('#add-task');
    const FORM = document.querySelector('#multiCollapseExample2');

    if (projectName === 'All Tasks') {
      ADD_TASK_BTN.classList.add('d-none');
      FORM.classList.add('d-none');
      const allProjects = Task.allTasks(projectArr);

      for (let i = 0; i < allProjects.length; i += 1) {
        const color = Task.getColor(allProjects, i);
        /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
        TASK_LIST.innerHTML += `
            <li class="">
                        <p>
                            <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                                ${allProjects[i].title}
                            </button>
                        </p>
                        
                        <div class="collapse" id="task-${i}">
                            <div class="card card-body bg-${color} mb-4">
                                <ul class="list-group">
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${allProjects[i].description}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${allProjects[i].dueDate}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${allProjects[i].priority}</li>
                                </ul>
                            </div>
                        </div>
                    </li>
        `;
      }
    } else {
      ADD_TASK_BTN.classList.remove('d-none');
      FORM.classList.remove('d-none');

      TASK_LIST.innerHTML = '';
      for (let i = 0; i < tasksArr.length; i += 1) {
        const color = Task.getColor(tasksArr, i);
        /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
        TASK_LIST.innerHTML += `
            <li>
                <p>
                    <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                        ${tasksArr[i].title}
                    </button>
                </p>
                    
                <div class="collapse" id="task-${i}">
                    <div class="card card-body bg-${color} mb-4">
                        <ul class="list-group ">
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${tasksArr[i].description}</li>
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${tasksArr[i].dueDate}</li>
                            <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${tasksArr[i].priority}</li>
                        </ul>
                    
                        <div class="d-flex mt-3 justify-content-between">
                            <div>
                                <p>
                                    <button class="btn btn-${Task.buttonColor(color)[0]}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample-${i}" aria-expanded="false" aria-controls="collapseExample-${i}">
                                        Edit
                                    </button>
                                       
                                    <button id="delete-btn" type="button" class="btn btn-${Task.buttonColor(color)[1]}">Mark as complete</button>
                                </p>
                                
                                <div class="collapse multi-collapse" id="collapseExample-${i}">
                                    <form id="edit-tasks-form">
                                        <div class="mb-3">
                                            <label for="edit-task-name-${i}" class="form-label text-info">Task Title</label>
                                            <input type="text" class="form-control" id="edit-task-name-${i}" required>
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-description-${i}" class="form-label text-info">Task Description</label>
                                            <input type="text" class="form-control" id="edit-task-description-${i}" required>
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-date-${i}" class="form-label text-info">Due Date</label>
                                            <br>
                                            <input type="date" id="edit-task-date-${i}" name="trip-start" required>
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-priority-${i}" class="form-label text-info">Priority</label>
                                            <select id="edit-task-priority-${i}" class="form-select" aria-label="Default select example" required>
                                                <option selected>Select Priority</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <button id="edit-btn" type="submit" class="btn btn-secondary">Edit Task</button>
                                        </div
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;

        document.querySelector(`#edit-task-name-${i}`).setAttribute('value', tasksArr[i].title);
        document.querySelector(`#edit-task-description-${i}`).setAttribute('value', tasksArr[i].description);
        document.querySelector(`#edit-task-date-${i}`).setAttribute('value', tasksArr[i].dueDate);
      }

      Task.editTask(tasksArr, projectName, projectArr, renderTasks);

      Task.deleteTask(tasksArr, projectName, projectArr, renderTasks);
    }
  };

  // create task and display it on the UI
  const createNewTask = (projectArr) => {
    const TASKS_FORM = taskForm();
    const TASK_BTN = document.querySelector('#task-btn');
    TASK_BTN.addEventListener('click', () => {
      const TASK_NAME = TASKS_FORM.querySelector('#task-name').value;
      const TASK_DESCRIPTION = TASKS_FORM
        .querySelector('#task-description')
        .value;
      const TASK_DATE = TASKS_FORM.querySelector('#task-date').value;
      const TASK_PRIORITY = TASKS_FORM.querySelector('#task-priority').value;
      const TASK_PROJECT = TASKS_FORM.querySelector('#task-project').value;
      const PROJECT = projectArr.filter(
        project => project.title === TASK_PROJECT,
      );

      if (TASK_NAME === '') {
        return;
      }
      if (TASK_DESCRIPTION === '') {
        return;
      }
      if (TASK_DATE === '') {
        return;
      }
      if (TASK_PRIORITY === '') {
        return;
      }

      // create new task instance
      const newTask = new Task(
        TASK_NAME,
        TASK_DESCRIPTION,
        TASK_DATE,
        TASK_PRIORITY,
        TASK_PROJECT,
      );
      PROJECT[0].tasks.push(newTask);

      localStorage.setItem('projects', JSON.stringify(projectArr));

      taskForm();

      // render task to the UI
      renderTasks(TASK_PROJECT, PROJECT[0].tasks, projectArr);
    });
  };

  return {
    createNewTask, renderTasks,
  };
})();

export default { taskCreation };
