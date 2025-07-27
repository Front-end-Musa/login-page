import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { User } from './login.models';

export interface UsersState {
  users: User[];
  error: string | null;
  loading: boolean;
}

export const initialState: UsersState = {
  users: [],
  error: null,
  loading: false,
};

export const LoginReducer = createReducer(
  initialState,
  on(LoginActions.users, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.usersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(LoginActions.usersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(LoginActions.logout, () => initialState),
  on(LoginActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.loginSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
