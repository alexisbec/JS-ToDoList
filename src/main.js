import { projectCreation, taskCreation } from './taskDom';

// Object's arrays
let projects = JSON.parse(localStorage.getItem('projects')) || [];

const tasks = JSON.parse(localStorage.getItem('tasks')) ||
    [];

// Class Constructor

export class Task {
  constructor(title, description, dueDate, priority, project = 'default') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.exist = true;
  }

  // create task object
  static newTask(tasksArr, name, description, date, priority, project) {
    const newTask = new Task(name, description, date, priority, project);
    tasksArr.push(newTask);
  };

  static editTask(projectTasks,taskProject, i, renderTask) {
    const EDIT_TASK_FORM = document.forms['edit-tasks-form']

    const EDIT_TASK_BTN = document.querySelector(`#edit-btn-${i}`);
    EDIT_TASK_BTN.addEventListener('click', () => {
      const EDIT_TASK_NAME = EDIT_TASK_FORM.querySelector(`#edit-task-name-${i}`).value;
      const EDIT_TASK_DESCRIPTION = EDIT_TASK_FORM.querySelector(`#edit-task-description-${i}`).value;
      const EDIT_TASK_DATE = EDIT_TASK_FORM.querySelector(`#edit-task-date-${i}`).value;
      const EDIT_TASK_PRIORITY = EDIT_TASK_FORM.querySelector(`#edit-task-priority-${i}`).value;

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

      renderTask(taskProject, projectTasks)
    });
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
}

export class Project {
  constructor(title) {
    this.title = title;
  }

  static newProject(projectTitle, projectArr) {
    const NEW_PROJECT = new Project(projectTitle);
    projectArr.push(NEW_PROJECT);
  }
}

// Call of project's function with attached event listeners
projectCreation.renderProjectView(projects);
projectCreation.addProject(projects);
projectCreation.displayProjectTasks(tasks);

// Call tasks functions with attached event listeners
taskCreation.createNewTask(tasks, Task);


