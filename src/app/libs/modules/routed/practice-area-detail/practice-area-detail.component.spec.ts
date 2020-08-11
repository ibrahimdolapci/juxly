import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreaDetailComponent } from './practice-area-detail.component';

describe('PracticeAreaDetailComponent', () => {
  let component: PracticeAreaDetailComponent;
  let fixture: ComponentFixture<PracticeAreaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeAreaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
