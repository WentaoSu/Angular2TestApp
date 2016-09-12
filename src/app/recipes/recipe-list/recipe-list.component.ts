import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Name1', 'Desc1', 'http://www.openwarp.com/pix/testimage_1.jpg', []),
    new Recipe('Name2', 'Desc2', 'http://www.ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Name1', 'Desc1', 'http://www.openwarp.com/pix/testimage_1.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
      this.recipeSelected.emit(recipe);
  }
}
