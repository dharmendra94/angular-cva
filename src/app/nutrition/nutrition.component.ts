import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NutritionService } from './services/nutrition.service';
import { Observable } from 'rxjs';
import { RecipeAutocomplete } from './models/recipe-autocomplete';
import {
  debounceTime,
  switchMap,
  tap,
  finalize,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ThemePalette } from '@angular/material/core';
import { StoreService } from './services/store.service';
import { LoaderService } from '../services/loader.service';
import { animations as searchBarAnimations } from './animations/search-bar-animation';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss'],
  animations: [searchBarAnimations],
})
export class NutritionComponent implements OnInit {
  recipeAutoComplete: FormControl = new FormControl();
  recipeAutoComplete$: Observable<RecipeAutocomplete[]>;
  loading = false;
  spinnerColor: ThemePalette = 'primary';
  isInitial = true;

  constructor(
    private nutritionService: NutritionService,
    private store: StoreService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.onRecipeAutoCompleteValueChange();
  }

  recipeDisplayValue(recipe: RecipeAutocomplete): string {
    return recipe && recipe.title;
  }

  onRecipeSelect(selectedEvent: MatAutocompleteSelectedEvent): void {
    const selectedRecipe: RecipeAutocomplete = selectedEvent.option.value;
    this.isInitial = false;
    this.getRecipeInfo(selectedRecipe.id);
  }

  private onRecipeAutoCompleteValueChange(): void {
    this.recipeAutoComplete$ = this.recipeAutoComplete.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter((f) => f !== ''),
      tap(() => (this.loading = true)),
      switchMap((val) =>
        this.searchRecipes(val).pipe(finalize(() => (this.loading = false)))
      )
    );
  }

  private searchRecipes(query: string): Observable<RecipeAutocomplete[]> {
    return this.nutritionService.getRecipeAutoComplete(query);
  }

  private getRecipeInfo(recipeId: number): void {
    this.loaderService.showProgressBar();
    this.nutritionService
      .getRecipeInfo(recipeId)
      .pipe(finalize(() => this.loaderService.hideProgressBar()))
      .subscribe((recipeInfo) => this.store.updateRecipeInfo(recipeInfo));
  }
}
