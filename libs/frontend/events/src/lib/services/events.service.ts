import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewEvent, Event } from '@nx-demo/shared/data-model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  readonly baseUrl = 'events-api';

  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.baseUrl);
  }

  createEvent(body: NewEvent): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}`, body);
  }

  updateEvent(id: string, body: Partial<NewEvent>): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${id}`, body);
  }

  deleteEvent(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
