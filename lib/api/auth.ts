import { config } from '../config';

export interface SignInRequest {
  mail_address: string;
  password: string;
}

export interface SignUpRequest {
  mail_address: string;
  password: string;
  // Add other signup fields as needed
}

export interface AuthResponse {
  token?: string;
  access_token?: string;
  accessToken?: string;
  sessionId?: string;
  session_id?: string;
  user?: any;
  data?: {
    token?: string;
    access_token?: string;
    sessionId?: string;
    session_id?: string;
    user?: any;
  };
  email?: string;
  mail_address?: string;
}

/**
 * Signs in a user
 */
export async function signIn(
  credentials: SignInRequest,
): Promise<AuthResponse> {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || 'Login failed. Please check your credentials.',
    );
  }

  return response.json();
}

/**
 * Signs up a new user
 */
export async function signUp(
  credentials: SignUpRequest,
): Promise<AuthResponse> {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || 'Signup failed. Please try again.',
    );
  }

  return response.json();
}

/**
 * Extracts authentication data from API response
 * Handles various response structures flexibly
 */
export function extractAuthData(data: AuthResponse) {
  const accessToken =
    data.token ||
    data.access_token ||
    data.accessToken ||
    data.data?.token ||
    data.data?.access_token ||
    null;

  const sessionId =
    data.sessionId ||
    data.session_id ||
    data.data?.sessionId ||
    data.data?.session_id ||
    null;

  const user =
    data.user ||
    data.data?.user ||
    (data.email || data.mail_address
      ? { email: data.email || data.mail_address, ...data }
      : null);

  return { accessToken, sessionId, user };
}

