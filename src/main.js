import { taskCreation } from './taskDom';
import { projectCreation } from './projectDom';

// Object's arrays
const projects = JSON.parse(localStorage.getItem('projects')) || [];

// Class Constructor

// Execute program
const runScript = () => {
  // Call of project's function with attached event listeners
  projectCreation.renderProjectView(projects);
  projectCreation.addProject(projects);
  projectCreation.displayProjectTasks(projects);

  // Call tasks functions with attached event listeners
  taskCreation.createNewTask(projects);
};

// Execute script
runScript(projects);
