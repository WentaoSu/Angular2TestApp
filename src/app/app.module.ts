import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './App.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
    declarations: 
    [AppComponent, HeaderComponent, RecipesComponent,
     RecipeItemComponent, RecipeListComponent, RecipeDetailComponent,
      ShoppingListAddComponent, ShoppingListComponent, DropdownDirective],
    imports: [BrowserModule],
    bootstrap:    [AppComponent],
    providers: []
})
export class AppModule { }
