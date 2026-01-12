/**
 * Application constants
 */

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  BOOK: '/book',
  SUCCESS: '/success',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    SIGNIN: '/api/auth/signin',
    SIGNUP: '/api/auth/signup',
  },
  BOOKING: {
    CREATE: '/api/booking',
    LIST: '/api/booking',
  },
} as const;

export const MESSAGE_TYPES = {
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  BOOKING_SUCCESS: 'BOOKING_SUCCESS',
  ERROR: 'ERROR',
} as const;

