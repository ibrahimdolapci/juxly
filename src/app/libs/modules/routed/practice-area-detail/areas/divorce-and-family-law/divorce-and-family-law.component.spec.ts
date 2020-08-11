import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivorceAndFamilyLawComponent } from './divorce-and-family-law.component';

describe('DivorceAndFamilyLawComponent', () => {
  let component: DivorceAndFamilyLawComponent;
  let fixture: ComponentFixture<DivorceAndFamilyLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivorceAndFamilyLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivorceAndFamilyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
