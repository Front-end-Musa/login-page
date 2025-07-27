import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './login.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('login');

export const selectToken = createSelector(
  selectUsersState,
  (state) => state.token
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.error
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);
