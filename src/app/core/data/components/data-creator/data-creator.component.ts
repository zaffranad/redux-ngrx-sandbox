import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../shared/app.reducer';
import { Observable } from 'rxjs';
import { Data } from '../../model/data';
import { addMarket, addSector } from '../../actions/sector.actions';
import { error } from 'util';

@Component({
  selector: 'app-data-creator',
  templateUrl: './data-creator.component.html',
  styleUrls: ['./data-creator.component.scss']
})
export class DataCreatorComponent implements OnInit {
  @Input()
  type: string;

  private data$: Observable<Data[]>;
  newDataId: string;
  newDataName: string;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    let selectOperator;
    switch (this.type) {
      case 'sector':
        selectOperator = select((state: AppState) => state.sectorState.sectors);
        break;
      case 'market':
        selectOperator = select((state: AppState) => state.sectorState.markets);
        break;
      default:
        throw error('not implemented');
    }

    this.data$ = this.store.pipe(selectOperator);
  }

  addData() {
    let action;
    switch (this.type) {
      case 'sector':
        action = addSector({payload: {id: this.newDataId, name: this.newDataName}});
        break;
      case 'market':
        action = addMarket({payload: {id: this.newDataId, name: this.newDataName}});
        break;
      default:
        throw error('not implemented');
    }

    this.store.dispatch(action);
  }

  onSubmit() {
    this.addData();
  }
}
