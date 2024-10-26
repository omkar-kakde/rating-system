export interface Rating {
  title: string;
  rating: number; // Ensure you have this property
  feedback: string;
  date: string; // Add date if needed
  status: string; // Add status if needed
  value?: number; // Optional value, if needed for star rating
}