import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginFacade } from './data/login-data/login.facade';
import { loginCredentials } from './data/login-data/login.models';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'login-page';
  loginFacade = inject(LoginFacade)
  router = inject(Router);
  loggedInUser: loginCredentials | null = null;

  ngOnInit() {
    this.loginFacade.getUsers();
    this.loginFacade.loginWithToken().subscribe({
      next: (user) => {
        if (user) {
          console.log('User logged in:', user);
          this.loggedInUser = user;
          this.loginFacade.isAuthChecked = true;
          this.router.navigate(['/welcome']);
        } else {
          this.loginFacade.isAuthChecked = true;
          console.log('No user is currently logged in.');
        }
      }
    });
  }
}
