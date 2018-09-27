import {Component, EventEmitter, Output} from '@Angular/core'
import {DataStorageService} from "../shared/data-storage.service";

@Component({
  selector:'Recipe-Header',
  templateUrl:'./header.component.html'

})

export class headerComponent{

  constructor(private dataService:DataStorageService){

  }

  saveRecipes(){
    this.dataService.saveRecipeData().subscribe(

      (response) =>{console.log(response)}
    )
  }

  fetchData(){
    this.dataService.getRecipeData()

  }

}

