import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { Portfolio } from '../../model/portfolio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  portolio$: Observable<Portfolio>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.portolio$ = this.store.pipe(
      select(state => state.portfolioState.viewedPortfolio)
    );
  }

}
