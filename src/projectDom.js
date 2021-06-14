import { Task } from "./main";
import { Project } from "./main";

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
  };

  const renderProjectView = (projectArr) => {
    const PROJECT_LIST = document.querySelector('#project-list');
    PROJECT_LIST.innerHTML = `
            <li class="list-group-item list-group-item-dark btn my-1" id="project-list">All Projects</li>
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

  const renderTasks = (projectName, tasksArr) => {
    const TASK_LIST = document.querySelector('#tasks-list');
    TASK_LIST.innerHTML = '';
    const allTasks = tasksArr.filter(task => task.exists === true);
    const ADD_TASK_BTN = document.querySelector('#add-task');
    const FORM = document.querySelector('#multiCollapseExample2');

    if (projectName === 'All Projects') {
      ADD_TASK_BTN.classList.add('d-none');
      FORM.classList.add('d-none');
      for (let i = 0; i < allTasks.length; i += 1) {
        const color = Task.getColor(allTasks, i);
        /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
        TASK_LIST.innerHTML += `
                    <li class="">
                        <p>
                            <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                                ${allTasks[i].title}
                            </button>
                        </p>
                        
                        <div class="collapse" id="task-${i}">
                            <div class="card card-body bg-${color} mb-4">
                                <ul class="list-group">
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${allTasks[i].description}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${allTasks[i].dueDate}</li>
                                    <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${allTasks[i].priority}</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                `;
      }
    } else {
      ADD_TASK_BTN.classList.remove('d-none');
      FORM.classList.remove('d-none');
      const projectTasks = tasksArr.filter(task => task.project === projectName
          && task.exists === true);
      for (let i = 0; i < projectTasks.length; i += 1) {
        const color = Task.getColor(projectTasks, i);

        TASK_LIST.innerHTML += `
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
                                    <button type="button" class="btn btn-outline-dark mx-3">Edit</button>
                                    <button id="delete-task" type="button" class="btn btn-outline-warning">Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                `;
      }
    }
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

      renderTasks(PROJECT_NAME, tasksArr, getColor);
    });
  };

  return {
    addProject, displayProjectTasks
  };
})();

export default { projectCreation };