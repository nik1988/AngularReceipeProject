import {Component, EventEmitter, Output} from '@Angular/core'
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector:'Recipe-Header',
  templateUrl:'./header.component.html'

})

export class headerComponent{

  constructor(private dataService:DataStorageService,private authService:AuthService){

  }

  saveRecipes(){
    this.dataService.saveRecipeData().subscribe(
      (response) =>{console.log(response)}
    )
  }

  fetchData(){
    this.dataService.getRecipeData()

  }
  onLogOut(){
    this.authService.logOut()
  }

}

