import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { NutritionComponent } from './nutrition.component';
import { NutritionService } from './services/nutrition.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NutritionComponent],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatGridListModule,
  ],
  providers: [NutritionService],
})
export class NutritionModule {}
