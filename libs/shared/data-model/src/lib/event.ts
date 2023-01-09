export interface Event {
  id: string;
  label: string;
  date: Date;
}

export type NewEvent = Omit<Event, 'id'>;
