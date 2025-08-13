import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap, throwError } from 'rxjs';
import { User } from '../data/login-data/login.models';


@Injectable({  providedIn: 'root'
})
export class ApiService {
    private url = 'https://users-backend-production-ed1c.up.railway.app';
    constructor(private http: HttpClient) {}

    getUsers<Users>() {
        return this.http.get<Users>(`${this.url}/users`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            }
        });
    }
    getUser<User>(id: number) {
        return this.http.get<User>(`${this.url}/${id}`);
    }

    login(credentials: { email: string; password: string }): Observable<User> {
        return this.http.post<any>(`${this.url}/auth/login`, credentials)
    }

    getCurrentUserFromToken(): Observable<any> {
        const token = localStorage.getItem('authToken');
        if (!token) return throwError(() => new Error('Token missing'));

        console.log('Token:', token)
        return this.http.get(`${this.url}/auth/me`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }

    register(user: User): Observable<User> {
        return this.http.post<User>(`${this.url}/auth/register`, {
            name: user.name,
            password: user.password,
            email: user.email
        })
    }

}