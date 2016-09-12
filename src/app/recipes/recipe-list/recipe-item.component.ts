import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../../shared/ingredient';

@Component({
  moduleId: module.id,
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  recipeId: number;
  constructor() { }

  ngOnInit() {
  }

}
