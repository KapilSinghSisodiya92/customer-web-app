export interface User {
  id?: string;
  email: string;
  mail_address?: string;
  [key: string]: any;
}

export interface AuthData {
  accessToken: string | null;
  sessionId: string | null;
  user: User | null;
}

export interface SignInCredentials {
  mail_address: string;
  password: string;
}

export interface SignUpCredentials {
  mail_address: string;
  password: string;
  [key: string]: any;
}

