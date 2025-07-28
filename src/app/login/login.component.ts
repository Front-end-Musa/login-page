import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFacade } from '../data/login-data/login.facade';
import { User } from '../data/login-data/login.models';
import { LoginService } from '../services/login.service';

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
  users: { users: User[] } = { users: [] };
  isError: boolean = false;
  loggedInUser: User | null = null;

  constructor(private fb: FormBuilder, private router: Router, private loginFacade: LoginFacade, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    this.loginFacade.getUsers();
    this.loginFacade.users$.subscribe(result => {
      console.log('Users array:', result);
      this.users = result;
    });
  }

  submit() {
    console.log('Form submitted:', this.loginForm.value);
    console.log('Users:', this.users);
    this.users.users.forEach((user) => {
      if (user.username === this.loginForm.value.username && user.password === this.loginForm.value.password) {
        console.log('Login successful for user:', user.username);
        this.router.navigate(['/welcome']);
        this.loggedInUser = user;
        this.isError = false;
        this.loginService.setLoggedInUser(user)
      } else {
        console.log('Login failed for user:', user.username);
        this.isError = true;
      }
    });
  }
}

