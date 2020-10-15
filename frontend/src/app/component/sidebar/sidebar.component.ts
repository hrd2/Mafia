import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../service/user/user.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    readonly _userService: UserService;
    readonly _router: Router;

    constructor(userService: UserService,
                router: Router) {
        this._userService = userService;
        this._router = router;
    }

}
