import {Injectable} from "@angular/core";
import {RecipeService} from "../receipe/receipe.service";
import {Receipe} from "../receipe/receipelist/receipe.model";
import {map} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable()
export class DataStorageService{

constructor(private httpClientService:HttpClient,
            private recipeService:RecipeService,
            private authService:AuthService){
}

saveRecipeData(){

/*
  return this.httpClientService.put('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json',
    this.recipeService.getRecipe(),
    {
        observe:'response',
        params:new HttpParams().set('auth',this.authService.getToken()),
        reportProgress:true
    })
*/

//creating custom request to monitor report progress event

  const req = new HttpRequest("PUT",'https://ng-recipe-book-e54fd.firebaseio.com/recipes.json',
    this.recipeService.getRecipe(),
    {
    params:new HttpParams().set('auth',this.authService.getToken()),
    reportProgress:true

  })

  return this.httpClientService.request(req)
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

this.httpClientService.get<Receipe[]>('https://ng-recipe-book-e54fd.firebaseio.com/recipes.json',
  {
      observe:'body',
      params:new HttpParams().set('auth',this.authService.getToken()),
}).pipe(map
  (
  (recipes)=>{
    console.log(recipes)
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
