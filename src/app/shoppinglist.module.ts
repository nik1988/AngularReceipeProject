import {NgModule} from "@angular/core";
import {ShoppinglisteditComponent} from "./shoppinglist/shoppinglistedit/shoppinglistedit.component";
import {ShoppinglistComponent} from "./shoppinglist/shoppinglist.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ShoppingRouterModule} from "./shopping-router.module";

@NgModule({

  declarations:[
    ShoppinglistComponent,
    ShoppinglisteditComponent
  ],
  imports:[FormsModule,CommonModule,ShoppingRouterModule]

})
export class ShoppingListModule{

}
