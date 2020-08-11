import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalMarketComponent } from './capital-market.component';

describe('CapitalMarketComponent', () => {
  let component: CapitalMarketComponent;
  let fixture: ComponentFixture<CapitalMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
