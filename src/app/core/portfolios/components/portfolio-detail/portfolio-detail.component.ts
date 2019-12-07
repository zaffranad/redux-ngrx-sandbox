import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { Portfolio } from '../../model/portfolio';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { createPosition } from '../../actions/portfolios.actions';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  portfolio: Portfolio;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.pipe(
      select(state => state.portfolioState.viewedPortfolio),
      tap((portfolio) => {
        console.log(portfolio)
        this.portfolio = portfolio;
      })
    ).subscribe();
  }

  onNewPositionClick() {
    this.store.dispatch(createPosition({
        payload: {
          stockId: 'toto',
          portfolioName: 'Mid&Small',
          buyDate: '',
          buyPrice: 10,
          volume: 1200
        }
      })
    );
  }
}
