import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../data/login-data/login.models';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  loggedInUser: User | null = null;
  greetingMessage: string | null = null;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loggedInUser = this.loginService.getLoggedInUser();
    if (!this.loggedInUser) {
      console.error('No user is logged in.');
    } else {
      console.log('Welcome,', this.loggedInUser.username);
      this.greetingMessage = `Welcome, ${this.loggedInUser.username}!`;
    }
  }
}
