import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, Result } from 'src/app/models/yahoo-finance-reponse';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent implements OnInit {
  marketSummary$: Observable<
    RootObject
  > = this.financeService.getMarketSummary();

  myWatchList: FormGroup;

  get myWatchListFormArr(): FormArray {
    return this.myWatchList.get('watchList') as FormArray;
  }

  /**
   *
   */
  constructor(private financeService: FinanceService, private fb: FormBuilder) {
    this.createMyWatchListForm();
  }

  ngOnInit(): void {}

  createMyWatchListForm() {
    this.myWatchList = this.fb.group({
      watchList: this.fb.array([]),
    });
  }

  watchListItem(summary: Result): FormGroup {
    return this.fb.group({
      fullExchangeName: [summary.fullExchangeName],
      regularMarketPrice: [summary.regularMarketPrice.fmt],
    });
  }

  addToMyWatchList(summary: Result) {
    this.myWatchListFormArr.push(this.watchListItem(summary));
  }

  removeWatchListItem(index: number) {
    this.myWatchListFormArr.removeAt(index);
  }
}
