import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreasPageComponent } from './practice-areas.component';

describe('PracticeAreasPageComponent', () => {
  let component: PracticeAreasPageComponent;
  let fixture: ComponentFixture<PracticeAreasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeAreasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
