import {NgModule} from "@angular/core";
import {ReceipelistComponent} from "./receipe/receipelist/receipelist.component";
import {ReceipeitemComponent} from "./receipe/receipelist/receipeitem/receipeitem.component";
import {ReceipeComponent} from "./receipe/receipe.component";
import {ReceipedetailComponent} from "./receipe/receipedetail/receipedetail.component";
import {ReceipeStartComponent} from "./receipe/receipe-start/receipe-start.component";
import {ReceipeeditComponent} from "./receipe/receipeedit/receipeedit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipeRouterModule} from "./recipe-router.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations:[
    ReceipeComponent,
    ReceipelistComponent,
    ReceipedetailComponent,
    ReceipeitemComponent,
    ReceipeStartComponent,
    ReceipeeditComponent,
  ],

  imports:[
    CommonModule,
    ReactiveFormsModule,
    RecipeRouterModule,
    SharedModule
  ]
})
export class RecipeModule{

}
