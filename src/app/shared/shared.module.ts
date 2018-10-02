import {NgModule} from "@angular/core";
import {dropdowndirective} from "./direcective/app.directive";
import {CommonModule} from "@angular/common";

@NgModule({

  declarations:[dropdowndirective],
  exports:[CommonModule,dropdowndirective]
})
export class SharedModule{

}
