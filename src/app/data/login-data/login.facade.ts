import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoginActions from './login.actions';
import * as LoginSelectors from './login.selectors';
import { UsersState } from "./login.reducer";
import { User } from "./login.models";


@Injectable({  providedIn: 'root'})
    export class LoginFacade {
  usersError$: Observable<string | null>;
  loading$: Observable<boolean>;
  users$: Observable<any>;

  constructor(private store: Store) {
    this.usersError$ = this.store.select(LoginSelectors.selectUsersError);
    this.loading$ = this.store.select(LoginSelectors.selectUsersLoading);
    this.users$ = this.store.select(LoginSelectors.selectUsersList);
  }

  getUsers(): Observable<User[]> {
    this.store.dispatch(LoginActions.users());
    return this.store.select(LoginSelectors.selectUsersList);
  }

  logout(): void {
    this.store.dispatch(LoginActions.logout());
  }
}