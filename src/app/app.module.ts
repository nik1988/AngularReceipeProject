import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {headerComponent} from "./header/header.component";
import {ShoppinglistService} from "./shoppinglist/shoppinglist.service";
import {AppRouterModule} from "./app-router.module";
import {RecipeService} from "./receipe/receipe.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {RecipeModule} from "./recipe.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shoppinglist.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
    // Custom Feature module
    RecipeModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppinglistService,
    RecipeService,
    DataStorageService,
     AuthService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
