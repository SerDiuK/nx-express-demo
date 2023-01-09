import { NewTask, Task } from '@nx-demo/shared/data-model';
import { randomUUID } from 'crypto';

const tasks: Task[] = [
  {
    id: randomUUID(),
    label: 'Make task list',
    completed: true,
  },
  {
    id: randomUUID(),
    label: 'Add ESBuild',
    completed: false,
  },
  {
    id: randomUUID(),
    label: 'Add React',
    completed: true,
  },
  {
    id: randomUUID(),
    label: 'Check amazing dep graph',
    completed: true,
  },
];

export const getTasks = (): Task[] => {
  return tasks;
};

export const createTask = (body: NewTask): Task => {
  const newTask = { ...body, id: randomUUID() } as Task;
  tasks.push(newTask);

  return newTask;
};

export const updateTask = (id: string, body: Partial<NewTask>): void => {
  const index = tasks.findIndex((task) => task.id === id);

  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...body };
  }
};

export const deleteTask = (id: string): void => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
};
