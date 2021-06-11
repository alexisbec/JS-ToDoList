/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectCreation": () => (/* binding */ projectCreation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
    }
}

// Project Form Information
const PROJECT_FORM = document.forms['project-form'];

// prevent form default behaviour
PROJECT_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
})

// Project Creation Module (IIFE);
const projectCreation = (() => {

    // Create and display project in the UI
    const addProject = (projectArr) => {
        const PROJECT_BTN = document.querySelector('#project-btn');

        PROJECT_BTN.addEventListener('click', () => {
            // create new project
            createProject(projectArr);

            // Render projects in views
            renderProjectView(projectArr);

            // reset project form
            document.querySelector('#project-form').reset();
        })
    };

    // Project Helper methods
    const createProject = (projectArr) => {
        const PROJECT_TITLE = PROJECT_FORM.querySelector("#project-title").value;

        const NEW_PROJECT = new Project(PROJECT_TITLE);
        projectArr.push(NEW_PROJECT);
    }
    const renderProjectView = (projectArr) => {
        const PROJECT_LIST = document.querySelector("#project-list");
        PROJECT_LIST.innerHTML = `
          <li class="list-group-item list-group-item-dark btn my-1" id="project-list">All Projects</li>
        `;

        for (let i = 0; i < projectArr.length; i++) {
            PROJECT_LIST.innerHTML += `
        <li class="list-group-item list-group-item-dark btn my-1" id="project-list">${projectArr[i].title}</li>
      `;
        }
    }

    // Display the project's specific tasks in the UI
    const displayProjectTasks = (tasksArr) => {
        const PROJECT_LIST = document.querySelector('#project-list');

        PROJECT_LIST.addEventListener('click', (e) => {
            const PROJECT_NAME = e.target.textContent;

            projectSelection(e, PROJECT_LIST);

            taskOptions(PROJECT_NAME);

            renderTasks(PROJECT_NAME, tasksArr);
        });
    }

    // Project's tasks Helper Method
    const taskOptions = (projectName) => {
        // Create selection on tasks based on objects
        const TASK_PROJECT = document.querySelector('#project');
        TASK_PROJECT.innerHTML = ``;
        TASK_PROJECT.innerHTML += `
        <input type="hidden" value="${projectName}" id="task-project" class="form-control" aria-label="Default select example">
    `;
    }
    const projectSelection = (event, projectList) => {
        const  PROJECT = event.target;

        let children = [...projectList.children];
        children.forEach(function(project){
            project.classList.remove('active');
        });

        PROJECT.classList.add('active');
        const TASK_DISPLAY = document.querySelector('#task-display');
        TASK_DISPLAY.classList.remove('d-none');
    }
    const renderTasks = (projectName, tasksArr) => {
        const TASK_LIST = document.querySelector("#tasks-list");
        TASK_LIST.innerHTML = ``;
        let allTasks = tasksArr.filter(task  => task.exists === true);
        const ADD_TASK_BTN = document.querySelector('#add-task');
        const FORM = document.querySelector('#multiCollapseExample2');

        if (projectName === "All Projects") {
            ADD_TASK_BTN.classList.add('d-none');
            FORM.classList.add('d-none');
            for (let i = 0; i < allTasks.length; i++) {
                let color = getColor(allTasks, i);

                TASK_LIST.innerHTML += `
                  <li class="">
                      <p>
                        <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                          ${allTasks[i].title}
                        </button>
                      </p>
                        
                      <div class="collapse" id="task-${i}">
                        <div class="card card-body bg-${color} mb-4">
                          <ul class="list-group">
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${allTasks[i].description}</li>
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${allTasks[i].dueDate}</li>
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${allTasks[i].priority}</li>
                          </ul>
                        </div>
                      </div>
                  </li>
            `;
            }
        } else {
            ADD_TASK_BTN.classList.remove('d-none');
            FORM.classList.remove('d-none');
            let projectTasks = tasksArr.filter(task => task.project === projectName && task.exists === true);
            for (let i = 0; i < projectTasks.length; i++) {
                let color = getColor(projectTasks, i);

                TASK_LIST.innerHTML += `
                  <li class="">
                      <p>
                        <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                          ${projectTasks[i].title}
                        </button>
                      </p>
                        
                      <div class="collapse" id="task-${i}">
                        <div class="card card-body bg-${color} mb-4">
                          <ul class="list-group ">
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${projectTasks[i].description}</li>
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${projectTasks[i].dueDate}</li>
                              <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${projectTasks[i].priority}</li>
                          </ul>
                          
                          <div class="d-flex mt-3">
                              <button type="button" class="btn btn-outline-dark mx-3">Edit</button>
                              <button id="delete-task" type="button" class="btn btn-outline-warning">Delete</button>
                          </div>
                          
                        </div>
                      </div>
                  </li>
            `;

                const DELETE = document.querySelector('#delete-task');
                DELETE.onclick = () => {
                    projectTasks[i].exists = false;
                    renderTasks(projectName, projectTasks);
                }
            }
        }
    }
    const getColor = (arr, i) => {
        let color;
        if (arr[i].priority === 'low') {
            color = 'success';
        } else if (arr[i].priority === 'medium') {
            color = 'info';
        } else {
            color = 'danger';
        }
        return color;
    }

    return {
        addProject, displayProjectTasks
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ projectCreation });

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskCreation": () => (/* binding */ taskCreation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, project = "default") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.exists = true;
    }
}

