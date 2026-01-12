/**
 * Booking type definitions
 * To be expanded when booking functionality is implemented
 */

export interface Booking {
  id: string;
  [key: string]: any;
}

export interface BookingSlot {
  id: string;
  startTime: string;
  endTime: string;
  [key: string]: any;
}

