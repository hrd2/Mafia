import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { LoginDetails } from '../../model/login-details.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: environment.httpHeaders,
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _user?: User;
    private readonly _router: Router;
    private readonly _http: HttpClient;

    constructor(router: Router,
                http: HttpClient) {
      this._router = router;
      this._http = http;
    }

    loadDefault(): Promise<boolean> {
        let promise = new Promise<boolean>((resolve, reject) => {
            this._http.get<User>(environment.backendUrl + 'user', httpOptions)
                      .subscribe(user => {
                                     this._user = user;
                                     resolve(true);
                                 },
                                 err => {
                                     this._user = undefined;
                                     resolve(true);
                                 });
        });
        return promise;
    }

    isLoggedIn(): boolean {
        return this._user !== undefined;
    }

    get user(): User {
        return this._user
    }

    updateUser(newDetails: User): void {
        this._http.post<User>(environment.backendUrl + 'updateUser',
                              newDetails, httpOptions)
                  .subscribe((user: User) => {
                        this._user = newDetails;
                   });
    }

    login(loginDetails: LoginDetails): void {
        this._http.post<User>(environment.backendUrl + 'login',
                              loginDetails, httpOptions)
                  .subscribe((user: User) => {
                        this._user = user;
                        this._router.navigate(['']);
                   });
    }

    logout(): void {
        this._http.post<User>(environment.backendUrl + 'logout', null, {...httpOptions, ...{ observe: 'response'}})
                  .subscribe(resp => {
                      if (resp.status == 200) {
                          this._user = undefined;
                          this._router.navigate(['login']);
                      }
                  });
    }
}
