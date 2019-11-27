import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Market} from '../../model/market';
import {addMarket} from '../../model/actions/ref-data.actions';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  constructor(private store: Store<{ markets: Array<Market> }>) { }

  ngOnInit() {
  }

  onSubmit() {

    this.store.dispatch(addMarket())
  }
}
