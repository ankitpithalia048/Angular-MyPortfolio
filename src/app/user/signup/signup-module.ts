



export class SignUpModel {

    constructor(FistName: string, LastName: string, Email: any, UserName: any, Password:any) {
        this.FistName = FistName;
        this.LastName = LastName;
        this.UserName = UserName;
        this.Email = Email;
        this.Password=Password;
    }

    FistName: string;
    LastName: string;
    Email: any;
    UserName: string;
    Password: any;
}