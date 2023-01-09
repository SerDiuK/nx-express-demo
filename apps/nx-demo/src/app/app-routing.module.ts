import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
      {
        path: 'tasks',
        loadChildren: () =>
          import('@nx-demo/frontend/tasks').then((m) => m.FrontendTasksModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('@nx-demo/frontend/events').then(
            (m) => m.FrontendEventsModule
          ),
      },
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class AppRoutingModule {}
