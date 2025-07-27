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
  // Remove provideStore from here; add it to your AppModule instead
  providers: []
})
export class LoginComponent {
  private store = inject(Store)
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
    this.loginFacade.users$.subscribe(users => {
      console.log(this.users);
      this.users = users;
      console.log(this.users)
    });
  }

  onSubmit() {
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);
      if (this.loginForm.get('username')?.value == this.users[i].username &&
          this.loginForm.get('password')?.value == this.users[i].password) {
        this.router.navigate(['/welcome']);
        return;
      } else {
        console.log('Invalid username or password');
      }
    }
  }
}

