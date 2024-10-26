import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRatingComponent } from './submit-rating.component';

describe('SubmitRatingComponent', () => {
  let component: SubmitRatingComponent;
  let fixture: ComponentFixture<SubmitRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
