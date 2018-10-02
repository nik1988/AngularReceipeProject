import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReceipeStartComponent} from "./receipe/receipe-start/receipe-start.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {ReceipeComponent} from "./receipe/receipe.component";
import {ReceipedetailComponent} from "./receipe/receipedetail/receipedetail.component";
import {ReceipeeditComponent} from "./receipe/receipeedit/receipeedit.component";

const recipeRoutes:Routes = [
  {
  path:'recipe',component:ReceipeComponent,children:[
      {path:'',component:ReceipeStartComponent},
      {path:'new',component:ReceipeeditComponent,canActivate:[AuthGuardService]},
      {path:':id',component:ReceipedetailComponent},
      {path:':id/edit',component:ReceipeeditComponent,canActivate:[AuthGuardService]}
    ]},
  {path:'',redirectTo:'recipe',pathMatch:'full'} // path match not sure.
]
@NgModule({
  imports:[RouterModule.forChild(recipeRoutes)], // we must forChild in case routes are part of feature module
  exports:[RouterModule]
})
export class RecipeRouterModule{

}
