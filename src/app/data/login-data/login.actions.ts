import { createAction, props } from '@ngrx/store';
import { loginCredentials, User } from './login.models';

export const users = createAction(
  '[Login] Users'
);

export const usersSuccess = createAction(
  '[Login] Users Success',
  props<{ users: User[] }>()
);

export const usersFailure = createAction(
  '[Auth] Users Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: loginCredentials }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const authCheck = createAction('[Auth] Authorization Check');

export const getCurrentUser = createAction('[Auth] Get Current User');
export const getCurrentUserSuccess = createAction(
  '[Auth] Get Current User Success',
  props<{ user: User }>()
);
export const getCurrentUserFailure = createAction(
  '[Auth] Get Current User Failure',
  props<{ error: string }>()
);
