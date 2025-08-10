import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoginActions from './login.actions';
import * as LoginSelectors from './login.selectors';
import { loginCredentials, User } from "./login.models";


@Injectable({  providedIn: 'root'})

export class LoginFacade {
  usersError$: Observable<string | null>;
  loading$: Observable<boolean>;
  users$: Observable<any>;
  loggedInUser$: Observable<User | null>;
  isAuthChecked: boolean = false;

  constructor(private store: Store) {
    this.usersError$ = this.store.select(LoginSelectors.selectUsersError);
    this.loading$ = this.store.select(LoginSelectors.selectUsersLoading);
    this.users$ = this.store.select(LoginSelectors.selectUsersList);
    this.loggedInUser$ = this.store.select(LoginSelectors.selectLoggedInUser);
  }

  getUsers(): Observable<User[]> {
    this.store.dispatch(LoginActions.users());
    return this.store.select(LoginSelectors.selectUsersList);
  }

  login(credentials: loginCredentials): Observable<User | null> {
    this.store.dispatch(LoginActions.login({ credentials }));
    this.loggedInUser$.subscribe(user => {
      if (user && user.accessToken !== undefined) {
        localStorage.setItem('authToken', user.accessToken);
      }
    });
    return this.store.select(LoginSelectors.selectLoggedInUser);
  }

  loginWithToken(): Observable<User | null> {
    this.store.dispatch(LoginActions.getCurrentUser());
    return this.store.select(LoginSelectors.selectLoggedInUser);
  }

  logout(): void {
    this.store.dispatch(LoginActions.logout());
  }

  register(user: User): Observable<User | null> {
    this.store.dispatch(LoginActions.register({ user }));
    return this.store.select(LoginSelectors.selectLoggedInUser);
  }
}