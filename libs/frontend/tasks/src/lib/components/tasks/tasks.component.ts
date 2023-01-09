import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { Task } from '@nx-demo/shared/data-model';
import { Observable } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'nx-demo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  @HostBinding('class') classes = 'container';

  tasks$: Observable<Task[]> = this.tasksService.getTasks();

  constructor(private tasksService: TasksService) {}

  onChecked(task: Task): void {
    this.tasksService
      .updateTask(task.id, { completed: !task.completed })
      .subscribe();
  }

  onDelete(id: string): void {
    this.tasksService.deleteTask(id).subscribe(() => {
      this.tasks$ = this.tasksService.getTasks();
    });
  }
}
