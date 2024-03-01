import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
  //{ path: 'login', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
