import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({  providedIn: 'root'
})
export class ApiService {
    private url = 'https://dummyjson.com/users';
    constructor(private http: HttpClient) {}

    getUsers<Users>() {
        return this.http.get<Users>(this.url);
    }
    getUser<User>(id: number) {
        return this.http.get<User>(`${this.url}/${id}`);
    }
}