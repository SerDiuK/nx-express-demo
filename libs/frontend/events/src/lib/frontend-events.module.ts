import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './components/events/events.component';
import { FrontendEventsRoutingModule } from './frontend-events-routing.module';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [CommonModule, FrontendEventsRoutingModule],
  declarations: [EventsComponent, EventComponent],
})
export class FrontendEventsModule {}
