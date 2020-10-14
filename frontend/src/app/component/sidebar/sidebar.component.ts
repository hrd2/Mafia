import { Component } from '@angular/core';
import { UserService } from "../../service/user/user.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  readonly _userService: UserService;

  constructor(private userService: UserService) {
     this._userService = userService
  }

}
