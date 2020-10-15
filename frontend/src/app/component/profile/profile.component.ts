import { Component } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { FormControl, Validators } from '@angular/forms';
import { User } from "../../model/user.model";

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    readonly _userService: UserService;
    displayNameBox: FormControl;

    constructor(userService: UserService) {
        this._userService = userService;
        this.displayNameBox = new FormControl(userService.user.displayName, [Validators.required]);
    }

    getDisplayNameValidationMessage(): String {
        return this.displayNameBox.hasError('required') ? 'You must enter a value' : '';
    }

    anyInvalid(): boolean {
        return this.displayNameBox.invalid;
    }

    update(): void {
        this._userService.updateUser({
            userId: this._userService.user.userId,
            displayName: this.displayNameBox.value,
            email: this._userService.user.email
        });
    }
}
