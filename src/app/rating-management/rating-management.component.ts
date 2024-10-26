import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RatingService } from '../rating.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Rating } from '../rating.model'; // Ensure you import the Rating interface

@Component({
  selector: 'app-rating-management',
  standalone: true,
  imports: [CommonModule, FormsModule, StarRatingComponent],
  templateUrl: './rating-management.component.html',
  styleUrls: ['./rating-management.component.scss'],
})
export class RatingManagementComponent {
  newRating: Rating = {
    title: '',
    rating: 0,
    feedback: '',
    date: '',
    status: '',
  };

  ratings: Rating[] = [];
  editMode: boolean[] = [];
  sortOrder: string = 'highest'; // Default sort order
  selectedRating: Rating | undefined; // Change type to undefined instead of null
  detailsVisible: boolean = false; // Flag to manage visibility

  constructor(private ratingService: RatingService, private router: Router) {
    this.loadRatings();
  }

  loadRatings() {
    this.ratings = this.ratingService.getRatings();
    this.editMode = new Array(this.ratings.length).fill(false);
    this.applySorting(); // Sort ratings after loading
  }

  addRating() {
    const ratingWithDate: Rating = {
      ...this.newRating,
      date: new Date().toISOString(),
      status: 'pending',
    };

    this.ratingService.addRating(ratingWithDate);
    this.newRating = { title: '', rating: 0, feedback: '', date: '', status: '' };
    this.loadRatings();
  }

  applySorting() {
    if (this.sortOrder === 'highest') {
      this.ratings.sort((a, b) => b.rating - a.rating); // Sort by highest rating
    } else {
      this.ratings.sort((a, b) => a.rating - b.rating); // Sort by lowest rating
    }
  }

  viewDetails(rating: Rating) {
    console.log('Viewing details for:', rating);
    this.selectedRating = rating; // Set the selected rating
    this.detailsVisible = true; // Show details
  }

  closeDetails() {
    this.detailsVisible = false; // Hide details
    this.selectedRating = undefined; // Clear selected rating
  }

  deleteRating(rating: Rating) {
    this.ratingService.deleteRating(rating);
    this.loadRatings();
    
  }

  toggleEditMode(index: number) {
    this.editMode[index] = !this.editMode[index];
  }

  saveFeedback(rating: Rating, index: number) {
    this.editMode[index] = false;
    this.ratingService.updateRating(rating);
  }

  cancelEdit(index: number) {
    this.editMode[index] = false;
  }
}
