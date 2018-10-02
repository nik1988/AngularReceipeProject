import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppinglistComponent} from "./shoppinglist/shoppinglist.component";

const shoppingRoutes:Routes = [
  {path:'shopping',component: ShoppinglistComponent}
  ]
@NgModule({
  imports:[RouterModule.forChild(shoppingRoutes)],
  exports:[RouterModule]
})
export class ShoppingRouterModule{

}
