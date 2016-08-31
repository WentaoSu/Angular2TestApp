import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[];
  recipe = new Recipe('Name1', 'Desc1', 'http://www.openwarp.com/pix/testimage_1.jpg');
  constructor() { }

  ngOnInit() {
  }

}
