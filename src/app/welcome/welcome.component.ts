import { Component } from '@angular/core';
import { LoginFacade } from '../data/login-data/login.facade';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor( private loginFacade: LoginFacade ) {
    // Initialization logic can go here
  }

  ngOnInit() {
    this.loginFacade.getUsers();
  }
}
