import { Injectable } from '@angular/core';
import { changeRoute } from '../actions/router.actions';
import { AppState } from '../../shared/app.reducer';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private currentRoute: string;

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(
        select(state => state.routerState.currentRoute),
        tap((route: string) => this.currentRoute = route)
      ).subscribe();
  }

  public updateRouterState(url: string) {
    this.store.dispatch(changeRoute({ route: url }));
  }

  public isCurrentUrl(url: string) {
    return this.currentRoute === url;
  }
}


export interface AppRoute {
  label: string;
  url: string;
  routePath: string;
}

export const appRoutesMap: Map<string, AppRoute> =
  new Map([
    ['PORTFOLIO', { label: 'portfolio', url: '/', routePath: '' }],
    ['DATA', { label: 'data', url: '/data', routePath: 'data' }]
  ]);
