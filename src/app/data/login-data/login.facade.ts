import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoginActions from './login.actions';
import * as LoginSelectors from './login.selectors';


@Injectable({  providedIn: 'root'})
export class LoginFacade {
  token$: Observable<string | null>;
  usersError$: Observable<string | null>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.token$ = this.store.select(LoginSelectors.selectToken);
    this.usersError$ = this.store.select(LoginSelectors.selectUsersError);
    this.loading$ = this.store.select(LoginSelectors.selectUsersLoading);
  }

  getUsers(): void {
    this.store.dispatch(LoginActions.users());
  }

  logout(): void {
    this.store.dispatch(LoginActions.logout());
  }
}