import { Component } from '@angular/core';
import { UserService } from "../../service/user/user.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    readonly _userService: UserService;

    constructor(private userService: UserService) {
        this._userService = userService;
    }

}
