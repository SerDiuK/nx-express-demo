import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { FrontendTasksRoutingModule } from './frontend-tasks-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FrontendTasksRoutingModule, FormsModule],
  declarations: [TasksComponent],
})
export class FrontendTasksModule {}
