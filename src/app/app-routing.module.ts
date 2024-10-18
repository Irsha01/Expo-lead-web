import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  //{ path: '', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
  //{ path: 'login', loadChildren: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leftside', component: LeftsideComponent },
  { path: 'rightside', component: RightsideComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
