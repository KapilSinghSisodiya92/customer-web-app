import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Create account
        </h1>
        <p className="text-gray-500 text-sm">
          Get started by creating your account
        </p>
      </div>
      <SignupForm />
    </>
  );
}
