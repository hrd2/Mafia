import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user/user.service";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    readonly _userService: UserService;

    constructor(private userService: UserService) {
        this._userService = userService;
    }

    ngOnInit(): void { }
}