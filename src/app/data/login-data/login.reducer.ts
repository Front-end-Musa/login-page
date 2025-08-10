import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';
import { User } from './login.models';

export interface UsersState {
  users: User[];
  loggedInUser: User | null;
  error: string | null;
  loading: boolean;
  isAuthChecked: boolean;
}

export const initialState: UsersState = {
  users: [],
  loggedInUser: null,
  error: null,
  loading: false,
  isAuthChecked: false
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
  on(LoginActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.loginSuccess, (state, { user }) => ({
    ...state,
    loggedInUser: user,
    loading: false,
    isAuthChecked: true,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    isAuthChecked: true,
  })),
  on(LoginActions.authCheck, (state) => ({
    ...state,
    isAuthChecked: true,
  })),
  on(LoginActions.getCurrentUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.getCurrentUserSuccess, (state, { user }) => ({
    ...state,
    loggedInUser: user,
    isAuthChecked: true,
  })),
  on(LoginActions.getCurrentUserFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthChecked: true,
  })),
  on(LoginActions.register, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.registerSuccess, (state, { user }) => ({
    ...state,
    loggedInUser: user,
    loading: false,
    isAuthChecked: true,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    isAuthChecked: true,
  })),
);
