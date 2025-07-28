import { users } from './../data/login-data/login.actions';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFacade } from '../data/login-data/login.facade';
import { Store } from '@ngrx/store';
import { User } from '../data/login-data/login.models';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: []
})
export class LoginComponent {
  loginForm: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder, private router: Router, private loginFacade: LoginFacade) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.loginFacade.getUsers();
    this.loginFacade.users$.subscribe(result => {
      console.log('Users array:', result);
      this.users = result; // Assuming users is an array of User objects
    });
  }

  submit() {
    if (this.users.length > 2) {
      console.log(this.users[2].username);
    } else {
      console.log('Not enough users loaded:', this.users);
    }
  }
}
