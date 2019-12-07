import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreatorComponent } from './stock-creator.component';

describe('StockCreatorComponent', () => {
  let component: StockCreatorComponent;
  let fixture: ComponentFixture<StockCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
