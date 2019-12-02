import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app.reducer';
import { createPortfolio } from '../../core/portfolios/actions/portfolios.actions';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss']
})
export class PortfolioContainerComponent implements OnInit {

  private newPortfolioName: string;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(createPortfolio({payload: {name: this.newPortfolioName}}));
  }
}
