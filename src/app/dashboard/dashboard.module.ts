import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {routing} from './dashboard.routing';
import { UserComponent } from './user/user.component';
import {DashboardService} from './dashboard.service';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    DashboardComponent,
    UserComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
