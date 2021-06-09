const projects = [];
const tasks = [];

class Task {
  constructor(title, description, dueDate, priority, project = "default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }
}

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

// create new project

const PROJECT_FORM = document.forms['project-form'];

PROJECT_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
})

const PROJECT_BTN = document.querySelector("#project-btn");

PROJECT_BTN.addEventListener('click', () => {
  const PROJECT_TITLE = PROJECT_FORM.querySelector("#project-title").value;
  const PROJECT_DESCRIPTION = PROJECT_FORM.querySelector("#project-description").value;
  const NEW_PROJECT = new Project(PROJECT_TITLE, PROJECT_DESCRIPTION);
  projects.push(NEW_PROJECT);
  const PROJECT_LIST = document.querySelector("#project-list");

  PROJECT_LIST.innerHTML = `
      <li class="list-group-item list-group-item-dark" id="project-list">Default Project</li>
  `;

  for (let i = 0; i < projects.length; i++) {
    PROJECT_LIST.innerHTML += `
      <li class="list-group-item list-group-item-dark" id="project-list">${projects[i].title}</li>
    `;
  }
})

const TASKS_FORM = document.forms['tasks-form'];

TASKS_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
})

const TASK_BTN = document.querySelector("#task-btn");

TASK_BTN.addEventListener('click', () => {
  const TASK_NAME = TASKS_FORM.querySelector("#task-name").value;
  const TASK_DESCRIPTION = TASKS_FORM.querySelector("#task-description").value;
  const TASK_DATE = TASKS_FORM.querySelector("#task-date").value;
  const TASK_PRIORITY = TASKS_FORM.querySelector("#task-priority").value;

  const newTask = new Task(TASK_NAME, TASK_DESCRIPTION, TASK_DATE, TASK_PRIORITY);
  tasks.push(newTask);

  const TASKS_LIST = document.querySelector("#tasks-list");

  TASKS_LIST.innerHTML = ``;

  for (let i = 0; i < tasks.length; i++) {
    TASKS_LIST.innerHTML += `
      <li class="list-group-item list-group-item-dark">${tasks[i].title}</li>
    `;
  }

  const TASK_PROJECT = document.querySelector('#task-project');
  for(let i = 0; i < projects.length; i++) {
    TASK_PROJECT.innerHTML += `
    <option value="${projects[i].title}">${projects[i].title}</li>
    `;
  }
})

const PROJECT_LIST = document.querySelector('#project-list');

PROJECT_LIST.addEventListener('click', (e) => {
  const PROJECT_NAME = e.target.textContent;

  const TASK_DISPLAY = document.querySelector('#task-display');
  TASK_DISPLAY.classList.remove('d-none');

  return PROJECT_NAME;
});

