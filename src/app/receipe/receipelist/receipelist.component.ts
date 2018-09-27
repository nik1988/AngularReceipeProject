import {Component,
        Input,
        OnInit} from '@angular/core';

import {Receipe} from "./receipe.model";
import {RecipeService} from "../receipe.service";

@Component({
  selector: 'app-receipelist',
  templateUrl: './receipelist.component.html',
  styleUrls: ['./receipelist.component.css']
})
export class ReceipelistComponent implements OnInit {

 @Input() receipe:Receipe
  @Input()itemIndex:number


  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }



}
