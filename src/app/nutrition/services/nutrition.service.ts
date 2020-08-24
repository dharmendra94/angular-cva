import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeAutocomplete } from '../models/recipe-autocomplete';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RecipeInfo } from '../models/recipe-info';

@Injectable()
export class NutritionService {
  private readonly api: string = environment.apiUrl;
  // private readonly apiHost: string = environment.nutritionApiHost;
  // private readonly apiKey: string = environment.nutritionServiceKey;

  constructor(private httpClient: HttpClient) {}

  getRecipeAutoComplete(
    query: string,
    records: number = 10
  ): Observable<RecipeAutocomplete[]> {
    return this.httpClient
      .get<RecipeAutocomplete[]>(
        `${this.api}recipes/autocomplete?query=${query}&number=${records}`
      )
      .pipe(catchError((error) => of([])));
  }

  getRecipeInfo(recipeId: number): Observable<RecipeInfo> {
    return this.httpClient
      .get<RecipeInfo>(`${this.api}recipes/${recipeId}/information`)
      .pipe(catchError((error) => of({} as RecipeInfo)));
  }
}
