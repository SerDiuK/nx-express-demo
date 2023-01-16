import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from '@nx-demo/shared/data-model';
import { of } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let service: TasksService;

  const tasks: Task[] = [{ label: 'Task', id: 'task-id-1', completed: false }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      providers: [
        {
          provide: TasksService,
          useValue: { getTasks: () => of(tasks), updateTask: () => of() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(TasksService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should updateTask when a task is checked', () => {
    const spy = jest.spyOn(service, 'updateTask');
    component.onChecked(tasks[0]);

    expect(spy).toHaveBeenCalledWith(tasks[0].id, {
      completed: true,
    });
  });
});
