import { Injectable } from "@angular/core";
import { User } from "../data/login-data/login.models";

@Injectable({ providedIn: 'root' })
export class LoginService {
  private loggedInUser: User | null = null;

  setLoggedInUser(user: User): void {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }
}