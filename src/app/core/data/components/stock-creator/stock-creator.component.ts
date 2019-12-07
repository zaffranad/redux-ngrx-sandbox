import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { Data } from '../../model/data';
import { Stock } from '../../../portfolios/model/stock';

@Component({
  selector: 'app-stock-creator',
  templateUrl: './stock-creator.component.html',
  styleUrls: ['./stock-creator.component.scss']
})
export class StockCreatorComponent implements OnInit {
  markets: Data[];
  sectors: Data[];
  stocks: Stock[];

  stockId: string;
  stockName: string;
  stockSector: string;
  stockMarket: string;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(state => state.sectorState),
      tap(state => {
        this.markets = state.markets;
        this.sectors = state.sectors;
        this.stocks = state.stocks;
      })
    ).subscribe();
  }

  onSubmit() {
    console.log(this.stockMarket, this.stockId, this.stockName, this.stockSector);
  }
}
