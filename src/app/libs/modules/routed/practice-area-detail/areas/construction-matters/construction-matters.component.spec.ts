import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMattersComponent } from './construction-matters.component';

describe('ConstructionMattersComponent', () => {
  let component: ConstructionMattersComponent;
  let fixture: ComponentFixture<ConstructionMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
