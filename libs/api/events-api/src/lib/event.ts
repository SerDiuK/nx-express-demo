import { NewEvent, Event } from '@nx-demo/shared/data-model';
import { randomUUID } from 'crypto';

const events: Event[] = [
  {
    id: randomUUID(),
    label: 'New production framework',
    date: new Date('2023-03-20'),
  },
  {
    id: randomUUID(),
    label: 'Database migration',
    date: new Date('2023-04-16'),
  },
  {
    id: randomUUID(),
    label: 'Kickoff party',
    date: new Date('2023-05-10'),
  },
];

export const getEvents = (): Event[] => {
  return events;
};

export const createEvent = (body: NewEvent): Event => {
  const newEvent = { ...body, id: randomUUID() } as Event;
  events.push(newEvent);

  return newEvent;
};

export const updateEvent = (id: string, body: Partial<NewEvent>): void => {
  const index = events.findIndex((event) => event.id === id);

  if (index !== -1) {
    events[index] = { ...events[index], ...body };
  }
};

export const deleteEvent = (id: string): void => {
  const index = events.findIndex((event) => event.id === id);
  if (index !== -1) {
    events.splice(index, 1);
  }
};
