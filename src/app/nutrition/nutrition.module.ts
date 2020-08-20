import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { NutritionComponent } from './nutrition.component';
import { NutritionService } from './services/nutrition.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [NutritionComponent, RecipeInfoComponent],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  providers: [NutritionService, StoreService],
})
export class NutritionModule {}
