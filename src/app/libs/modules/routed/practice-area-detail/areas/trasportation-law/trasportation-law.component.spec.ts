import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportationLawComponent } from './trasportation-law.component';

describe('TrasportationLawComponent', () => {
  let component: TrasportationLawComponent;
  let fixture: ComponentFixture<TrasportationLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasportationLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasportationLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
