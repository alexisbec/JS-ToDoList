// Method imports
import { projectCreation } from "./project";
import { taskCreation } from "./task";

// Object's arrays
const projects = [];

const tasks = [
    {
      title: "Task 1",
      description: "Description 1",
      dueDate: "2021-06-10",
      priority: "low",
      project: "Project 1"
    },
    {
      title: "Task 2",
      description: "Description 2",
      dueDate: "2021-06-10",
      priority: "medium",
      project: "Project 2"
    },
    {
      title: "Task 3",
      description: "Description 3",
      dueDate: "2021-06-10",
      priority: "high",
      project: "Project 3"
    }
  ];

// Call of project's function with attached event listeners
projectCreation.addProject(projects, tasks);
projectCreation.displayProjectTasks(tasks);

// Call tasks functions with attached event listeners
taskCreation.createNewTask(tasks);



