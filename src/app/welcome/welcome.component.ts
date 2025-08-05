import { Component, OnInit } from '@angular/core';
import { User } from '../data/login-data/login.models';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  loggedInUser: User | null = null;
  greetingMessage: string | null = null;

  ngOnInit() {}
}
