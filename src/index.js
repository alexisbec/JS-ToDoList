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
  constructor(title, description, tasks = []) {
    this.title = title;
    this.description = description;
    this.tasks = tasks;
  }
}

const newProject = new Project(title, description, task);

