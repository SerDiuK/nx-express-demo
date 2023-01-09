import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../lib/task';

export const tasksController = (router: Router): void => {
  router.get('/', (req, res): void => {
    const tasks = getTasks();
    res.status(200).send(tasks);
  });

  router.post('/', (req, res) => {
    const task = createTask(req.body);
    res.status(200).send(task);
  });

  router.put('/:id', (req, res) => {
    updateTask(req.params.id, req.body);
    res.status(200).send();
  });

  router.delete('/:id', (req, res) => {
    deleteTask(req.params.id);
    res.status(200).send();
  });
};
