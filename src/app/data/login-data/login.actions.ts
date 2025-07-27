import { createAction, props } from '@ngrx/store';
import { User } from './login.models';

export const users = createAction(
  '[Auth] Login'
);

export const usersSuccess = createAction(
  '[Auth] Login Success',
  props<{ users: User[] }>()
);

export const usersFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);