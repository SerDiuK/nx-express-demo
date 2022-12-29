import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent,
      },
    ]),
  ],
})
export class FrontendTasksRoutingModule {}
