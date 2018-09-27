import { Component, OnInit } from '@angular/core';
import {ShoppinglistService} from "./shoppinglist.service";
import {Ingredeints} from "../shared/app.model.ingredeints";


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],

})
export class ShoppinglistComponent implements OnInit {

  ingredeints:Ingredeints[]

  constructor(private service: ShoppinglistService) {


  }

    //this.ingredeints = this.service.ingreDeintsChanged.subscribe()


  ngOnInit() {

    console.log("ngononit called")

    this.ingredeints= this.service.getIngredeintArray()

     this.service.ingreDeintsChanged.subscribe( (ingredeint:Ingredeints[]) => this.ingredeints = ingredeint)

  }

  onEditIngredeint(index:number){
      this.service.editEvent.next(index)
  }


}
