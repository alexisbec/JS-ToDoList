import { taskCreation } from './taskDom';
import { colorLogic } from './logic';

export class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  static newProject(projectTitle, projectArr) {
    const NEW_PROJECT = new Project(projectTitle);
    projectArr.push(NEW_PROJECT);
  }
}

// Project Creation Module (IIFE);
export const projectCreation = (() => {
  const projectForm = () => {
    // prevent form default behaviour
    const PROJECT_FORM = document.forms['project-form'];
    PROJECT_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  };

  // Project Helper methods
  const createProject = (projectArr) => {
    const PROJECT_FORM = document.forms['project-form'];
    const PROJECT_TITLE = PROJECT_FORM.querySelector('#project-title').value;
    if (PROJECT_TITLE === '') {
      return;
    }

    Project.newProject(PROJECT_TITLE, projectArr);

    // localStorage.setItem('projects', JSON.stringify(projectArr));
  };

  const renderProjectView = (projectArr) => {
    const PROJECT_LIST = document.querySelector('#project-list');
    PROJECT_LIST.innerHTML = `
            <li id="all-projects" class="list-group-item list-group-item-dark active btn my-1">All Tasks</li>
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
      // Prevent default
      projectForm();

      // create new project
      createProject(projectArr);

      // Render projects in views
      renderProjectView(projectArr);

      // reset project form
      document.querySelector('#project-form').reset();
    });
  };

  // Display the project's specific tasks in the UI
  const displayProjectTasks = (projectArr) => {
    const PROJECT_LIST = document.querySelector('#project-list');

    PROJECT_LIST.addEventListener('click', (e) => {
      const PROJECT_NAME = e.target.textContent;
      const PROJECT = projectArr.filter(project => project.title === PROJECT_NAME);
      const allProjects = colorLogic.allTasks(projectArr);

      projectSelection(e, PROJECT_LIST);

      taskOptions(PROJECT_NAME);

      if (PROJECT_NAME === 'All Tasks') {
        taskCreation.renderTasks(PROJECT_NAME, allProjects, projectArr);
      } else {
        taskCreation.renderTasks(PROJECT_NAME, PROJECT[0].tasks, projectArr);
      }
    });
  };

  return {
    createProject, taskOptions, addProject, displayProjectTasks, renderProjectView,
  };
})();

export default { projectCreation };
