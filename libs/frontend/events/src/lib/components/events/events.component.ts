import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Event } from '@nx-demo/shared/data-model';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/events.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  @HostBinding('class') classes = 'container';

  events$: Observable<Event[]> = this.eventsService.getEvents();

  constructor(private eventsService: EventsService) {}

  onDelete(id: string): void {
    this.eventsService.deleteEvent(id);
  }
}
