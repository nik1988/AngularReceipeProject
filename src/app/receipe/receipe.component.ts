import { Component, OnInit } from '@angular/core';
import {Receipe} from "./receipelist/receipe.model";
import {RecipeService} from "./receipe.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css'],
  providers:[]
})
export class ReceipeComponent implements OnInit {

  receipes:Receipe[]
  recipeDetail:Receipe


  constructor(private recipeService:RecipeService,private router:Router){ }

  ngOnInit() {
    this.receipes = this.recipeService.getRecipe();
    this.recipeService.selectedRecipe.subscribe(
      (recipe:Receipe) => {
        //console.log("recipe info received  = " +recipe.name)
        this.recipeDetail = recipe}

    );
  }

  openEditPage(){
    this.router.navigate(['recipe/new'])
  }

}
