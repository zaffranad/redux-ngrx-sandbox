import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopContainerComponent } from './layout/top-container/top-container.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { StockCreationComponent } from './components/stock-creation/stock-creation.component';
import { StockContainerComponent } from './layout/stock-container/stock-container.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SectorCreationComponent } from './components/sector-creation/sector-creation.component';
import { PositionCreationComponent } from './components/position-creation/position-creation.component';
import { SectorContainerComponent } from './layout/sector-container/sector-container.component';
import { reducers } from './store/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    MainContainerComponent,
    StockCreationComponent,
    StockContainerComponent,
    StockContainerComponent,
    SectorCreationComponent,
    PositionCreationComponent,
    SectorContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
