import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFacade } from '../data/login-data/login.facade';
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
export class LoginComponent implements OnInit  {
  loginForm: FormGroup;
  registerForm: FormGroup;
  users: { users: User[] } = { users: [] };
  isError: boolean = false;
  loggedInUser: User | null = null;
  showRegister: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private loginFacade: LoginFacade) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  
  ngOnInit() {
    if(this.loggedInUser !== null) {
      this.getUsers()
    }
  }

  getUsers() {
    this.loginFacade.getUsers();
    this.loginFacade.users$.subscribe(result => {
      console.log('Users array:', result);
      this.users = result;
    });
  }

  login(loginForm: FormGroup) {
    console.log('Form submitted:', loginForm.value);
    console.log('Users:', this.users);
    this.loginFacade.login(loginForm.value).subscribe({
      next: (response) => {
        if (response) {
          console.log('Login successful:', response);
          this.loggedInUser = response;
          console.log('Logged in user:', this.loggedInUser);
          this.router.navigate(['/welcome']);
          this.isError = false;
          this.getUsers()
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.isError = true;
      }
    });
  }

  switchForms() {
    this.showRegister = !this.showRegister;
    if (this.showRegister) {
      this.loginForm.reset();
    } else {
      this.registerForm.reset();
    }
  }

  register() {
    console.log('Register form submitted:', this.registerForm.value);
    this.loginFacade.register(this.registerForm.value).subscribe({
      next: (response) => {
        if (response) {
          console.log('Registration successful:', response);
          this.loggedInUser = response;
          this.router.navigate(['/welcome']);
          this.isError = false;
        }
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.isError = true;
      }
    });
  }
}

