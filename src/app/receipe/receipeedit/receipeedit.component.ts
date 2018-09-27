import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../receipe.service";


@Component({
  selector: 'app-receipeedit',
  templateUrl: './receipeedit.component.html',
  styleUrls: ['./receipeedit.component.css']
})
export class ReceipeeditComponent implements OnInit {

  id:number
  editMode:boolean = false
  receipeForm:FormGroup
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(

      (param:Params)=>{
        this.id = +param['id']
        this.editMode = param['id'] != null //parama[<< dynamic parameter name>>] allways returns string
         this.initForm()
      }
    )

  }

  onSubmit(){

    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.receipeForm.value)
    }
    else{

      /*note that angular automatically converts the value to type recipe
        applicable in case of reactive forms,name in formcontrolname and name of variable in class should be same.
       */
      this.recipeService.addReceipe(this.receipeForm.value)

    }
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onCancel(){

    this.router.navigate(['../'],{relativeTo:this.route})

  }

  initForm(){

    let recipeName = ''
    let recipeDescription = ''
    let recipeImagePath = ''
    let recipeIngredeints = new FormArray([])

    if(this.editMode == true){

      let recipe = this.recipeService.getReceipeByIndex(this.id)
      recipeName = recipe.name
      recipeDescription = recipe.description
      recipeImagePath = recipe.imageurl

      if(recipe['ingredeints']) {

        for (let ingredeint  of recipe.ingredeints) {

          recipeIngredeints.push(new FormGroup({

              name: new FormControl(ingredeint.name,Validators.required),
              quantity: new FormControl(ingredeint.quantity,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

            })
          )
        }
      }

    }

    this.receipeForm = new FormGroup({
      name:new FormControl(recipeName,Validators.required),
      imageurl:new FormControl(recipeImagePath,Validators.required),
      description:new FormControl(recipeDescription,Validators.required),
      ingredeints:recipeIngredeints
    });
  }

  addIngredeint(){

    (<FormArray>this.receipeForm.get('ingredeints')).push(
      new FormGroup({
        name:new FormControl(null,Validators.required),
        quantity:new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])

      })
    )
  }

  onDeleteIngredeint(index:number){

    (<FormArray>this.receipeForm.get('ingredeints')).removeAt(index)
  }


}
