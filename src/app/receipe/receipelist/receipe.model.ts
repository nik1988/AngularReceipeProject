import {Ingredeints} from "../../shared/app.model.ingredeints";

export class Receipe{

  name:string
  description:string
  imageurl:string
  ingredeints:Ingredeints[]


  constructor(name,description,imageurl,ingredeints){

    this.name = name;
    this.description = description;
    this.imageurl = imageurl;
    this.ingredeints = ingredeints;

  }

  getIngredeints(){

    return this.ingredeints.slice()
  }

}
