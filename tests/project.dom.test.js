import { JSDOM } from 'jsdom';
import { Project, projectCreation } from '../src/projectDom';

it('should create a new project object', () => {
  const newProject = new Project('Test Project', []);
  expect(newProject.title).toBe('Test Project');
});

it('should add a new project instance to the projects array', () => {
  const projects = [];
  const newProj = new Project('Test Project', []);
  Project.newProject(newProj.title, projects);
  expect(projects).toEqual([{ title: 'Test Project', tasks: [] }]);
});

it('should create a project instance object from the UI', () => {
  const { window } = new JSDOM(`
        <form id="project-form">
            <div class="mb-3">
                <label for="project-title" class="form-label text-info">Project's Title</label>
                <input value="Project 1" type="text" class="form-control" id="project-title" aria-describedby="emailHelp" required>
            </div>
        
            <button id="project-btn" type="submit" class="btn btn-primary">Create Project</button>
        </form>
`);

  global.document = window.document;
  global.window = window;

  const projects = [];

  projectCreation.createProject(projects);

  expect(projects[0].title).toBe('Project 1');
});

it('should insert the created project in the UI', () => {
  const { window } = new JSDOM(`
        <ul id="project-list" class="list-group pt-4 bg-dark">
        </ul>
    `);

  global.document = window.document;
  global.window = window;

  const projects = [];

  projectCreation.renderProjectView(projects);

  const list = document.querySelector('#project-list');

  expect(list.innerHTML).toBe('\n'
        + '            <li id="all-projects" class="list-group-item list-group-item-dark active btn my-1">All Tasks</li>\n'
        + '        ');
});

it('Should create the selection on tasks based on project', () => {
  const { window } = new JSDOM(`
        <div class="mb-3" id="project">
        </div>
    `);

  global.document = window.document;
  global.window = window;

  projectCreation.taskOptions('Project 1');

  const projectOption = document.querySelector('#project');

  expect(projectOption.innerHTML).toBe('\n'
        + '        <input type="hidden" value="Project 1" id="task-project" class="form-control" aria-label="Default select example">\n'
        + '    ');
});
