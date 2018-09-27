import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredeints} from "../../shared/app.model.ingredeints";
import {ShoppinglistService} from "../shoppinglist.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {

  constructor(private service:ShoppinglistService) { }

  private editMode:boolean = false;
  private editItem:Ingredeints
  private editIndex:number

  @ViewChild('form') form:NgForm

  ngOnInit() {

    this.service.editEvent.subscribe(

      (index:number) =>{
        this.editIndex = index
        this.editMode = true
        this.editItem = this.service.getIngredeintByIndex(index)
        this.form.setValue({
          name: this.editItem.name,
          amount:this.editItem.quantity
        })

      }
    )

  }

  onClearIngredeint(){

    this.form.reset()
    this.editMode = false
  }

  onDeleteIngredeint(){

    this.service.deleteIngredeint(this.editIndex)
    this.editMode = false
  }

  addIngredeints(form:NgForm){

    var name=form.value.name
    var amount = form.value.amount

    if(this.editMode){
      this.service.editIngredeint(this.editIndex,new Ingredeints(name,amount))
    }
    else {
      this.service.addIngredeint(name, amount)
    }

    this.editMode = false
    this.form.reset()
  }
}
