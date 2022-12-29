import { Router } from 'express';
import tasksController from './tasks';

const loadControllers = (router: Router): void => {
  tasksController(router);
};

export default loadControllers;
