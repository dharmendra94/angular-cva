import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RecipeAutocomplete } from '../models/recipe-autocomplete';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class NutritionService {
  private readonly api: string = environment.apiUrl;
  private readonly apiHost: string = environment.nutritionApiHost;
  private readonly apiKey: string = environment.nutritionServiceKey;

  constructor(private httpClient: HttpClient) {}

  getRecipeAutoComplete(
    query: string,
    records: number = 10
  ): Observable<RecipeAutocomplete[]> {
    // const qu = { query, number: records };
    // const req = JSON.stringify(qu);
    return this.httpClient
      .get<RecipeAutocomplete[]>(
        `${this.api}recipes/autocomplete?query=${query}&number=${records}`,
        {
          headers: {
            'x-rapidapi-host': this.apiHost,
            'x-rapidapi-key': this.apiKey,
            useQueryString: 'true',
          },
        }
      )
      .pipe(catchError((error) => of([])));
  }
}
