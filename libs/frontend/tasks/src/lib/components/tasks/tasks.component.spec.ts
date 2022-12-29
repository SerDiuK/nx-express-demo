import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
      providers: [
        { provide: TasksService, useValue: { getTasks: () => of([]) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
