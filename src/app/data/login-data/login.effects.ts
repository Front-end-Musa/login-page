import { inject, Injectable } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { User } from "./login.models";
import * as LoginActions from './login.actions';

@Injectable()
export class LoginEffects {
    private api = inject(ApiService);
    actions$ = inject(Actions);

    loadUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(LoginActions.users),
            switchMap(() =>
                this.api.getUsers<User[]>().pipe(
                    map(users => LoginActions.usersSuccess({ users })),
                    catchError(error => [LoginActions.usersFailure({ error: error.message })])
                )
            )
        )
    );

    // loginUser$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType(LoginActions.login),
    //         switchMap((action) => 
    //             this.api.getUser<User>(action.id).pipe(
    //                 map(user => LoginActions.loginSuccess({ user })),
    //                 catchError(error => [LoginActions.loginFailure({ error: error.message })])
    //             )
    //         )
    //     )
    // );
}