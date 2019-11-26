import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopContainerComponent } from './layout/top-container/top-container.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { CreationFormComponent } from './components/creation-form/creation-form.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ReferenceDataContainerComponent } from './layout/reference-data-container/reference-data-container.component';
import { StockContainerComponent } from './layout/stock-container/stock-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    MainContainerComponent,
    CreationFormComponent,
    ItemComponent,
    ItemListComponent,
    ReferenceDataContainerComponent,
    StockContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
