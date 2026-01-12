'use client';

import { useState } from 'react';
import { signIn, extractAuthData } from '@/lib/api/auth';
import { sendAuthSuccess } from '@/lib/postMessage';
import { isStandaloneMode } from '@/lib/runtime';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthError } from './AuthError';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
   * Handles successful login based on runtime context
   */
  const handleLoginSuccess = (data: any) => {
    const { accessToken, sessionId, user } = extractAuthData(data);

    if (isStandaloneMode()) {
      // Standalone mode: show success UI
      setSuccess(true);
    } else {
      // Iframe mode: send postMessage to parent
      sendAuthSuccess(sessionId, user, accessToken);
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);

    try {
      const data = await signIn({
        mail_address: email,
        password: password,
      });
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
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          You're signed in!
        </h2>
        <p className="text-gray-500 text-sm">
          You can close this screen or return to the app.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <Input
          id="email"
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        />

        <Input
          id="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          icon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
        />
      </div>

      {error && <AuthError message={error} />}

      <div className="pt-2">
        <Button type="submit" disabled={loading} isLoading={loading}>
          Sign In
        </Button>
      </div>
    </form>
  );
}
