import {Component, Input, OnInit} from '@angular/core';
import {Receipe} from "../receipelist/receipe.model";
import {ShoppinglistService} from "../../shoppinglist/shoppinglist.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../receipe.service";



@Component({
  selector: 'app-receipedetail',
  templateUrl: './receipedetail.component.html',
  styleUrls: ['./receipedetail.component.css']
})
export class ReceipedetailComponent implements OnInit {

   recipeDetail:Receipe
    id:number

  constructor(private shoppingService:ShoppinglistService,
              private route:ActivatedRoute,
              private receipeService:RecipeService) { }

  addItemToShoppiKart(){

    for(let i=0;i<this.recipeDetail.getIngredeints().length ;i++){

      this.shoppingService.addIngredeint(this.recipeDetail.getIngredeints()[i].name,this.recipeDetail.getIngredeints()[i].quantity)
    }

  }

  ngOnInit() {

    /*let index = this.route.snapshot.params['id']
    this.recipeDetail =  this.receipeService.getReceipeByIndex(index)*/
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id']
       this.recipeDetail =  this.receipeService.getReceipeByIndex(this.id) // +transforms the string o/p to number
      }

    )}

  deleteRecipe(){
     this.receipeService.deleteRecipe(this.id)
  }
}
