import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Webservice } from '../services/webservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  config!: { email: string; password: string; wsfunc: string; };

  constructor(private formBuilder:FormBuilder,private configService:Webservice){}
ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  this.showConfig();
  
}
showConfig() {
  this.configService.getConfig()
    .subscribe(data => this.config = {
        email:'admin',
        password:'password',
        wsfunc:'check_login'
    });
}

onSubmit(){
    if (this.loginForm.valid) {
      // Perform login logic (e.g., send data to a server)
      console.log('Login successful!', this.loginForm.value);
    } else {
      // Form is invalid, show error messages
      console.log('Form is invalid');
    }
  }
}
