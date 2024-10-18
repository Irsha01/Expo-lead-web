import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Webservice } from './services/webservice.service';
import { HttpClientModule } from '@angular/common/http';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LeftsideComponent,
    RightsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   HttpClientTestingModule
  ],
  providers: [Webservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
