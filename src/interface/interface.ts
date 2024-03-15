export interface User {
  id: string;
  username: string;
  password: string;
  fullname: string;
  email: string;
  phone: string;
  role: string;
  imageUrl: string;
}
export interface Place {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: string;
  location: string;
  price: number;
}

export interface AuthSlice {
  user: string | null;
  loading: boolean;
  error: string | null;
}
export interface Dashboard {
  id: string;
  date: string;
  totalBookings: number;
  totalUsers: number;
  totalPlaces: number;
  profit: number;
}
export interface Booking {
  id: string;
  userId: string;
  placeId: string;
  quantity: number;
  totalPrice: number;
  status: number;
  checkInTime: string;
  checkOutTime: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
}
