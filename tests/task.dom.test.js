import { JSDOM } from 'jsdom';
import { Task, taskCreation } from '../src/taskDom';

it('should create a new task object', () => {
  const newTask = new Task('Task 1', 'Task description', '01/01/2021', 'low', 'Project 1');
  expect(newTask.title).toBe('Task 1');
});

it('should render the tasks in the UI', () => {
  const { window } = new JSDOM(`
        <div id="task-display" class="d-none">
            <ul id="tasks-list" class="pt-4">
            </ul>

            <div>
              <p>
                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>
              </p>
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <form id="tasks-form">
                  <div class="mb-3">
                    <label for="task-name" class="form-label text-info">Task Title</label>
                    <input type="text" class="form-control" id="task-name" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-description" class="form-label text-info">Task Description</label>
                    <input type="text" class="form-control" id="task-description" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-date" class="form-label text-info">Due Date</label>
                    <br>
                    <input type="date" id="task-date" name="trip-start" required>
                  </div>

                  <div class="mb-3">
                    <label for="task-priority" class="form-label text-info">Priority</label>
                    <select id="task-priority" class="form-select" aria-label="Default select example" required>
                      <option selected>Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div class="mb-3" id="project">

                  </div>

                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>
                </form>
              </div>
            </div>
          </div>
    `);

  global.document = window.document;
  global.window = window;

  const project = [
    {
      title: 'Project 1',
      tasks: [
        {
          title: 'Task 1',
          description: 'Task description',
          dueDate: '01/01/2021',
          priority: 'low',
          project: 'Project 1',
        },
      ],
    },
  ];

  taskCreation.renderTasks(project[0].title, project[0].tasks[0], project);

  expect(document.querySelector('#task-display').innerHTML).toBe('\n'
        + '            <ul id="tasks-list" class="pt-4"></ul>\n'
        + '\n'
        + '            <div>\n'
        + '              <p>\n'
        + '                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>\n'
        + '              </p>\n'
        + '              <div class="collapse multi-collapse" id="multiCollapseExample2">\n'
        + '                <form id="tasks-form">\n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-name" class="form-label text-info">Task Title</label>\n'
        + '                    <input type="text" class="form-control" id="task-name" required="">\n'
        + '                  </div>\n'
        + '  \n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-description" class="form-label text-info">Task Description</label>\n'
        + '                    <input type="text" class="form-control" id="task-description" required="">\n'
        + '                  </div>\n'
        + '  \n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-date" class="form-label text-info">Due Date</label>\n'
        + '                    <br>\n'
        + '                    <input type="date" id="task-date" name="trip-start" required="">\n'
        + '                  </div>\n'
        + '\n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-priority" class="form-label text-info">Priority</label>\n'
        + '                    <select id="task-priority" class="form-select" aria-label="Default select example" required="">\n'
        + '                      <option selected="">Select Priority</option>\n'
        + '                      <option value="low">Low</option>\n'
        + '                      <option value="medium">Medium</option>\n'
        + '                      <option value="high">High</option>\n'
        + '                    </select>\n'
        + '                  </div>\n'
        + '\n'
        + '                  <div class="mb-3" id="project">\n'
        + '\n'
        + '                  </div>\n'
        + '\n'
        + '                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>\n'
        + '                </form>\n'
        + '              </div>\n'
        + '            </div>\n'
        + '          ');
});

it('should delete tasks from the UI', () => {
  const { window } = new JSDOM(`
        <div id="task-display" class="d-none">
            <ul id="tasks-list" class="pt-4">
            </ul>

            <div>
              <p>
                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>
              </p>
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <form id="tasks-form">
                  <div class="mb-3">
                    <label for="task-name" class="form-label text-info">Task Title</label>
                    <input type="text" class="form-control" id="task-name" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-description" class="form-label text-info">Task Description</label>
                    <input type="text" class="form-control" id="task-description" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-date" class="form-label text-info">Due Date</label>
                    <br>
                    <input type="date" id="task-date" name="trip-start" required>
                  </div>

                  <div class="mb-3">
                    <label for="task-priority" class="form-label text-info">Priority</label>
                    <select id="task-priority" class="form-select" aria-label="Default select example" required>
                      <option selected>Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div class="mb-3" id="project">

                  </div>

                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>
                </form>
              </div>
            </div>
          </div>
    `);

  global.document = window.document;
  global.window = window;

  const project = [
    {
      title: 'Project 1',
      tasks: [
        {
          title: 'Task 1',
          description: 'Task description',
          dueDate: '01/01/2021',
          priority: 'low',
          project: 'Project 1',
        },
      ],
    },
  ];

  taskCreation.renderTasks(project[0].title, project[0].tasks[0], project);

  Task.deleteTask(project[0].tasks[0], project[0].title, project, taskCreation.renderTasks);

  expect(document.querySelector('#task-display').innerHTML).toBe(`
            <ul id="tasks-list" class="pt-4"></ul>

            <div>
              <p>
                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>
              </p>
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <form id="tasks-form">
                  <div class="mb-3">
                    <label for="task-name" class="form-label text-info">Task Title</label>
                    <input type="text" class="form-control" id="task-name" required="">
                  </div>
  
                  <div class="mb-3">
                    <label for="task-description" class="form-label text-info">Task Description</label>
                    <input type="text" class="form-control" id="task-description" required="">
                  </div>
  
                  <div class="mb-3">
                    <label for="task-date" class="form-label text-info">Due Date</label>
                    <br>
                    <input type="date" id="task-date" name="trip-start" required="">
                  </div>

                  <div class="mb-3">
                    <label for="task-priority" class="form-label text-info">Priority</label>
                    <select id="task-priority" class="form-select" aria-label="Default select example" required="">
                      <option selected="">Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div class="mb-3" id="project">

                  </div>

                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>
                </form>
              </div>
            </div>
          `);
});

