export class LoginDetails {
    email: String;
    password: String;

    constructor(details: { email: String;
                           password: String; }) {
        this.email = details.email;
        this.password = details.password;
    }
}
