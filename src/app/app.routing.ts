import {Injectable, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';
import {AuthService} from './service1/auth.service';

const routes: Routes = [
  // { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', canActivate: [AuthService], loadChildren: 'src/app/lazy/lazy.module#LazyModule' },
  { path: 'dashboard', canActivate: [AuthService], loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
