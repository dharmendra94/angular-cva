import { Injectable } from '@angular/core';
import { RootObject } from '../models/yahoo-finance-reponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpClient: HttpClient) { }

  private headers = {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "1a3ba61e67msh93aa04e00d07ea3p1f40c2jsnf0b92c88a4f3"
  };


  getMarketSummary(): Observable<RootObject> {
    return this.httpClient.get<RootObject>("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary", { headers: this.headers });
  }

}
