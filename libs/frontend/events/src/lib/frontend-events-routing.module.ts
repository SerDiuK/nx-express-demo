import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent,
      },
    ]),
  ],
})
export class FrontendEventsRoutingModule {}
