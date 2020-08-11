import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugOffenceComponent } from './drug-offence.component';

describe('DrugOffenceComponent', () => {
  let component: DrugOffenceComponent;
  let fixture: ComponentFixture<DrugOffenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugOffenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugOffenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
