import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../../service/user/user.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    readonly _userService: UserService;
    readonly _router: Router;

    constructor(matIconRegistry: MatIconRegistry,
                domSanitizer: DomSanitizer,
                userService: UserService,
                router: Router) {
        matIconRegistry.addSvgIcon('mafia', domSanitizer.bypassSecurityTrustResourceUrl('/assets/mafia.svg'));
        this._userService = userService
        this._router = router;
    }

}
