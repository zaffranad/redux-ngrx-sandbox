import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {addMarket} from '../../model/actions/ref-data.actions';
import {AppState} from '../../model/reducers/ref-data.reducer';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css']
})
export class CreationFormComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const action = {object: {id: 'llggh', name: 'lll'}};
    console.log('dispatch', action);

    this.store.dispatch(addMarket(action));
  }
}
