import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Market} from '../../model/market';
import {select, Store} from '@ngrx/store';
import {AppState, selectAllMarkets} from '../../model/reducers/ref-data.reducer';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  markets$: Observable<Market[]>;

  constructor(private store: Store<AppState>) {
    this.markets$ = this.store.pipe(
      select(selectAllMarkets),
      tap(() => console.log(this.markets$))
    );
  }

  ngOnInit() {
  }

}
