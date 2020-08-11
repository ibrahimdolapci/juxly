import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateLawComponent } from './real-estate-law.component';

describe('RealEstateLawComponent', () => {
  let component: RealEstateLawComponent;
  let fixture: ComponentFixture<RealEstateLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealEstateLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
