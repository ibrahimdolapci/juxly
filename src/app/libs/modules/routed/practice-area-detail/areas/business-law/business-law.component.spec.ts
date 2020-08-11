import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLawComponent } from './business-law.component';

describe('BusinessLawComponent', () => {
  let component: BusinessLawComponent;
  let fixture: ComponentFixture<BusinessLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
