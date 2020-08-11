import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalCasesComponent } from './criminal-cases.component';

describe('CriminalCasesComponent', () => {
  let component: CriminalCasesComponent;
  let fixture: ComponentFixture<CriminalCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
