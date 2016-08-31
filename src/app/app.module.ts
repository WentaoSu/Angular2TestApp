import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './App.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';


@NgModule({
    declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeItemComponent, RecipeListComponent],
    imports: [BrowserModule],
    bootstrap:    [AppComponent],
    providers: []
})
export class AppModule { }
