import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Task } from '@nx-demo/shared/data-model';
import {} from 'stream';

@Component({
  selector: 'nx-demo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @HostBinding('class') classes = 'card';

  @Input() task: Task | null = null;

  @Output() checked = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<string>();
}
