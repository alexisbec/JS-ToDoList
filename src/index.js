const projects = [
    /*
    {
      title: "Project 1",
      Description: "Project 1 description"
    },
    {
      title: "Project 2",
      Description: "Project 2 description"
    },
    {
      title: "Project 3",
      Description: "Project 3 description"
    }
     */
];
const tasks = [
    {
      title: "Task 1",
      description: "Description 1",
      dueDate: "2021-06-10",
      priority: "Low",
      project: "Project 1"
    },
    {
      title: "Task 2",
      description: "Description 2",
      dueDate: "2021-06-10",
      priority: "Medium",
      project: "Project 2"
    },
    {
      title: "Task 3",
      description: "Description 3",
      dueDate: "2021-06-10",
      priority: "Medium",
      project: "Project 3"
    }
  ];

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

// Add projects to project list

const newProject = (() => {
  const createProject = () => {
    const PROJECT_BTN = document.querySelector("#project-btn");

    // Create a new project object
    PROJECT_BTN.addEventListener('click', () => {
      const PROJECT_TITLE = PROJECT_FORM.querySelector("#project-title").value;
      const PROJECT_DESCRIPTION = PROJECT_FORM.querySelector("#project-description").value;
      const NEW_PROJECT = new Project(PROJECT_TITLE, PROJECT_DESCRIPTION);
      projects.push(NEW_PROJECT);

      // Render projects in views
      const PROJECT_LIST = document.querySelector("#project-list");
      PROJECT_LIST.innerHTML = `
        <li class="list-group-item list-group-item-dark" id="project-list">All Projects</li>
      `;
      for (let i = 0; i < projects.length; i++) {
        PROJECT_LIST.innerHTML += `
      <li class="list-group-item list-group-item-dark" id="project-list">${projects[i].title}</li>
    `;
      }

      // Create selection on tasks based on objects
      const TASK_PROJECT = document.querySelector('#task-project');
      TASK_PROJECT.innerHTML = ``;
      for (let i = 0; i < projects.length; i++) {
        TASK_PROJECT.innerHTML += `
      <option value="${projects[i].title}">${projects[i].title}</option>
    `;
      }
    })
  }

  const renderTasks = () => {
    const PROJECT_LIST = document.querySelector('#project-list');

    PROJECT_LIST.addEventListener('click', (e) => {
      const PROJECT_NAME = e.target.textContent;
      console.log(PROJECT_NAME);
      const TASK_DISPLAY = document.querySelector('#task-display');
      TASK_DISPLAY.classList.remove('d-none');

      const TASK_LIST = document.querySelector("#tasks-list");

      TASK_LIST.innerHTML = ``;

      if (PROJECT_NAME === "All Projects") {
        for (let i = 0; i < tasks.length; i++) {
          TASK_LIST.innerHTML += `
            <li class="list-group-item list-group-item-dark">${tasks[i].title}</li>
          `;
        }
      } else {
        let projectTasks = tasks.filter(title => tasks.title === PROJECT_NAME);
        console.log(projectTasks);
      }
    });
  }

  return {
    createProject, renderTasks
  }
})();

newProject.createProject();
newProject.renderTasks();



// Add Tasks to a project
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
  const TASK_PROJECT = TASKS_FORM.querySelector("#task-project").value;

  const newTask = new Task(TASK_NAME, TASK_DESCRIPTION, TASK_DATE, TASK_PRIORITY, TASK_PROJECT);
  tasks.push(newTask);

  const TASKS_LIST = document.querySelector("#tasks-list");

  TASKS_LIST.innerHTML = ``;

  for (let i = 0; i < tasks.length; i++) {
    TASKS_LIST.innerHTML += `
      <li class="list-group-item list-group-item-dark">${tasks[i].title}</li>
    `;
  }
})



