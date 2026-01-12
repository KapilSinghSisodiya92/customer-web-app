'use client';

import { useState } from 'react';

export default function LoginClient() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
   * Detects if the app is running inside an iframe
   */
  const isIframeMode = () => {
    try {
      return window.self !== window.top;
    } catch (e) {
      // Cross-origin iframe will throw an error when accessing window.top
      // This indicates we're in an iframe
      return true;
    }
  };

  /**
   * Extracts authentication data from API response
   * Handles various response structures flexibly
   */
  const extractAuthData = (data: any) => {
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
  };

  /**
   * Handles successful login based on runtime context
   */
  const handleLoginSuccess = (data: any) => {
    const { accessToken, sessionId, user } = extractAuthData(data);

    if (isIframeMode()) {
      // Iframe mode: send postMessage to parent
      window.parent.postMessage(
        {
          type: 'AUTH_SUCCESS',
          sessionId,
          user,
          accessToken,
        },
        '*', // In production, consider specifying targetOrigin for security
      );
    } else {
      // Standalone mode: show success UI
      setSuccess(true);
    }
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mail_address: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || 'Login failed. Please check your credentials.',
        );
      }

      const data = await response.json();
      handleLoginSuccess(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred during login',
      );
    } finally {
      setLoading(false);
    }
  }

  // Success state for standalone mode
  if (success) {
    return (
      <div className="space-y-4">
        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-lg font-semibold text-green-800">
              You're signed in
            </h2>
          </div>
          <p className="mt-2 text-sm text-green-700">
            You can close this screen or return to the app.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your password"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
