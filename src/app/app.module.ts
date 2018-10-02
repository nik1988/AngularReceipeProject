import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {headerComponent} from "./header/header.component";
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import {ShoppinglistService} from "./shoppinglist/shoppinglist.service";
import {AppRouterModule} from "./app-router.module";
import {FormsModule} from "@angular/forms";
import {RecipeService} from "./receipe/receipe.service";
import {HttpModule} from "@angular/http";
import {DataStorageService} from "./shared/data-storage.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {RecipeModule} from "./recipe.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpModule,
    RecipeModule, // Custom Feature module
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
