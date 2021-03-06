import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, RouterStateSnapshot, CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { LoginComponent } from '../component/login/login.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';

import { UserService } from "../service/user/user.service";

@Injectable()
export class RequireLogin implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['login']);
        }
        return true;
    }
}

@Injectable()
export class RequireGuest implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        if (this.userService.isLoggedIn()) {
            this.router.navigate(['']);
        }
        return true;
    }
}

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate:[RequireLogin]},
    { path: 'login', component: LoginComponent, canActivate:[RequireGuest] },
    { path: 'profile', component: ProfileComponent, canActivate:[RequireLogin] },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }