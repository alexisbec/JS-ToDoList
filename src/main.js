import { taskCreation } from './taskDom';
import { projectCreation } from "./projectDom";

// Object's arrays
let projects = JSON.parse(localStorage.getItem('projects')) || [];

// Class Constructor

export class Task {
  constructor(title, description, dueDate, priority, project = 'default') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  // create task object
  static newTask(tasksArr, name, description, date, priority, project) {
    const newTask = new Task(name, description, date, priority, project);
    tasksArr.push(newTask);
  };

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

  static allTasks(projectArr) {
    const allProjects = [];

    for (let i = 0; i < projectArr.length; i += 1) {
      allProjects.push(...projectArr[i].tasks);
    }
    return allProjects;
  }
}

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

// Execute program
const runScript = () => {
  // Call of project's function with attached event listeners
  projectCreation.renderProjectView(projects);
  projectCreation.addProject(projects);
  projectCreation.displayProjectTasks(projects);

  // Call tasks functions with attached event listeners
  taskCreation.createNewTask(projects);
}

// Execute script
runScript(projects);



