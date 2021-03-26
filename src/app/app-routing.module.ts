import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { IntroComponent } from './user/intro/intro.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {
    path:"",component: IntroComponent
  },
  {
    path:"SignIn",component: SigninComponent
  },
  {
    path: "Home",component:IntroComponent
  },
  {
    path: "SignUp", component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
