import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ModuleWithProviders} from '@angular/core';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UserComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
