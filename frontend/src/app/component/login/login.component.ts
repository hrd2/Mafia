import { Component } from '@angular/core';
import { UserService } from "../../service/user/user.service";
import { LoginDetails } from "../../model/login-details.model";
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private readonly _userService: UserService;

    constructor(userService: UserService,
                fb: FormBuilder) {
        this._userService = userService;
        this.loginForm = fb.group({
            email: this.emailBox
        });
    }

    emailBox: FormControl = new FormControl('', [Validators.required, Validators.email]);
    loginForm: FormGroup;

    getEmailValidationMessage(): String {
        if (this.emailBox.hasError('required')) {
            return 'You must enter a value';
        }

        return this.emailBox.hasError('email') ? 'Not a valid email' : '';
    }

    login(): void {
        this._userService.login({email: this.emailBox.value})
    }
}