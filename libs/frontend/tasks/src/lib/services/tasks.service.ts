import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewTask, Task } from '@nx-demo/shared/data-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  readonly baseUrl = 'api/tasks';

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  createTask(body: NewTask): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}`, body);
  }

  updateTask(id: string, body: Partial<NewTask>): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${id}`, body);
  }

  deleteTask(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
