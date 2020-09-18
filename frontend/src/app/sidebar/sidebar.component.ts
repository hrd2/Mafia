import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user/user.service";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  readonly _userService: UserService;

  constructor(private userService: UserService) {
     this._userService = userService
  }

  ngOnInit(): void {
  }

}
