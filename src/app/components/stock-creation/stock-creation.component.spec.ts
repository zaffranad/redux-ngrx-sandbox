import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCreationComponent } from './stock-creation.component';

describe('CreationFormComponent', () => {
  let component: StockCreationComponent;
  let fixture: ComponentFixture<StockCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
