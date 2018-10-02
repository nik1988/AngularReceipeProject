import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthRouterModule} from "./auth-router.module";

@NgModule({
  declarations:[
    SignupComponent,
    SigninComponent
  ],
  imports:[FormsModule,CommonModule,AuthRouterModule]
})
export class AuthModule{

}
