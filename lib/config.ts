/**
 * Environment configuration and validation
 */

export const config = {
  api: {
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      'https://zeals-test-dev.member.egw.hacomono.app',
    authEndpoint: '/api/v2/system/auth',
  },
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'Customer Web App',
    env: process.env.NODE_ENV || 'development',
  },
  postMessage: {
    // In production, specify the exact origin instead of '*'
    targetOrigin: process.env.NEXT_PUBLIC_POST_MESSAGE_ORIGIN || '*',
  },
} as const;

/**
 * Validates that required environment variables are set
 */
export function validateConfig(): void {
  const required = [];
  if (!config.api.baseUrl) {
    required.push('NEXT_PUBLIC_API_BASE_URL');
  }

  if (required.length > 0) {
    throw new Error(
      `Missing required environment variables: ${required.join(', ')}`,
    );
  }
}

