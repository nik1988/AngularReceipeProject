import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {RecipeService} from "../receipe/receipe.service";
import {Receipe} from "../receipe/receipelist/receipe.model";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataStorageService{

constructor(private httpClientService:HttpClient,
            private recipeService:RecipeService,
            private authService:AuthService){
}

saveRecipeData(){

  return this.httpClientService.put('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json?auth='+this.authService.getToken(),
    this.recipeService.getRecipe())
}

getRecipeData(){

/*this.httpClientService.get('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json?auth='+this.authService.getToken())
  .pipe(map(
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
)*/

this.httpClientService.get<Receipe[]>('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json?auth=' +
  ''+this.authService.getToken()).pipe(map
  (
  (recipes)=>{

    for(let recipe of recipes){

      if(!recipe['ingredeints']){
        recipe['ingredeints']= [];
      }
    }
    return recipes
  }
  )
).subscribe(
  (recipes:Receipe[]) =>{
    this.recipeService.setRecipe(recipes)})
}

}
