import { inject, Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { User } from "./login.models";
import * as LoginActions from './login.actions';
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
    private api = inject(ApiService);
    private router = inject(Router);
    actions$ = inject(Actions);

    loadUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LoginActions.users),
            switchMap(() =>
                this.api.getUsers<User[]>().pipe(
                    map(users => LoginActions.usersSuccess({ users })),
                    catchError(error => [LoginActions.usersFailure({ error: error.message })]),
                    tap(() => this.router.navigate(['/welcome']))
                )
            )
        )
    );

    loginUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LoginActions.login),
            switchMap((action) => 
                this.api.login(action.credentials).pipe(
                    map(user => LoginActions.loginSuccess({ user })),
                    catchError(error => [LoginActions.loginFailure({ error: error.message })])
                )
            )
        )
    );

    getCurrentUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LoginActions.getCurrentUser),
            switchMap(() => 
                this.api.getCurrentUserFromToken().pipe(
                    map(user => LoginActions.getCurrentUserSuccess({ user })),
                    catchError(error => [LoginActions.getCurrentUserFailure({ error: error.message })])
                )
            )
        )
    );

    registerUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LoginActions.register),
            switchMap((action) => 
                this.api.register(action.user).pipe(
                    map(user => LoginActions.registerSuccess({ user })),
                    catchError(error => [LoginActions.loginFailure({ error: error.message })])
                )
            )
        )
    );
}