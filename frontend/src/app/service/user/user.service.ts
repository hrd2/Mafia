import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { LoginDetails } from '../../model/login-details.model';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  }).set('Access-Control-Allow-Origin',"*")
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _user?: User = undefined;
    private readonly _router: Router;
    private readonly _http: HttpClient;

    constructor(router: Router,
                http: HttpClient) {
      this._router = router;
      this._http = http;
    }

    isLoggedIn(): boolean {
        return this._user != undefined;
    }

    get user(): User {
        return this._user
    }

    login(loginDetails: LoginDetails): void {
        const output: Observable<User> = this._http.post<User>(
        environment.backendUrl + 'login',
        loginDetails,
        httpOptions);
        output.subscribe((user: User) => {
            this._user = user;
            this._router.navigate(['']);
        });

    }

    logout(): void {
        this._user = undefined;
        this._router.navigate(['login']);
    }
}
