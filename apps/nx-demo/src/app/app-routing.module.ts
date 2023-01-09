import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@nx-demo/frontend/tasks').then((m) => m.FrontendTasksModule),
      },
    ]),
  ],
})
export class AppRoutingModule {}
