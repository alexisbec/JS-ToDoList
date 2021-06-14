// Method imports
import { projectCreation } from './projectDom';
import { taskCreation } from './taskDom';

// Object's arrays
const projects = [];

const tasks = [
  {
    title: 'Task 1',
    description: 'Description 1',
    dueDate: '2021-06-10',
    priority: 'low',
    project: 'Project 1',
    exists: true,
  },
  {
    title: 'Task 2',
    description: 'Description 2',
    dueDate: '2021-06-10',
    priority: 'medium',
    project: 'Project 2',
    exists: true,
  },
  {
    title: 'Task 3',
    description: 'Description 3',
    dueDate: '2021-06-10',
    priority: 'high',
    project: 'Project 3',
    exists: true,
  },
];

// Class Constructor

class Task {
  constructor(title, description, dueDate, priority, project = 'default') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.exists = true;
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
  };

  // button logic for tasks edit/delete
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
  };

  // Edit/Delete Tasks methods
  static deleteTask(projectTasks, taskProject, i, TASKS_LIST, renderTask) {
    TASKS_LIST.addEventListener('click', (e) => {
      if (e.target.id === `delete-btn-${i}`) {
        projectTasks[i].exists = false;
        renderTask(taskProject, projectTasks);
      }
    });
  }

  static editTask(projectTasks, taskProject, i, TASKS_LIST, renderTask) {
    TASKS_LIST.addEventListener('click', (e) => {
      if (e.target.id === `edit-btn-${i}`) {
        const EDIT_NAME = document.querySelector(`#edit-task-name-${i}`).value;
        const EDIT_DESC = document.querySelector(`#edit-task-description-${i}`).value;
        const EDIT_DATE = document.querySelector(`#edit-task-date-${i}`).value;
        const EDIT_PRIOR = document.querySelector(`#edit-task-priority-${i}`).value;

        if (EDIT_NAME === '') {
          return;
        }
        if (EDIT_DESC === '') {
          return;
        }
        if (EDIT_DATE === '') {
          return;
        }
        if (EDIT_PRIOR === '') {
          return;
        }

        projectTasks[i].title = EDIT_NAME;
        projectTasks[i].description = EDIT_DESC;
        projectTasks[i].dueDate = EDIT_DATE;
        projectTasks[i].priority = EDIT_PRIOR;

        renderTask(taskProject, projectTasks);
      }
    });
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }
}

// Call of project's function with attached event listeners
projectCreation.addProject(projects, Project);
projectCreation.displayProjectTasks(tasks);

// Call tasks functions with attached event listeners
taskCreation.createNewTask(tasks, taskCreation.renderTask);
