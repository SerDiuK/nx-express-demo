export interface Task {
  id: string;
  label: string;
  completed: boolean;
}

export type NewTask = Omit<Task, 'id'>;
