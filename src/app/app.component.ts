import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet for routing
import { FormsModule } from '@angular/forms'; // Import FormsModule for forms
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule if needed
import { StarRatingComponent } from './star-rating/star-rating.component'; // Import if used in the main template

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, ReactiveFormsModule], // Removed MyRatingsComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rating-management-system';
}
 