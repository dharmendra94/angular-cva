import { Component } from '@angular/core';
import { FinanceService } from './services/finance.service';
import { Observable } from 'rxjs';
import { RootObject, Result } from './models/yahoo-finance-reponse';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cva';

  marketSummary$: Observable<RootObject> = this.financeService.getMarketSummary();

  myWatchList: FormGroup;

  get myWatchListFormArr(): FormArray {
    return this.myWatchList.get("watchList") as FormArray;
  }

  /**
   *
   */
  constructor(private financeService: FinanceService, private fb: FormBuilder) {
    this.createMyWatchListForm();
  }

  createMyWatchListForm() {
    this.myWatchList = this.fb.group({
      watchList: this.fb.array([])
    });
  }

  watchListItem(summary: Result): FormGroup {
    return this.fb.group({
      fullExchangeName: [summary.fullExchangeName],
      regularMarketPrice: [summary.regularMarketPrice.fmt]
    });
  }

  addToMyWatchList(summary: Result) {
    this.myWatchListFormArr.push(this.watchListItem(summary));
  }

  removeWatchListItem(index: number) {
    this.myWatchListFormArr.removeAt(index);
  }
}
