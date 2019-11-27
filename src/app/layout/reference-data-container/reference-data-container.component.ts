import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Market} from '../../model/market';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reference-data-container',
  templateUrl: './reference-data-container.component.html',
  styleUrls: ['./reference-data-container.component.css']
})
export class ReferenceDataContainerComponent implements OnInit {

  markets$: Observable<Array<Market>>;

  constructor(private store: Store<{ markets: Array<Market> }>) {
    this.markets$ = this.store.pipe(select('markets'));
  }

  ngOnInit() {
  }

}
