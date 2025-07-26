import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.reducer';

export const selectLoginState = createFeatureSelector<LoginState>('login');

export const selectToken = createSelector(
  selectLoginState,
  (state) => state.token
);

export const selectLoginError = createSelector(
  selectLoginState,
  (state) => state.error
);

export const selectLoginLoading = createSelector(
  selectLoginState,
  (state) => state.loading
);
