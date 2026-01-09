'use client';

export default function LoginClient() {
  function handleLogin() {
    const token = 'demo-token-123';
    window.opener?.postMessage({ type: 'AUTH_SUCCESS', token }, '*');

    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get('return_url');
    if (returnUrl) window.location.href = returnUrl;
  }

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 rounded bg-blue-600 text-white"
    >
      Mock Login
    </button>
  );
}