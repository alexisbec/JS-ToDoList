import { colorLogic } from "../src/logic";

it('should get priority color', () => {
    const projects = [
        {
            name: 'Test Project',
            tasks: [
                {
                    name: 'Test Task',
                    description: 'A test task',
                    dueDate: '01/01/2020',
                    priority: 'low',
                    project: 'Test Project',
                },
            ],
        },
        {
            name: 'Test Project 2',
            tasks: [
                {
                    name: 'Test Task 2',
                    description: 'A test task 2',
                    dueDate: '01/01/2021',
                    priority: 'medium',
                    project: 'Test Project 2',
                },
            ],
        }
    ];
    expect(colorLogic.getColor(projects[0].tasks, 0)).toBe('success');
});

it('should return the button colors for edit and delete actions', () => {
    expect(colorLogic.buttonColor('success')).toEqual(['warning', 'danger']);
});

it('should get all the tasks in one array', () => {
    const projects = [
        {
            name: 'Test Project',
            tasks: [
                {
                    name: 'Test Task',
                    description: 'A test task',
                    dueDate: '01/01/2020',
                    priority: 'low',
                    project: 'Test Project',
                },
            ],
        },
        {
            name: 'Test Project 2',
            tasks: [
                {
                    name: 'Test Task 2',
                    description: 'A test task 2',
                    dueDate: '01/01/2021',
                    priority: 'medium',
                    project: 'Test Project 2',
                },
            ],
        }
    ];
    expect(colorLogic.allTasks(projects)).toEqual([
            {
            name: 'Test Task',
            description: 'A test task',
            dueDate: '01/01/2020',
            priority: 'low',
            project: 'Test Project',
            },
            {
                name: 'Test Task 2',
                description: 'A test task 2',
                dueDate: '01/01/2021',
                priority: 'medium',
                project: 'Test Project 2',
            }
            ]);
});

