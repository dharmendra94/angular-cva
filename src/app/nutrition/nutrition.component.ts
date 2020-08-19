import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NutritionService } from './services/nutrition.service';
import { Observable } from 'rxjs';
import { RecipeAutocomplete } from './models/recipe-autocomplete';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
})
export class NutritionComponent implements OnInit {
  recipeAutoComplete: FormControl = new FormControl();
  recipeAutoComplete$: Observable<RecipeAutocomplete[]>;

  constructor(private nutritionService: NutritionService) {}

  ngOnInit(): void {
    this.onRecipeAutoCompleteValueChange();
  }

  recipeDisplayValue(recipe: RecipeAutocomplete): string {
    return recipe.title;
  }

  onRecipeSelect(selectedEvent: MatAutocompleteSelectedEvent): void {
    console.log(selectedEvent);
  }

  private onRecipeAutoCompleteValueChange(): void {
    this.recipeAutoComplete$ = this.recipeAutoComplete.valueChanges.pipe(
      debounceTime(1000),
      switchMap((val) => this.searchRecipes(val))
    );
  }

  private searchRecipes(query: string): Observable<RecipeAutocomplete[]> {
    return this.nutritionService.getRecipeAutoComplete(query);
  }
}
