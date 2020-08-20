import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Observable } from 'rxjs';
import { RecipeInfo } from '../models/recipe-info';

@Component({
  selector: 'nutrition-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss'],
})
export class RecipeInfoComponent implements OnInit {
  recipe$: Observable<RecipeInfo> = this.store.recipeInfoObs;

  constructor(private store: StoreService) {}

  ngOnInit(): void {}
}
