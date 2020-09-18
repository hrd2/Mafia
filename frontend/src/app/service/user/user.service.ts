import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    loggedIn: boolean;
    readonly _router: Router;

    constructor(router: Router) {
      this.loggedIn = false;
      this._router = router;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    login(): void {
        this.loggedIn = true;
        this._router.navigate(['']);
    }

    logout(): void {
        this.loggedIn = false;
        this._router.navigate(['login']);
    }

   redirectIfNotLoggedIn(): void {
      if (!this.isLoggedIn()) {
          this._router.navigate(['login']);
      }
   }
}
