import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppinglistComponent} from "./shoppinglist/shoppinglist.component";
import {ReceipeComponent} from "./receipe/receipe.component";
import {ReceipedetailComponent} from "./receipe/receipedetail/receipedetail.component";
import {ReceipeStartComponent} from "./receipe/receipe-start/receipe-start.component";
import {ReceipeeditComponent} from "./receipe/receipeedit/receipeedit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuardService} from "./auth/auth-guard.service";


const appRoute:Routes= [

  {path:'shopping',component: ShoppinglistComponent},
  {path:'recipe',component:ReceipeComponent,children:[
      {path:'',component:ReceipeStartComponent},
      {path:'new',component:ReceipeeditComponent,canActivate:[AuthGuardService]},
      {path:':id',component:ReceipedetailComponent},
      {path:':id/edit',component:ReceipeeditComponent,canActivate:[AuthGuardService]}

   ]
},
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
