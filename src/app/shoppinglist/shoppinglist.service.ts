import {Ingredeints} from "../shared/app.model.ingredeints";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs/internal/Subject";

export class ShoppinglistService{

  public editEvent = new Subject<number>()

 private ingredeints:Ingredeints[] = [ new Ingredeints("Mango", 2) ,
    new Ingredeints("milk",1)

  ];

   ingreDeintsChanged = new EventEmitter<Ingredeints[]>();

  addIngredeint(name:string,quantity:number){


    this.ingredeints.push(new Ingredeints(name,quantity))
    //this.ingreDeintsChanged.emit(this.ingredeints)
    this.ingreDeintsChanged.emit(this.ingredeints.slice())

  }

  getIngredeintArray(){

    return this.ingredeints.slice();
  }

  getIngredeintByIndex(index:number){

    return this.ingredeints[index]
  }

  editIngredeint(index:number,ingredeint:Ingredeints){

    this.ingredeints[index] = ingredeint
    this.ingreDeintsChanged.emit(this.ingredeints.slice())
  }

  deleteIngredeint(index:number){

    this.ingredeints.splice(index,1)
    this.ingreDeintsChanged.next(this.ingredeints.slice())

  }

}
