import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nutrition',
    pathMatch: 'full',
  },
  {
    path: 'finance',
    loadChildren: () =>
      import('./finance/finance.module').then((m) => m.FinanceModule),
  },
  {
    path: 'nutrition',
    loadChildren: () =>
      import('./nutrition/nutrition.module').then((m) => m.NutritionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
