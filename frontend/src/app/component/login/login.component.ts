import { Component } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { LoginDetails } from "../../model/login-details.model";
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private readonly _userService: UserService;

    constructor(private userService: UserService) {
        this._userService = userService;
    }

    emailBox: FormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordBox: FormControl = new FormControl('', [Validators.required]);

    getEmailValidationMessage(): String {
        if (this.emailBox.hasError('required')) {
            return 'You must enter a value';
        }

        return this.emailBox.hasError('email') ? 'Not a valid email' : '';
    }

    getPasswordValidationMessage(): String {
        return this.passwordBox.hasError('required') ? 'You must enter a value' : '';
    }

    anyInvalid(): boolean {
        return this.passwordBox.invalid || this.emailBox.invalid;
    }

    login(): void {
        this._userService.login(new LoginDetails({email: this.emailBox.value, password: this.passwordBox.value}))
    }
}