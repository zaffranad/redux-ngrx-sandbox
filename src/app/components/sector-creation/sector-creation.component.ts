import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { sectorSelectAll } from '../../model/reducers/sector.reducer';
import { Observable } from 'rxjs';
import { addSector } from '../../model/actions/sector.actions';
import { Sector } from '../../model/sector';

@Component({
  selector: 'app-sector-creation',
  templateUrl: './sector-creation.component.html',
  styleUrls: ['./sector-creation.component.css']
})
export class SectorCreationComponent implements OnInit {

  private sectors$: Observable<Array<Sector>>;
  id: string;
  name: string;

  constructor(private store: Store<Sector>) {
  }

  ngOnInit() {
    this.sectors$ = this.store.pipe(
      select(sectorSelectAll)
    );
  }

  onSubmit() {
    this.store.dispatch(addSector({payload: {id: this.id, name: this.name}}));
  }

}
