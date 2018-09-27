import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {RecipeService} from "../receipe/receipe.service";
import {Receipe} from "../receipe/receipelist/receipe.model";
import {map} from "rxjs/operators";

@Injectable()
export class DataStorageService{

constructor(private httpService:Http,private recipeService:RecipeService){
}

saveRecipeData(){

  return this.httpService.put('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json',
    this.recipeService.getRecipe())
}

getRecipeData(){

this.httpService.get('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json').pipe(map(
    (response:Response)=>{

    const recipes:Receipe[] = response.json();
    for(let recipe of recipes){

      if(!recipe['ingredeints']){
        recipe['ingredeints']= [];
      }
    }
    return recipes
    }
    ))
  .subscribe(
  (recipes:Receipe[]) =>{
    this.recipeService.setRecipe(recipes)
  }
)
}

}
