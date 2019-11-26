import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDataContainerComponent } from './reference-data-container.component';

describe('ReferenceDataContainerComponent', () => {
  let component: ReferenceDataContainerComponent;
  let fixture: ComponentFixture<ReferenceDataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceDataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
