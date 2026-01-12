import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  icon,
  className = '',
  id,
  type,
  ...props
}: InputProps) {
  const inputId = id || props.name;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-gray-700 uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
            <div
              className={`${error ? 'text-red-400' : 'text-gray-400 group-focus-within:text-blue-500'}`}
            >
              {icon}
            </div>
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={`w-full ${
            icon ? 'pl-12 pr-4' : 'px-4'
          } py-3.5 text-sm border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 ${
            error
              ? 'border-red-300 focus:ring-red-500 focus:border-red-400 bg-red-50/50'
              : 'border-gray-200 bg-gray-50/50 focus:border-blue-500 focus:ring-blue-500/20 focus:bg-white hover:border-gray-300'
          } ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1.5 mt-1.5">
          <svg
            className="w-3.5 h-3.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
