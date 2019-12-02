import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContainerComponent } from './portfolio-container.component';

describe('PortfolioContainerComponent', () => {
  let component: PortfolioContainerComponent;
  let fixture: ComponentFixture<PortfolioContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
