import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/app.reducer';
import { PortfolioContainerComponent } from './layout/portfolio-container/portfolio-container.component';
import { DataContainerComponent } from './layout/data-container/data-container.component';
import { HeaderContainerComponent } from './layout/header-container/header-container.component';
import { RouterModule } from '@angular/router';
import { appRoutesMap } from './router/services/router.service';
import { PortfolioViewComponent } from './core/portfolios/components/portfolio-view/portfolio-view.component';
import { PortfolioCardComponent } from './core/portfolios/components/portfolio-card/portfolio-card.component';
import { PortfolioDetailComponent } from './core/portfolios/components/portfolio-detail/portfolio-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioContainerComponent,
    DataContainerComponent,
    HeaderContainerComponent,
    PortfolioViewComponent,
    PortfolioCardComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(
      [
        { path: appRoutesMap.get('PORTFOLIO').routePath, component: PortfolioContainerComponent },
        { path: appRoutesMap.get('DATA').routePath, component: DataContainerComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
