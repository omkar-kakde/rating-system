import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingService } from '../rating.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Router } from '@angular/router'; // Correct import for Angular Router

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  totalRatings: number = 0;
  pendingRatings: number = 0;
  submittedRatings: number = 0;
  ratings: any[] = [];
  hasRatings: boolean = false;
  notifications: any[] = [];

  constructor(private ratingService: RatingService, private router: Router) {} // Inject Router

  ngOnInit() {
    this.updateRatings();
    this.notifications = this.ratingService.getNotifications();
  }

  updateRatings() {
    this.ratings = this.ratingService.getRatings();
    this.hasRatings = this.ratings.length > 0;

    this.totalRatings = this.ratings.length;
    this.pendingRatings = this.ratings.filter(rating => rating.status.toLowerCase() === 'pending').length;
    this.submittedRatings = this.ratings.filter(rating => rating.status.toLowerCase() === 'submitted').length;
  }

  markAsRead(notificationId: number) {
    this.ratingService.markAsRead(notificationId);
  }

  // Navigate to My Ratings
  goToMyRatings() {
    this.router.navigate(['/my-ratings']);
  }

  // Navigate to Submitted Ratings
  goToSubmittedRatings() {
    this.router.navigate(['/submit-rating']);
  }
}
