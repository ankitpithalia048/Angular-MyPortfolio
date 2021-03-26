import { Injectable } from '@angular/core';
import { SignUpModel } from './signup/signup-module';

@Injectable({
  providedIn: 'root',
})
export class SignupServiceService {
  constructor() {
    let i: number;
  }

  registerUser(event: any, i: number): SignUpModel[] {
    let userregister = new Array<SignUpModel>();
    let u = new SignUpModel(
      event.firstName,
      event.lastName,
      event.email,
      event.username,
      event.password
    );
    userregister.push(u);
    i = parseInt(localStorage.getItem("index")|| '{}');
    if (localStorage.getItem('index') == null) {
      localStorage.setItem('index', '0');

      i = 0;
    }
    
    localStorage.setItem('userName' + i, event.userName);
    localStorage.setItem('Password' + i, event.password);
    ++i;
    console.log("received i = "+i);
    localStorage.setItem('index', i.toString());

    

    return userregister;
  }
}
