import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs';
import { RecipeInfo, Ingredient } from '../models/recipe-info';
import { slideUpAnimation } from '../animations/slideup-animations';

@Component({
  selector: 'nutrition-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
  animations: [slideUpAnimation],
})
export class RecipeInfoComponent implements OnInit {
  recipe$: Observable<RecipeInfo> = this.store.recipeInfoObs;

  constructor(private store: StoreService) {}

  ngOnInit(): void {}

  showIngredients(ingredients: Ingredient[]) {
    return ingredients.reduce(
      (prev, curr) => `${prev ? prev + ', ' : ''}${curr.name}`,
      ''
    );
  }
}
