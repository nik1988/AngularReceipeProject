import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {headerComponent} from "./header/header.component";
import {ShoppinglistService} from "./shoppinglist/shoppinglist.service";
import {AppRouterModule} from "./app-router.module";
import {RecipeService} from "./receipe/receipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {AuthService} from "./auth/auth.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shoppinglist.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";
import {LoggingInterceptor} from "./shared/logging.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    // Custom Feature module
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppinglistService,
    RecipeService,
    DataStorageService,
     AuthService,
    AuthGuardService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
