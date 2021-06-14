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

export class Task {
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
taskCreation.createNewTask(tasks, Task);
