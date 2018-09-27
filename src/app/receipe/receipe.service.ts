import {Receipe} from "./receipelist/receipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredeints} from "../shared/app.model.ingredeints";

export class RecipeService{

  selectedRecipe = new EventEmitter<Receipe>();


  private receipes:Receipe[] = [

    new Receipe("Big Fat Burger",
      "testReceipeDescription",
      "https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Free-Burger-Image-PIC-WPB0013280.jpg",
      [
            new Ingredeints("BUN",2),
            new Ingredeints("CHESSE",1),
            new Ingredeints("PATTY",1)
      ]),


    new Receipe("Chessy Pizza",
      "testReceipeDescription1","" +
      "http://sohopizza.com/images/pizza.jpeg",

      [

        new Ingredeints("PIZZA BASE",1),
        new Ingredeints("CHEESE",1)

      ]
      )
  ];

  getRecipe(){
    return this.receipes
  }

  getReceipeByIndex(index:number):Receipe{

    return this.receipes[index]
  }

  addReceipe(recipe:Receipe){

    this.receipes.push(recipe)

  }

  updateRecipe(index:number,recipe:Receipe){

    this.receipes[index] = recipe
  }

  deleteRecipe(index:number){

    this.receipes.splice(index,1)

  }

  setRecipe(receipes:Receipe[]){
    this.receipes = receipes
}



}
