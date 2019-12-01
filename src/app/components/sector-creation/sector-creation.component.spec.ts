import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorCreationComponent } from './sector-creation.component';

describe('SectorCreationComponent', () => {
  let component: SectorCreationComponent;
  let fixture: ComponentFixture<SectorCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
