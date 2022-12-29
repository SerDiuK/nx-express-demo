import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '@nx-demo/api/tasks';

const tasksController = (router: Router): void => {
  router.get('/tasks', (req, res): void => {
    const tasks = getTasks();
    res.status(200).send(tasks);
  });

  router.post('/tasks', (req, res) => {
    const task = createTask(req.body);
    res.status(200).send(task);
  });

  router.put('/tasks/:id', (req, res) => {
    updateTask(req.params.id, req.body);
    res.status(200).send();
  });

  router.delete('/tasks/:id', (req, res) => {
    deleteTask(req.params.id);
    res.status(200).send();
  });
};

export default tasksController;