it('should edit tasks from the UI', () => {
  const { window } = new JSDOM(`
        <div id="task-display" class="d-none">
            <ul id="tasks-list" class="pt-4">
            </ul>

            <div>
              <p>
                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>
              </p>
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <form id="tasks-form">
                  <div class="mb-3">
                    <label for="task-name" class="form-label text-info">Task Title</label>
                    <input type="text" class="form-control" id="task-name" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-description" class="form-label text-info">Task Description</label>
                    <input type="text" class="form-control" id="task-description" required>
                  </div>
  
                  <div class="mb-3">
                    <label for="task-date" class="form-label text-info">Due Date</label>
                    <br>
                    <input type="date" id="task-date" name="trip-start" required>
                  </div>

                  <div class="mb-3">
                    <label for="task-priority" class="form-label text-info">Priority</label>
                    <select id="task-priority" class="form-select" aria-label="Default select example" required>
                      <option selected>Select Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div class="mb-3" id="project">

                  </div>

                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>
                </form>
              </div>
            </div>
          </div>
    `);

  global.document = window.document;
  global.window = window;

  const project = [
    {
      title: 'Project 1',
      tasks: [
        {
          title: 'Task 1',
          description: 'Task description',
          dueDate: '01/01/2021',
          priority: 'low',
          project: 'Project 1',
        },
      ],
    },
  ];

  taskCreation.renderTasks(project[0].title, project[0].tasks[0], project);

  Task.editTask(project[0].tasks[0], project[0].title, project, taskCreation.renderTasks);

  expect(document.querySelector('#task-display').innerHTML).toBe('\n'
        + '            <ul id="tasks-list" class="pt-4"></ul>\n'
        + '\n'
        + '            <div>\n'
        + '              <p>\n'
        + '                <button id="add-task" class="btn btn-info mt-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Add Task</button>\n'
        + '              </p>\n'
        + '              <div class="collapse multi-collapse" id="multiCollapseExample2">\n'
        + '                <form id="tasks-form">\n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-name" class="form-label text-info">Task Title</label>\n'
        + '                    <input type="text" class="form-control" id="task-name" required="">\n'
        + '                  </div>\n'
        + '  \n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-description" class="form-label text-info">Task Description</label>\n'
        + '                    <input type="text" class="form-control" id="task-description" required="">\n'
        + '                  </div>\n'
        + '  \n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-date" class="form-label text-info">Due Date</label>\n'
        + '                    <br>\n'
        + '                    <input type="date" id="task-date" name="trip-start" required="">\n'
        + '                  </div>\n'
        + '\n'
        + '                  <div class="mb-3">\n'
        + '                    <label for="task-priority" class="form-label text-info">Priority</label>\n'
        + '                    <select id="task-priority" class="form-select" aria-label="Default select example" required="">\n'
        + '                      <option selected="">Select Priority</option>\n'
        + '                      <option value="low">Low</option>\n'
        + '                      <option value="medium">Medium</option>\n'
        + '                      <option value="high">High</option>\n'
        + '                    </select>\n'
        + '                  </div>\n'
        + '\n'
        + '                  <div class="mb-3" id="project">\n'
        + '\n'
        + '                  </div>\n'
        + '\n'
        + '                  <button id="task-btn" type="submit" class="btn btn-info">Submit</button>\n'
        + '                </form>\n'
        + '              </div>\n'
        + '            </div>\n'
        + '          ');
});