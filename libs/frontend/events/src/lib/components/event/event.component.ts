import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { Event } from '@nx-demo/shared/data-model';

@Component({
  selector: 'nx-demo-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventComponent {
  @HostBinding('class') classes = 'card';

  @Input() event: Event | null = null;

  @Output() deleted = new EventEmitter<string>();
}
