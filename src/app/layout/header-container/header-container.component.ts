import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/app.reducer';
import { RouterService } from '../../router/services/router.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  currentRoute: string;

  constructor(
    private store: Store<AppState>,
    private routerService: RouterService
  ) {
  }

  ngOnInit() {
  }

  isActive(url: string) {
    return this.routerService.isCurrentUrl(url);
  }
}
