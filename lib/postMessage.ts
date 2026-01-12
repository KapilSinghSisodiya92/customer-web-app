import { isIframeMode } from './runtime';

export interface AuthSuccessMessage {
  type: 'AUTH_SUCCESS';
  sessionId: string | null;
  user: any;
  accessToken: string | null;
}

export interface BookingSuccessMessage {
  type: 'BOOKING_SUCCESS';
  bookingId: string;
  booking: any;
}

export type PostMessage = AuthSuccessMessage | BookingSuccessMessage;

/**
 * Sends a postMessage to the parent window (if in iframe mode)
 * @param message The message to send
 * @param targetOrigin The target origin (defaults to '*' for development)
 */
export function sendToParent(
  message: PostMessage,
  targetOrigin: string = '*',
): void {
  if (isIframeMode()) {
    window.parent.postMessage(message, targetOrigin);
  }
}

/**
 * Sends authentication success message to parent
 */
export function sendAuthSuccess(
  sessionId: string | null,
  user: any,
  accessToken: string | null,
  targetOrigin: string = '*',
): void {
  sendToParent(
    {
      type: 'AUTH_SUCCESS',
      sessionId,
      user,
      accessToken,
    },
    targetOrigin,
  );
}

/**
 * Sends booking success message to parent
 */
export function sendBookingSuccess(
  bookingId: string,
  booking: any,
  targetOrigin: string = '*',
): void {
  sendToParent(
    {
      type: 'BOOKING_SUCCESS',
      bookingId,
      booking,
    },
    targetOrigin,
  );
}

