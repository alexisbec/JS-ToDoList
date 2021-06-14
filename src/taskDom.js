import { Task } from "./main";
import { Project } from "./main";

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
  }

  const deleteTask = (project, tasksArr, taskProject, i, TASKS_LIST) => {
    TASKS_LIST.addEventListener('click', (e) => {
      if (e.target.id === `${project}-delete-btn-${i}`) {
        tasksArr[i].exists = false;
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
        taskCreation.renderTasks(taskProject, tasksArr);
      }
    });
  }

  // Render tasks on the UI
  const renderTasks = (projectName, tasksArr) => {
    const TASK_LIST = document.querySelector('#tasks-list');
    TASK_LIST.innerHTML = '';
    const ADD_TASK_BTN = document.querySelector('#add-task');
    const FORM = document.querySelector('#multiCollapseExample2');
    const project = projectName.split(' ').join('-');

    if (projectName === 'All Projects') {
      ADD_TASK_BTN.classList.add('d-none');
      FORM.classList.add('d-none');
      for (let i = 0; i < tasksArr.length; i += 1) {
        const color = Task.getColor(tasksArr, i);
        /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
        TASK_LIST.innerHTML += `
                    <li class="">
                        <p>
                            <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                                ${tasksArr[i].title}
                            </button>
                        </p>
                        
                        <div class="collapse" id="task-${i}">
                            <div class="card card-body bg-${color} mb-4">
                                <ul class="list-group">
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${tasksArr[i].description}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${tasksArr[i].dueDate}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${tasksArr[i].priority}</li>
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
      const projectTasks = tasksArr.filter(task => task.project === projectName && task.exist === true);
      for (let i = 0; i < projectTasks.length; i += 1) {
        const color = Task.getColor(projectTasks, i);
        /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
        TASK_LIST.innerHTML += `
            <li>
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
                    
                        <div class="d-flex mt-3 justify-content-between">
                            <div>
                                <p>
                                    <button class="btn btn-${Task.buttonColor(color)[0]}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample-${i}" aria-expanded="false" aria-controls="collapseExample-${i}">
                                        Edit
                                    </button>

                                    <button id="${project}-delete-btn-${i}" type="button" class="btn btn-${Task.buttonColor(color)[1]}">Delete</button>
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
                                            <button id="edit-btn-${i}" type="submit" class="btn btn-secondary">Edit Task</button>
                                        </div
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;


        document.querySelector(`#edit-task-name-${i}`).setAttribute('value', projectTasks[i].title);
        document.querySelector(`#edit-task-description-${i}`).setAttribute('value', projectTasks[i].description);
        document.querySelector(`#edit-task-date-${i}`).setAttribute('value', projectTasks[i].dueDate);

        deleteTask(project, tasksArr, projectName, i, TASK_LIST);

        console.log(tasksArr);
      }
    }

  };

  // create task and display it on the UI
  const createNewTask = (tasksArr) => {
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
      Task.newTask(tasksArr,
        TASK_NAME,
        TASK_DESCRIPTION,
        TASK_DATE,
        TASK_PRIORITY,
        TASK_PROJECT);

      localStorage.setItem('tasks', JSON.stringify(tasksArr));

      taskForm();

      // render task to the UI
      renderTasks(TASK_PROJECT, tasksArr);
    });
  };

  return {
    createNewTask, renderTasks, deleteTask
  };
})();

// Project Creation Module (IIFE);
export const projectCreation = (() => {
  const projectForm = () => {
    // prevent form default behaviour
    const PROJECT_FORM = document.forms['project-form'];

    PROJECT_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    return PROJECT_FORM;
  }

  // Project Helper methods
  const createProject = (projectArr, projectForm) => {
    const PROJECT_TITLE = projectForm().querySelector('#project-title').value;
    if (PROJECT_TITLE === '') {
      return;
    }

    Project.newProject(PROJECT_TITLE, projectArr);

    localStorage.setItem('projects', JSON.stringify(projectArr));
  };

  const renderProjectView = (projectArr) => {
    const PROJECT_LIST = document.querySelector('#project-list');
    PROJECT_LIST.innerHTML = `
            <li class="list-group-item list-group-item-dark btn my-1" id="all-projects">All Projects</li>
        `;

    for (let i = 0; i < projectArr.length; i += 1) {
      PROJECT_LIST.innerHTML += `
                <li class="list-group-item list-group-item-dark btn my-1" id="project-list">${projectArr[i].title}</li>
            `;
    }
  };

  // Project's tasks Helper Method
  const taskOptions = (projectName) => {
    // Create selection on tasks based on objects
    const TASK_PROJECT = document.querySelector('#project');
    TASK_PROJECT.innerHTML = '';
    TASK_PROJECT.innerHTML += `
        <input type="hidden" value="${projectName}" id="task-project" class="form-control" aria-label="Default select example">
    `;
  };

  const projectSelection = (event, projectList) => {
    const PROJECT = event.target;

    const children = [...projectList.children];
    children.forEach((project) => {
      project.classList.remove('active');
    });

    PROJECT.classList.add('active');
    const TASK_DISPLAY = document.querySelector('#task-display');
    TASK_DISPLAY.classList.remove('d-none');
  };

  // Create and display project in the UI
  const addProject = (projectArr) => {
    const PROJECT_BTN = document.querySelector('#project-btn');

    PROJECT_BTN.addEventListener('click', () => {
      //Prevent default
      projectForm();

      // create new project
      createProject(projectArr, projectForm);

      // Render projects in views
      renderProjectView(projectArr);

      // reset project form
      document.querySelector('#project-form').reset();
    });
  };

  // Display the project's specific tasks in the UI
  const displayProjectTasks = (tasksArr, getColor) => {
    const PROJECT_LIST = document.querySelector('#project-list');

    PROJECT_LIST.addEventListener('click', (e) => {
      const PROJECT_NAME = e.target.textContent;

      projectSelection(e, PROJECT_LIST);

      taskOptions(PROJECT_NAME);

      taskCreation.renderTasks(PROJECT_NAME, tasksArr, getColor);
    });
  };

  return {
    addProject, displayProjectTasks, renderProjectView
  };
})();
