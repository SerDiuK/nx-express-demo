import { Router } from 'express';
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '@nx-demo/api/events-api';

export const eventsController = (router: Router): void => {
  router.get('/', (req, res): void => {
    const events = getEvents();
    res.status(200).send(events);
  });

  router.post('/', (req, res) => {
    const event = createEvent(req.body);
    res.status(200).send(event);
  });

  router.put('/:id', (req, res) => {
    updateEvent(req.params.id, req.body);
    res.status(200).send();
  });

  router.delete('/:id', (req, res) => {
    deleteEvent(req.params.id);
    res.status(200).send();
  });
};
