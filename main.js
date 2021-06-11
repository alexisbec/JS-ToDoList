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
                            <div>
                                <p>
                                    <button type="button" class="btn btn-info mt-4" href="#multiCollapseExample1" data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1">Edit</button>
                                    <button id="delete-task" type="button" class="btn btn-outline-warning mt-4 ms-4">Delete</button>
                                </p>
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <form id="tasks-form">
                                        <div class="mb-3">
                                            <label for="task-name" class="form-label text-info">Task Title</label>
                                            <input type="text" class="form-control" id="task-name">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="task-description" class="form-label text-info">Task Description</label>
                                            <input type="text" class="form-control" id="task-description">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="task-date" class="form-label text-info">Due Date</label>
                                            <br>
                                            <input type="date" id="task-date" name="trip-start">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="task-priority" class="form-label text-info">Priority</label>
                                            <select id="task-priority" class="form-select" aria-label="Default select example">
                                            <option selected>Select Priority</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button id="task-btn" type="submit" class="btn btn-info">Submit</button>
                                        </div
                                    </form>
                                </div>
                            </div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzLXRvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQSxzRkFBc0Ysb0JBQW9CO0FBQzFHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUM0QztBQUNOOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQTBCO0FBQzFCLHlFQUFtQzs7QUFFbkM7QUFDQSw2REFBMEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFByb2plY3QgRm9ybSBJbmZvcm1hdGlvblxyXG5jb25zdCBQUk9KRUNUX0ZPUk0gPSBkb2N1bWVudC5mb3Jtc1sncHJvamVjdC1mb3JtJ107XHJcblxyXG4vLyBwcmV2ZW50IGZvcm0gZGVmYXVsdCBiZWhhdmlvdXJcclxuUFJPSkVDVF9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG4vLyBQcm9qZWN0IENyZWF0aW9uIE1vZHVsZSAoSUlGRSk7XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0Q3JlYXRpb24gPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbmQgZGlzcGxheSBwcm9qZWN0IGluIHRoZSBVSVxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0QXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgUFJPSkVDVF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1idG4nKTtcclxuXHJcbiAgICAgICAgUFJPSkVDVF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RBcnIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVuZGVyIHByb2plY3RzIGluIHZpZXdzXHJcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RWaWV3KHByb2plY3RBcnIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzZXQgcHJvamVjdCBmb3JtXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFByb2plY3QgSGVscGVyIG1ldGhvZHNcclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdEFycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfVElUTEUgPSBQUk9KRUNUX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBORVdfUFJPSkVDVCA9IG5ldyBQcm9qZWN0KFBST0pFQ1RfVElUTEUpO1xyXG4gICAgICAgIHByb2plY3RBcnIucHVzaChORVdfUFJPSkVDVCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW5kZXJQcm9qZWN0VmlldyA9IChwcm9qZWN0QXJyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgUFJPSkVDVF9MSVNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XHJcbiAgICAgICAgUFJPSkVDVF9MSVNULmlubmVySFRNTCA9IGBcclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tZGFyayBidG4gbXktMVwiIGlkPVwicHJvamVjdC1saXN0XCI+QWxsIFByb2plY3RzPC9saT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgUFJPSkVDVF9MSVNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1kYXJrIGJ0biBteS0xXCIgaWQ9XCJwcm9qZWN0LWxpc3RcIj4ke3Byb2plY3RBcnJbaV0udGl0bGV9PC9saT5cclxuICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzcGxheSB0aGUgcHJvamVjdCdzIHNwZWNpZmljIHRhc2tzIGluIHRoZSBVSVxyXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RUYXNrcyA9ICh0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBST0pFQ1RfTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcclxuXHJcbiAgICAgICAgUFJPSkVDVF9MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgUFJPSkVDVF9OQU1FID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uKGUsIFBST0pFQ1RfTElTVCk7XHJcblxyXG4gICAgICAgICAgICB0YXNrT3B0aW9ucyhQUk9KRUNUX05BTUUpO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoUFJPSkVDVF9OQU1FLCB0YXNrc0Fycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdCdzIHRhc2tzIEhlbHBlciBNZXRob2RcclxuICAgIGNvbnN0IHRhc2tPcHRpb25zID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNlbGVjdGlvbiBvbiB0YXNrcyBiYXNlZCBvbiBvYmplY3RzXHJcbiAgICAgICAgY29uc3QgVEFTS19QUk9KRUNUID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcclxuICAgICAgICBUQVNLX1BST0pFQ1QuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgVEFTS19QUk9KRUNULmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIiR7cHJvamVjdE5hbWV9XCIgaWQ9XCJ0YXNrLXByb2plY3RcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XHJcbiAgICBgO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdGlvbiA9IChldmVudCwgcHJvamVjdExpc3QpID0+IHtcclxuICAgICAgICBjb25zdCAgUFJPSkVDVCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gWy4uLnByb2plY3RMaXN0LmNoaWxkcmVuXTtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3Qpe1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQUk9KRUNULmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNvbnN0IFRBU0tfRElTUExBWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRpc3BsYXknKTtcclxuICAgICAgICBUQVNLX0RJU1BMQVkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW5kZXJUYXNrcyA9IChwcm9qZWN0TmFtZSwgdGFza3NBcnIpID0+IHtcclxuICAgICAgICBjb25zdCBUQVNLX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWxpc3RcIik7XHJcbiAgICAgICAgVEFTS19MSVNULmlubmVySFRNTCA9IGBgO1xyXG4gICAgICAgIGxldCBhbGxUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrICA9PiB0YXNrLmV4aXN0cyA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgQUREX1RBU0tfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJyk7XHJcbiAgICAgICAgY29uc3QgRk9STSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdWx0aUNvbGxhcHNlRXhhbXBsZTInKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBcIkFsbCBQcm9qZWN0c1wiKSB7XHJcbiAgICAgICAgICAgIEFERF9UQVNLX0JUTi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgRk9STS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IoYWxsVGFza3MsIGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFRBU0tfTElTVC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke2NvbG9yfSB3LTEwMFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjdGFzay0ke2l9XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7YWxsVGFza3NbaV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwidGFzay0ke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHthbGxUYXNrc1tpXS5kZXNjcmlwdGlvbn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkR1ZSBEYXRlPC9zcGFuPjogJHthbGxUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UHJpb3JpdHk8L3NwYW4+OiAke2FsbFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFERF9UQVNLX0JUTi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgRk9STS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdE5hbWUgJiYgdGFzay5leGlzdHMgPT09IHRydWUpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUYXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IocHJvamVjdFRhc2tzLCBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBUQVNLX0xJU1QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tJHtjb2xvcn0gdy0xMDBcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI3Rhc2stJHtpfVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3Byb2plY3RUYXNrc1tpXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlXCIgaWQ9XCJ0YXNrLSR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZC1ib2R5IGJnLSR7Y29sb3J9IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0uZGVzY3JpcHRpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5EdWUgRGF0ZTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLmR1ZURhdGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJnLSR7Y29sb3J9IHRleHQtd2hpdGVcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Qcmlvcml0eTwvc3Bhbj46ICR7cHJvamVjdFRhc2tzW2ldLnByaW9yaXR5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFyayBteC0zXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLXRhc2tcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiPkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IERFTEVURSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdGFzaycpO1xyXG4gICAgICAgICAgICAgICAgREVMRVRFLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhc2tzW2ldLmV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3ROYW1lLCBwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0Q29sb3IgPSAoYXJyLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvbG9yO1xyXG4gICAgICAgIGlmIChhcnJbaV0ucHJpb3JpdHkgPT09ICdsb3cnKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdpbmZvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdkYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRQcm9qZWN0LCBkaXNwbGF5UHJvamVjdFRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHByb2plY3RDcmVhdGlvbiB9OyIsImNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCA9IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuZXhpc3RzID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVGFza3MgRm9ybSBJbmZvcm1hdGlvblxyXG5jb25zdCBUQVNLU19GT1JNID0gZG9jdW1lbnQuZm9ybXNbJ3Rhc2tzLWZvcm0nXTtcclxuXHJcbi8vIHByZXZlbnQgZm9ybSBkZWZhdWx0IGJlaGF2aW91clxyXG5UQVNLU19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gVGFzayBDcmVhdGlvbiBNb2R1bGUgKElJRkUpO1xyXG5leHBvcnQgY29uc3QgdGFza0NyZWF0aW9uID0gKCgpID0+IHtcclxuICAgIC8vIGNyZWF0ZSB0YXNrIGFuZCBkaXNwbGF5IGl0IG9uIHRoZSBVSVxyXG4gICAgY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFRBU0tfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWJ0blwiKTtcclxuICAgICAgICBUQVNLX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19OQU1FID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgVEFTS19ERVNDUklQVElPTiA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX0RBVEUgPSBUQVNLU19GT1JNLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBUQVNLX1BSSU9SSVRZID0gVEFTS1NfRk9STS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IFRBU0tfUFJPSkVDVCA9IFRBU0tTX0ZPUk0ucXVlcnlTZWxlY3RvcihcIiN0YXNrLXByb2plY3RcIikudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2sgaW5zdGFuY2VcclxuICAgICAgICAgICAgbmV3VGFzayh0YXNrc0FyciwgVEFTS19OQU1FLCBUQVNLX0RFU0NSSVBUSU9OLCBUQVNLX0RBVEUsIFRBU0tfUFJJT1JJVFksIFRBU0tfUFJPSkVDVCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW5kZXIgdGFzayB0byB0aGUgVUlcclxuICAgICAgICAgICAgcmVuZGVyVGFzayhUQVNLX1BST0pFQ1QsIHRhc2tzQXJyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSB0YXNrIG9iamVjdFxyXG4gICAgY29uc3QgbmV3VGFzayA9ICh0YXNrc0FyciwgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XHJcbiAgICAgICAgdGFza3NBcnIucHVzaChuZXdUYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW5kZXIgdGFza3MgaW4gdGhlIFVJXHJcbiAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2tQcm9qZWN0LCB0YXNrc0FycikgPT4ge1xyXG4gICAgICAgIGNvbnN0IFRBU0tTX0xJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLWxpc3RcIik7XHJcblxyXG4gICAgICAgIFRBU0tTX0xJU1QuaW5uZXJIVE1MID0gYGA7XHJcbiAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IHRhc2tzQXJyLmZpbHRlcih0YXNrICA9PiB0YXNrLnByb2plY3QgPT09IHRhc2tQcm9qZWN0ICYmIHRhc2suZXhpc3RzID09PSB0cnVlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNvbG9yID0gZ2V0Q29sb3IocHJvamVjdFRhc2tzLCBpKTtcclxuXHJcbiAgICAgICAgICAgIFRBU0tTX0xJU1QuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke2NvbG9yfSB3LTEwMFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjdGFzay0ke2l9XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0VGFza3NbaV0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cInRhc2stJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQtYm9keSBiZy0ke2NvbG9yfSBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRlc2NyaXB0aW9uPC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0uZGVzY3JpcHRpb259PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBiZy0ke2NvbG9yfSB0ZXh0LXdoaXRlXCI+PHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RHVlIERhdGU8L3NwYW4+OiAke3Byb2plY3RUYXNrc1tpXS5kdWVEYXRlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctJHtjb2xvcn0gdGV4dC13aGl0ZVwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlByaW9yaXR5PC9zcGFuPjogJHtwcm9qZWN0VGFza3NbaV0ucHJpb3JpdHl9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mbyBtdC00XCIgaHJlZj1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTFcIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm11bHRpQ29sbGFwc2VFeGFtcGxlMVwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS10YXNrXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbXQtNCBtcy00XCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBtdWx0aS1jb2xsYXBzZVwiIGlkPVwibXVsdGlDb2xsYXBzZUV4YW1wbGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwidGFza3MtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCIgY2xhc3M9XCJmb3JtLWxhYmVsIHRleHQtaW5mb1wiPlRhc2sgVGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0YXNrLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm0tbGFiZWwgdGV4dC1pbmZvXCI+VGFzayBEZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRhc2stZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGF0ZVwiIGNsYXNzPVwiZm9ybS1sYWJlbCB0ZXh0LWluZm9cIj5EdWUgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFzay1kYXRlXCIgbmFtZT1cInRyaXAtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHlcIiBjbGFzcz1cImZvcm0tbGFiZWwgdGV4dC1pbmZvXCI+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0YXNrLXByaW9yaXR5XCIgY2xhc3M9XCJmb3JtLXNlbGVjdFwiIGFyaWEtbGFiZWw9XCJEZWZhdWx0IHNlbGVjdCBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5TZWxlY3QgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0YXNrLWJ0blwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBERUxFVEUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXRhc2snKTtcclxuICAgICAgICAgICAgREVMRVRFLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGFza3NbaV0uZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrKHRhc2tQcm9qZWN0LCBwcm9qZWN0VGFza3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbG9yID0gKGFyciwgaSkgPT4ge1xyXG4gICAgICAgIGxldCBjb2xvcjtcclxuICAgICAgICBpZiAoYXJyW2ldLnByaW9yaXR5ID09PSAnbG93Jykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICdzdWNjZXNzJztcclxuICAgICAgICB9IGVsc2UgaWYgKGFycltpXS5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnaW5mbyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTmV3VGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyB0YXNrQ3JlYXRpb24gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE1ldGhvZCBpbXBvcnRzXHJcbmltcG9ydCB7IHByb2plY3RDcmVhdGlvbiB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgdGFza0NyZWF0aW9uIH0gZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuLy8gT2JqZWN0J3MgYXJyYXlzXHJcbmNvbnN0IHByb2plY3RzID0gW107XHJcblxyXG5jb25zdCB0YXNrcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiVGFzayAxXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIDFcIixcclxuICAgICAgZHVlRGF0ZTogXCIyMDIxLTA2LTEwXCIsXHJcbiAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxyXG4gICAgICBwcm9qZWN0OiBcIlByb2plY3QgMVwiLFxyXG4gICAgICBleGlzdHM6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRhc2sgMlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiAyXCIsXHJcbiAgICAgIGR1ZURhdGU6IFwiMjAyMS0wNi0xMFwiLFxyXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcclxuICAgICAgcHJvamVjdDogXCJQcm9qZWN0IDJcIixcclxuICAgICAgZXhpc3RzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUYXNrIDNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb24gM1wiLFxyXG4gICAgICBkdWVEYXRlOiBcIjIwMjEtMDYtMTBcIixcclxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxyXG4gICAgICBwcm9qZWN0OiBcIlByb2plY3QgM1wiLFxyXG4gICAgICBleGlzdHM6IHRydWVcclxuICAgIH1cclxuICBdO1xyXG5cclxuLy8gQ2FsbCBvZiBwcm9qZWN0J3MgZnVuY3Rpb24gd2l0aCBhdHRhY2hlZCBldmVudCBsaXN0ZW5lcnNcclxucHJvamVjdENyZWF0aW9uLmFkZFByb2plY3QocHJvamVjdHMsIHRhc2tzKTtcclxucHJvamVjdENyZWF0aW9uLmRpc3BsYXlQcm9qZWN0VGFza3ModGFza3MpO1xyXG5cclxuLy8gQ2FsbCB0YXNrcyBmdW5jdGlvbnMgd2l0aCBhdHRhY2hlZCBldmVudCBsaXN0ZW5lcnNcclxudGFza0NyZWF0aW9uLmNyZWF0ZU5ld1Rhc2sodGFza3MpO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9