import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../../../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { Portfolio } from '../../model/portfolio';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { createPosition } from '../../actions/portfolios.actions';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit, OnDestroy {

  portfolio: Portfolio;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.pipe(
      select(state => state.portfolioState.viewedPortfolio),
      tap((portfolio) => {
        this.portfolio = portfolio;
      }),
      takeUntil(this.destroy$)
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
