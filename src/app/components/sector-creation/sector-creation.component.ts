import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addSector } from '../../store/actions/sector.actions';
import { Sector } from '../../model/sector';
import { AppState } from '../../store/reducers/app.reducer';

@Component({
  selector: 'app-sector-creation',
  templateUrl: './sector-creation.component.html',
  styleUrls: ['./sector-creation.component.css']
})
export class SectorCreationComponent implements OnInit {

  private sectors$: Observable<Array<Sector>>;
  id: string;
  name: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.sectors$ = this.store.pipe(
      select(state => state.sectorState.sectors)
    );
  }

  onSubmit() {
    this.store.dispatch(addSector(this.toActionPayload()));
  }

  private toActionPayload() {
    return {payload: {id: this.id, name: this.name}};
  }
}
