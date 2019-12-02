import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { RouterService } from './router/services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  componentLifeCycle$ = new Subject<void>();

  constructor(
    private router: Router,
    private routerService: RouterService
  ) {

  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e && e.constructor.name === 'NavigationEnd'),
        tap((e: RouterEvent) => this.routerService.updateRouterState(e.url)),
        takeUntil(this.componentLifeCycle$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.componentLifeCycle$.next();
    this.componentLifeCycle$.complete();
  }


}
