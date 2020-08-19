import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance/finance.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinanceRoutingModule } from './finance-routing.module';


@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class FinanceModule { }
