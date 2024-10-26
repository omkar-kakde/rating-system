import { Injectable } from '@angular/core';
import { Rating } from './rating.model';

interface Notification {
  id: number;
  message: string;
  date: Date;
  read: boolean;
}

@Injectable({
  providedIn: 'root' // Makes this service available app-wide
})
export class RatingService {
  updateRating(rating: any) {
    throw new Error('Method not implemented.');
  }

  deleteRating(rating: any) {
    throw new Error('Method not implemented.');
  }

  private ratings: Rating[] = [
    { title: 'Yoga Class', rating: 4.5, feedback: 'Great session!', date: '2024-10-12', status: 'Submitted' },
    { title: 'Web Development Workshop', rating: 5.0, feedback: 'Excellent content and presentation!', date: '2024-10-10', status: 'Submitted' },
    { title: 'Meditation Session', rating: 4.0, feedback: 'Very calming and informative.', date: '2024-10-15', status: 'Submitted' },
    { title: 'Fitness Bootcamp', rating: 3.5, feedback: 'Good workout, but could be more engaging.', date: '2024-10-20', status: 'Submitted' },
    { title: 'Cooking Class', rating: 4.8, feedback: 'Learned a lot of new recipes!', date: '2024-10-05', status: 'Submitted' },
    { title: 'Photography Workshop', rating: 4.2, feedback: 'Nice tips on composition and lighting.', date: '2024-10-08', status: 'Pending' },
    { title: 'Digital Marketing Seminar', rating: 3.9, feedback: 'Informative but a bit too long.', date: '2024-10-11', status: 'Submitted' },
    { title: 'Graphic Design Basics', rating: 4.6, feedback: 'Loved the hands-on approach!', date: '2024-10-14', status: 'Pending' },
  ];

  private notifications: Notification[] = [
    { id: 1, message: 'You have a new rating submission.', date: new Date(), read: false },
    { id: 2, message: 'Rating reminder: Submit your feedback for Session 3.', date: new Date(), read: false },
    { id: 3, message: 'Your rating for Session 2 has been reviewed.', date: new Date(), read: true }
  ];

  constructor() {}

  getRatings(): Rating[] {
    return this.ratings;
  }

  addRating(newRating: Rating): void {
    this.ratings.push(newRating);
  }

  // Fetch notifications
  getNotifications() {
    return this.notifications;
  }

  // Mark notification as read
  markAsRead(id: number) {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
    }
  }

  // Add a new notification
  addNotification(message: string) {
    const newNotification: Notification = {
      id: this.notifications.length + 1,
      message,
      date: new Date(),
      read: false
    };
    this.notifications.push(newNotification);
  }
}
