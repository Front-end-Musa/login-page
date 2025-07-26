import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export interface LoginState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

export const initialState: LoginState = {
  token: null,
  error: null,
  loading: false,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(LoginActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: false,
  })),
  on(LoginActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(LoginActions.logout, () => initialState)
);
