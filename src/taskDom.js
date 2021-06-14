import { Task } from "./main";

// Task Creation Module (IIFE);
export const taskCreation = (() => {
  // Task Form
  const taskForm = () => {
    // Tasks Form Information
    const TASKS_FORM = document.forms['tasks-form'];

// prevent form default behaviour
    TASKS_FORM.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    return TASKS_FORM;
  }

  // Edit/Delete Tasks methods
  const deleteTask = (projectTasks, taskProject, i, TASKS_LIST) => {
    TASKS_LIST.addEventListener('click', (e) => {
      if (e.target.id === `delete-btn-${i}`) {
        projectTasks[i].exists = false;
        renderTask(taskProject, projectTasks);
      }
    });
  }

  const editTask = (projectTasks, taskProject, i, TASKS_LIST) =>{
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

  // render tasks in the UI
  const renderTask = (taskProject, tasksArr) => {
    const TASKS_LIST = document.querySelector('#tasks-list');

    TASKS_LIST.innerHTML = '';
    const projectTasks = tasksArr.filter(task => task.project === taskProject
        && task.exists === true);

    for (let i = 0; i < projectTasks.length; i += 1) {
      const color = Task.getColor(projectTasks, i);
      /* eslint max-len: ["error", { "ignoreTemplateLiterals": true }] */
      TASKS_LIST.innerHTML += `
            <li>
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
                    
                        <div class="d-flex mt-3 justify-content-between">
                            <div>
                                <p>
                                    <button class="btn btn-${Task.buttonColor(color)[0]}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample-${i}" aria-expanded="false" aria-controls="collapseExample-${i}">
                                        Edit
                                    </button>

                                    <button id="delete-btn-${i}" type="button" class="btn btn-${Task.buttonColor(color)[1]}">Delete</button>
                                </p>

                                <div class="collapse multi-collapse" id="collapseExample-${i}">
                                    <form id="edit-tasks-form">
                                        <div class="mb-3">
                                            <label for="edit-task-name" class="form-label text-info">Task Title</label>
                                            <input type="text" class="form-control" id="edit-task-name-${i}">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-description" class="form-label text-info">Task Description</label>
                                            <input type="text" class="form-control" id="edit-task-description-${i}">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-date" class="form-label text-info">Due Date</label>
                                            <br>
                                            <input type="date" id="edit-task-date-${i}" name="trip-start">
                                        </div>
                        
                                        <div class="mb-3">
                                            <label for="edit-task-priority" class="form-label text-info">Priority</label>
                                            <select id="edit-task-priority-${i}" class="form-select" aria-label="Default select example">
                                                <option selected>Select Priority</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button id="edit-btn-${i}" type="submit" class="btn btn-secondary">Edit Task</button>
                                        </div
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;

      document.querySelector(`#edit-task-name-${i}`).setAttribute('value', projectTasks[i].title);
      document.querySelector(`#edit-task-description-${i}`).setAttribute('value', projectTasks[i].description);
      document.querySelector(`#edit-task-date-${i}`).setAttribute('value', projectTasks[i].dueDate);
      document.querySelector(`#edit-task-priority-${i}`)
        .setAttribute('value', projectTasks[i].priority);

      deleteTask(projectTasks,
        taskProject,
        i,
        TASKS_LIST,
        taskCreation.renderTask);

      editTask(projectTasks,
        taskProject,
        i,
        TASKS_LIST,
        taskCreation.renderTask);
    }
  };

  // create task and display it on the UI
  const createNewTask = (tasksArr) => {
    const TASKS_FORM = taskForm();
    const TASK_BTN = document.querySelector('#task-btn');
    TASK_BTN.addEventListener('click', () => {
      const TASK_NAME = TASKS_FORM.querySelector('#task-name').value;
      const TASK_DESCRIPTION = TASKS_FORM
        .querySelector('#task-description')
        .value;
      const TASK_DATE = TASKS_FORM.querySelector('#task-date').value;
      const TASK_PRIORITY = TASKS_FORM.querySelector('#task-priority').value;
      const TASK_PROJECT = TASKS_FORM.querySelector('#task-project').value;

      if (TASK_NAME === '') {
        return;
      }
      if (TASK_DESCRIPTION === '') {
        return;
      }
      if (TASK_DATE === '') {
        return;
      }
      if (TASK_PRIORITY === '') {
        return;
      }

      // create new task instance
      Task.newTask(tasksArr,
        TASK_NAME,
        TASK_DESCRIPTION,
        TASK_DATE,
        TASK_PRIORITY,
        TASK_PROJECT);

      taskForm();
      // render task to the UI
      renderTask(TASK_PROJECT, tasksArr);

      document.querySelector('#tasks-form').reset();
    });
  };

  return {
    createNewTask, renderTask,
  };
})();

export default { taskCreation };