// Tasks Form Information
const TASKS_FORM = document.forms['tasks-form'];

// prevent form default behaviour
TASKS_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Task Creation Module (IIFE);
const taskCreation = (() => {
    // create task and display it on the UI
    const createNewTask = (tasksArr) => {
        const TASK_BTN = document.querySelector("#task-btn");
        TASK_BTN.addEventListener('click', () => {
            const TASK_NAME = TASKS_FORM.querySelector("#task-name").value;
            const TASK_DESCRIPTION = TASKS_FORM.querySelector("#task-description").value;
            const TASK_DATE = TASKS_FORM.querySelector("#task-date").value;
            const TASK_PRIORITY = TASKS_FORM.querySelector("#task-priority").value;
            const TASK_PROJECT = TASKS_FORM.querySelector("#task-project").value;

            // create new task instance
            newTask(tasksArr, TASK_NAME, TASK_DESCRIPTION, TASK_DATE, TASK_PRIORITY, TASK_PROJECT);

            // render task to the UI
            renderTask(TASK_PROJECT, tasksArr);

            document.querySelector('#tasks-form').reset();
        })
    }

    // create task object
    const newTask = (tasksArr, name, description, date, priority, project) => {
        const newTask = new Task(name, description, date, priority, project);
        tasksArr.push(newTask);
    }

    // render tasks in the UI
    const renderTask = (taskProject, tasksArr) => {
        const TASKS_LIST = document.querySelector("#tasks-list");

        TASKS_LIST.innerHTML = ``;
        let projectTasks = tasksArr.filter(task  => task.project === taskProject && task.exists === true);

        for (let i = 0; i < projectTasks.length; i++) {
            let color = getColor(projectTasks, i);

            TASKS_LIST.innerHTML += `
              <li class="">
                  <p>
                    <button class="btn btn-${color} w-100" type="button" data-bs-toggle="collapse" data-bs-target="#task-${i}" aria-expanded="false" aria-controls="task-${i}">
                      ${projectTasks[i].title}
                    </button>
                  </p>
                    
                  <div class="collapse" id="task-${i}">
                    <div class="card card-body bg-${color} mb-4">
                      <ul class="list-group ">
                          <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Description</span>: ${projectTasks[i].description}</li>
                          <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Due Date</span>: ${projectTasks[i].dueDate}</li>
                          <li class="list-group-item bg-${color} text-white"><span class="fw-bold">Priority</span>: ${projectTasks[i].priority}</li>
                      </ul>
                      
                      <div class="d-flex mt-3">
                          <button type="button" class="btn btn-outline-dark mx-3">Edit</button>
                          <button id="delete-task" type="button" class="btn btn-outline-warning">Delete</button>
                      </div>
                      
                    </div>
                  </div>
              </li>
            `;

            const DELETE = document.querySelector('#delete-task');
            DELETE.onclick = () => {
                projectTasks[i].exists = false;
                renderTask(taskProject, projectTasks);
            }
        }
    }

    const getColor = (arr, i) => {
        let color;
        if (arr[i].priority === 'low') {
            color = 'success';
        } else if (arr[i].priority === 'medium') {
            color = 'info';
        } else {
            color = 'danger';
        }
        return color;
    }

    return {
        createNewTask
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ taskCreation });

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
// Method imports



// Object's arrays
const projects = [];

const tasks = [
    {
      title: "Task 1",
      description: "Description 1",
      dueDate: "2021-06-10",
      priority: "low",
      project: "Project 1",
      exists: true
    },
    {
      title: "Task 2",
      description: "Description 2",
      dueDate: "2021-06-10",
      priority: "medium",
      project: "Project 2",
      exists: true
    },
    {
      title: "Task 3",
      description: "Description 3",
      dueDate: "2021-06-10",
      priority: "high",
      project: "Project 3",
      exists: true
    }
  ];

// Call of project's function with attached event listeners
_project__WEBPACK_IMPORTED_MODULE_0__.projectCreation.addProject(projects, tasks);
_project__WEBPACK_IMPORTED_MODULE_0__.projectCreation.displayProjectTasks(tasks);

// Call tasks functions with attached event listeners
_task__WEBPACK_IMPORTED_MODULE_1__.taskCreation.createNewTask(tasks);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzLXRvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQSxzRkFBc0Ysb0JBQW9CO0FBQzFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU0sd0VBQXdFLEVBQUUsOENBQThDLEVBQUU7QUFDakwsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUEsdURBQXVELEVBQUU7QUFDekQsd0RBQXdELE1BQU07QUFDOUQ7QUFDQSw4REFBOEQsTUFBTSx5REFBeUQsd0JBQXdCO0FBQ3JKLDhEQUE4RCxNQUFNLHNEQUFzRCxvQkFBb0I7QUFDOUksOERBQThELE1BQU0sc0RBQXNELHFCQUFxQjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBTSx3RUFBd0UsRUFBRSw4Q0FBOEMsRUFBRTtBQUNqTCw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQSx1REFBdUQsRUFBRTtBQUN6RCx3REFBd0QsTUFBTTtBQUM5RDtBQUNBLDhEQUE4RCxNQUFNLHlEQUF5RCw0QkFBNEI7QUFDekosOERBQThELE1BQU0sc0RBQXNELHdCQUF3QjtBQUNsSiw4REFBOEQsTUFBTSxzREFBc0QseUJBQXlCO0FBQ25KOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLENBQUMsa0JBQWtCLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3BMbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLHlCQUF5QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTSx3RUFBd0UsRUFBRSw4Q0FBOEMsRUFBRTtBQUM3Syx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQSxtREFBbUQsRUFBRTtBQUNyRCxvREFBb0QsTUFBTTtBQUMxRDtBQUNBLDBEQUEwRCxNQUFNLHlEQUF5RCw0QkFBNEI7QUFDckosMERBQTBELE1BQU0sc0RBQXNELHdCQUF3QjtBQUM5SSwwREFBMEQsTUFBTSxzREFBc0QseUJBQXlCO0FBQy9JOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsQ0FBQyxlQUFlLEU7Ozs7OztVQzVHL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDNEM7QUFDTjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUEwQjtBQUMxQix5RUFBbUM7O0FBRW5DO0FBQ0EsNkRBQTBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQcm9qZWN0IEZvcm0gSW5mb3JtYXRpb25cclxuY29uc3QgUFJPSkVDVF9GT1JNID0gZG9jdW1lbnQuZm9ybXNbJ3Byb2plY3QtZm9ybSddO1xyXG5cclxuLy8gcHJldmVudCBmb3JtIGRlZmF1bHQgYmVoYXZpb3VyXHJcblBST0pFQ1RfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuLy8gUHJvamVjdCBDcmVhdGlvbiBNb2R1bGUgKElJRkUpO1xyXG5leHBvcnQgY29uc3QgcHJvamVjdENyZWF0aW9uID0gKCgpID0+IHtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIGRpc3BsYXkgcHJvamVjdCBpbiB0aGUgVUlcclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtYnRuJyk7XHJcblxyXG4gICAgICAgIFBST0pFQ1RfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHByb2plY3RcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0QXJyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbmRlciBwcm9qZWN0cyBpbiB2aWV3c1xyXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0Vmlldyhwcm9qZWN0QXJyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHByb2plY3QgZm9ybVxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQcm9qZWN0IEhlbHBlciBtZXRob2RzXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3RBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBQUk9KRUNUX1RJVExFID0gUFJPSkVDVF9GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgTkVXX1BST0pFQ1QgPSBuZXcgUHJvamVjdChQUk9KRUNUX1RJVExFKTtcclxuICAgICAgICBwcm9qZWN0QXJyLnB1c2goTkVXX1BST0pFQ1QpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyUHJvamVjdFZpZXcgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xyXG4gICAgICAgIFBST0pFQ1RfTElTVC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWRhcmsgYnRuIG15LTFcIiBpZD1cInByb2plY3QtbGlzdFwiPkFsbCBQcm9qZWN0czwvbGk+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFBST0pFQ1RfTElTVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tZGFyayBidG4gbXktMVwiIGlkPVwicHJvamVjdC1saXN0XCI+JHtwcm9qZWN0QXJyW2ldLnRpdGxlfTwvbGk+XHJcbiAgICAgIGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERpc3BsYXkgdGhlIHByb2plY3QncyBzcGVjaWZpYyB0YXNrcyBpbiB0aGUgVUlcclxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSAodGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBQUk9KRUNUX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XHJcblxyXG4gICAgICAgIFBST0pFQ1RfTElTVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFBST0pFQ1RfTkFNRSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvbihlLCBQUk9KRUNUX0xJU1QpO1xyXG5cclxuICAgICAgICAgICAgdGFza09wdGlvbnMoUFJPSkVDVF9OQU1FKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKFBST0pFQ1RfTkFNRSwgdGFza3NBcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb2plY3QncyB0YXNrcyBIZWxwZXIgTWV0aG9kXHJcbiAgICBjb25zdCB0YXNrT3B0aW9ucyA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIENyZWF0ZSBzZWxlY3Rpb24gb24gdGFza3MgYmFzZWQgb24gb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IFRBU0tfUFJPSkVDVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XHJcbiAgICAgICAgVEFTS19QUk9KRUNULmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIFRBU0tfUFJPSkVDVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCIke3Byb2plY3ROYW1lfVwiIGlkPVwidGFzay1wcm9qZWN0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBhcmlhLWxhYmVsPVwiRGVmYXVsdCBzZWxlY3QgZXhhbXBsZVwiPlxyXG4gICAgYDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2plY3RTZWxlY3Rpb24gPSAoZXZlbnQsIHByb2plY3RMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgIFBST0pFQ1QgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IFsuLi5wcm9qZWN0TGlzdC5jaGlsZHJlbl07XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KXtcclxuICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUFJPSkVDVC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBjb25zdCBUQVNLX0RJU1BMQVkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kaXNwbGF5Jyk7XHJcbiAgICAgICAgVEFTS19ESVNQTEFZLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAocHJvamVjdE5hbWUsIHRhc2tzQXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgVEFTS19MSVNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1saXN0XCIpO1xyXG4gICAgICAgIFRBU0tfTElTVC5pbm5lckhUTUwgPSBgYDtcclxuICAgICAgICBsZXQgYWxsVGFza3MgPSB0YXNrc0Fyci5maWx0ZXIodGFzayAgPT4gdGFzay5leGlzdHMgPT09IHRydWUpO1xyXG4gICAgICAgIGNvbnN0IEFERF9UQVNLX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpO1xyXG4gICAgICAgIGNvbnN0IEZPUk0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVsdGlDb2xsYXBzZUV4YW1wbGUyJyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJBbGwgUHJvamVjdHNcIikge1xyXG4gICAgICAgICAgICBBRERfVEFTS19CVE4uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIEZPUk0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGdldENvbG9yKGFsbFRhc2tzLCBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBUQVNLX0xJU1QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tJHtjb2xvcn0gdy0xMDBcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI3Rhc2stJHtpfVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2FsbFRhc2tzW2ldLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLWJvZHkgYmctJHtjb2xvcn0gbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EZXNjcmlwdGlvbjwvc3Bhbj46ICR7YWxsVGFza3NbaV0uZGVzY3JpcHRpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EdWUgRGF0ZTwvc3Bhbj46ICR7YWxsVGFza3NbaV0uZHVlRGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlByaW9yaXR5PC9zcGFuPjogJHthbGxUYXNrc1tpXS5wcmlvcml0eX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBBRERfVEFTS19CVE4uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIEZPUk0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSB0YXNrc0Fyci5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lICYmIHRhc2suZXhpc3RzID09PSB0cnVlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGdldENvbG9yKHByb2plY3RUYXNrcywgaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgVEFTS19MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLSR7Y29sb3J9IHctMTAwXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiN0YXNrLSR7aX1cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0VGFza3NbaV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EZXNjcmlwdGlvbjwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLmRlc2NyaXB0aW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UHJpb3JpdHk8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5wcmlvcml0eX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmsgbXgtM1wiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS10YXNrXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXRhc2snKTtcclxuICAgICAgICAgICAgICAgIERFTEVURS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYXNrc1tpXS5leGlzdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0TmFtZSwgcHJvamVjdFRhc2tzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldENvbG9yID0gKGFyciwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdzdWNjZXNzJztcclxuICAgICAgICB9IGVsc2UgaWYgKGFycltpXS5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnaW5mbyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkUHJvamVjdCwgZGlzcGxheVByb2plY3RUYXNrc1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBwcm9qZWN0Q3JlYXRpb24gfTsiLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QgPSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmV4aXN0cyA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRhc2tzIEZvcm0gSW5mb3JtYXRpb25cclxuY29uc3QgVEFTS1NfRk9STSA9IGRvY3VtZW50LmZvcm1zWyd0YXNrcy1mb3JtJ107XHJcblxyXG4vLyBwcmV2ZW50IGZvcm0gZGVmYXVsdCBiZWhhdmlvdXJcclxuVEFTS1NfRk9STS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vIFRhc2sgQ3JlYXRpb24gTW9kdWxlIChJSUZFKTtcclxuZXhwb3J0IGNvbnN0IHRhc2tDcmVhdGlvbiA9ICgoKSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgdGFzayBhbmQgZGlzcGxheSBpdCBvbiB0aGUgVUlcclxuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAodGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBUQVNLX0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1idG5cIik7XHJcbiAgICAgICAgVEFTS19CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfTkFNRSA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfREVTQ1JJUFRJT04gPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19EQVRFID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19QUklPUklUWSA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX1BST0pFQ1QgPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcm9qZWN0XCIpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyB0YXNrIGluc3RhbmNlXHJcbiAgICAgICAgICAgIG5ld1Rhc2sodGFza3NBcnIsIFRBU0tfTkFNRSwgVEFTS19ERVNDUklQVElPTiwgVEFTS19EQVRFLCBUQVNLX1BSSU9SSVRZLCBUQVNLX1BST0pFQ1QpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVuZGVyIHRhc2sgdG8gdGhlIFVJXHJcbiAgICAgICAgICAgIHJlbmRlclRhc2soVEFTS19QUk9KRUNULCB0YXNrc0Fycik7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgdGFzayBvYmplY3RcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSAodGFza3NBcnIsIG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xyXG4gICAgICAgIHRhc2tzQXJyLnB1c2gobmV3VGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVuZGVyIHRhc2tzIGluIHRoZSBVSVxyXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrUHJvamVjdCwgdGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBUQVNLU19MSVNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy1saXN0XCIpO1xyXG5cclxuICAgICAgICBUQVNLU19MSVNULmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIGxldCBwcm9qZWN0VGFza3MgPSB0YXNrc0Fyci5maWx0ZXIodGFzayAgPT4gdGFzay5wcm9qZWN0ID09PSB0YXNrUHJvamVjdCAmJiB0YXNrLmV4aXN0cyA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2xvciA9IGdldENvbG9yKHByb2plY3RUYXNrcywgaSk7XHJcblxyXG4gICAgICAgICAgICBUQVNLU19MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLSR7Y29sb3J9IHctMTAwXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiN0YXNrLSR7aX1cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUYXNrc1tpXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RGVzY3JpcHRpb248L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Qcmlvcml0eTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYXJrIG14LTNcIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS10YXNrXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXRhc2snKTtcclxuICAgICAgICAgICAgREVMRVRFLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGFza3NbaV0uZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRhc2tQcm9qZWN0LCBwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gKGFyciwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdzdWNjZXNzJztcclxuICAgICAgICB9IGVsc2UgaWYgKGFycltpXS5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnaW5mbyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTmV3VGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB0YXNrQ3JlYXRpb24gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE1ldGhvZCBpbXBvcnRzXHJcbmltcG9ydCB7IHByb2plY3RDcmVhdGlvbiB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgdGFza0NyZWF0aW9uIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuLy8gT2JqZWN0J3MgYXJyYXlzXHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5jb25zdCB0YXNrcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDFcIixcclxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTA2LTEwXCIsXHJcbiAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxyXG4gICAgICBwcm9qZWN0OiBcIlByb2plY3QgMVwiLFxyXG4gICAgICBleGlzdHM6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAyXCIsXHJcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNi0xMFwiLFxyXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgZXhpc3RzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUYXNrIDNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gM1wiLFxyXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMDYtMTBcIixcclxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxyXG4gICAgICBwcm9qZWN0OiBcIlByb2plY3QgM1wiLFxyXG4gICAgICBleGlzdHM6IHRydWVcclxuICAgIH1cclxuICBdO1xyXG5cclxuLy8gQ2FsbCBvZiBwcm9qZWN0J3MgZnVuY3Rpb24gd2l0aCBhdHRhY2hlZCBldmVudCBsaXN0ZW5lcnNcclxucHJvamVjdENyZWF0aW9uLmFkZFByb2plY3QocHJvamVjdHMsIHRhc2tzKTtcclxucHJvamVjdENyZWF0aW9uLmRpc3BsYXlQcm9qZWN0VGFza3ModGFza3MpO1xyXG5cclxuLy8gQ2FsbCB0YXNrcyBmdW5jdGlvbnMgd2l0aCBhdHRhY2hlZCBldmVudCBsaXN0ZW5lcnNcclxudGFza0NyZWF0aW9uLmNyZWF0ZU5ld1Rhc2sodGFza3MpO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9