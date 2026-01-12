import { User } from './auth';

export interface AuthSuccessMessage {
  type: 'AUTH_SUCCESS';
  sessionId: string | null;
  user: User | null;
  accessToken: string | null;
}

export interface BookingSuccessMessage {
  type: 'BOOKING_SUCCESS';
  bookingId: string;
  booking: any;
}

export interface ErrorMessage {
  type: 'ERROR';
  message: string;
  code?: string;
}

export type PostMessage = AuthSuccessMessage | BookingSuccessMessage | ErrorMessage;

