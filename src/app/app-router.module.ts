import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppinglistComponent} from "./shoppinglist/shoppinglist.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

const appRoute:Routes= [

  {path:'shopping',component: ShoppinglistComponent},
  {path:'',redirectTo:'recipe',pathMatch:'full'}, // path match not sure.
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent}

];
@NgModule({

    imports: [ RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
  })
export class AppRouterModule{

}
