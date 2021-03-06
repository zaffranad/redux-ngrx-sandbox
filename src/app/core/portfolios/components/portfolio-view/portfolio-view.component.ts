import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { deletePortfolio, viewPortfolio } from '../../actions/portfolios.actions';
import { Portfolio } from '../../model/portfolio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.scss']
})
export class PortfolioViewComponent implements OnInit {

  portfolios$: Observable<Portfolio[]>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.portfolios$ = this.store.pipe(
      select(state => state.portfolioState.portfolios)
    );
  }

  delete(portfolio: Portfolio) {
    this.store.dispatch(deletePortfolio({ payload: { name: portfolio.name } }));
  }

  showDetails(portfolio: Portfolio) {
    this.store.dispatch(viewPortfolio({ payload: { name: portfolio.name } }));
  }
}
