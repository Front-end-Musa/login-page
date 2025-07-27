import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export interface UsersState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

export const initialState: UsersState = {
  token: null,
  error: null,
  loading: false,
};

export const loginReducer = createReducer(
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
  on(LoginActions.logout, () => initialState)
);
