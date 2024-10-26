import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmitRatingComponent } from './submit-rating/submit-rating.component';
import { RatingManagementComponent } from './rating-management/rating-management.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
 // Import your MyRatingsComponent

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'submit-rating', component: SubmitRatingComponent },
  { path: 'star-rating', component: StarRatingComponent },
  { path: 'my-ratings', component: RatingManagementComponent },
  // Add your my-ratings route here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
