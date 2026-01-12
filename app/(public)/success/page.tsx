export default function SuccessPage() {
  return (
    <>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Success!
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Your request has been processed successfully.
        </p>
      </div>
    </>
  );
}

