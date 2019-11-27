import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Market } from '../../model/market';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-reference-data-container',
  templateUrl: './reference-data-container.component.html',
  styleUrls: ['./reference-data-container.component.css']
})
export class ReferenceDataContainerComponent implements OnInit {

  markets$: Observable<Market[]>;

  constructor(private store: Store<{ markets: Market[] }>) {
    this.markets$ = this.store.pipe(
      select('markets')
      , tap(() => console.log(this.markets$ ))
    );
  }

  ngOnInit() {
  }

}
