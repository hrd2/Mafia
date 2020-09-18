import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../service/user/user.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  readonly _userService: UserService;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private userService: UserService) {
      this.matIconRegistry.addSvgIcon('mafia', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/mafia.svg'));
      this._userService = userService
  }

  ngOnInit(): void {
  }

}
