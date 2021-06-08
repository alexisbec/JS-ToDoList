const projects = [];
const tasks = [];

class Tasks {
  constructor(title, description, dueDate, priority, project = "default") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  };

  addTask(task) {
    tasks.push(task);
  };

  addTaskToProject(task) {

  };

  deleteTask(task) {

  };
};