import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
const appRoute:Routes= [
  {path:'',component:HomeComponent},
  {path:'recipe',loadChildren:'./recipe.module#RecipeModule'}
];
@NgModule({

    imports: [ RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
  })
export class AppRouterModule{

}
