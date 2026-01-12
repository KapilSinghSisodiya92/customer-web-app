import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Welcome back
        </h1>
        <p className="text-gray-500 text-sm">
          Sign in to your account to continue
        </p>
      </div>
      <LoginForm />
    </>
  );
}
