import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
const appRoute:Routes= [
  {path:'',component:HomeComponent},
  {path:'recipe',loadChildren:'./recipe.module#RecipeModule'}
];
@NgModule({

    imports: [ RouterModule.forRoot(appRoute,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
  })
export class AppRouterModule{

}
