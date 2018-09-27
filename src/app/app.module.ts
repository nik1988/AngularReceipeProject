import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {headerComponent} from "./header/header.component";
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipelistComponent } from './receipe/receipelist/receipelist.component';
import { ReceipedetailComponent } from './receipe/receipedetail/receipedetail.component';
import { ReceipeitemComponent } from './receipe/receipelist/receipeitem/receipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import {dropdowndirective} from "./shared/direcective/app.directive";
import {ShoppinglistService} from "./shoppinglist/shoppinglist.service";
import {AppRouterModule} from "./app-router.module";
import { ReceipeStartComponent } from './receipe/receipe-start/receipe-start.component';
import { ReceipeeditComponent } from './receipe/receipeedit/receipeedit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "./receipe/receipe.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ReceipeComponent,
    ReceipelistComponent,
    ReceipedetailComponent,
    ReceipeitemComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    dropdowndirective,
    ReceipeStartComponent,
    ReceipeeditComponent,


  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppinglistService,RecipeService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
