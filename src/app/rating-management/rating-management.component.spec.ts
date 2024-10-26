import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingManagementComponent } from './rating-management.component';

describe('RatingManagementComponent', () => {
  let component: RatingManagementComponent;
  let fixture: ComponentFixture<RatingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
