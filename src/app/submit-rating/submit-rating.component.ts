import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RatingService } from '../rating.service';

@Component({  
  selector: 'app-submit-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-rating.component.html',
  styleUrls: ['./submit-rating.component.scss']
})
export class SubmitRatingComponent {
  constructor(private ratingService: RatingService, private router: Router) {}

  onSubmit(form: any) {
    const newRating = {
      title: form.value.sessionTitle,
      rating: form.value.ratingValue, // Changed from value to rating
      feedback: form.value.feedback,
      date: new Date().toISOString(), // Store the current date
      status: 'pending' // Default status
    };

    this.ratingService.addRating(newRating); // Add the new rating
    this.router.navigate(['/dashboard']); // Navigate to the dashboard
    console.log("yes it's working");
  }
}
