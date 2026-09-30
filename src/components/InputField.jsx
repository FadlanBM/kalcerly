import React, { useState } from 'react';

export default function InputField({
  label,
  labelRight,
  icon,
  rightIcon,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  showPasswordToggle = true,
  className = '',
  containerClassName = '',
  inputClassName = '',
  error = '',
  success = false,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const effectiveType = isPassword ? (showPassword ? 'text' : 'password') : type;

  // Render left icon (custom icon or default lock icon for password)
  const renderLeftIcon = () => {
    if (icon) return icon;
    if (isPassword) {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={error ? '#FB7185' : '#8C947C'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    }
    return null;
  };

  // Render right icon/action (custom rightIcon or eye show/hide toggle for password)
  const renderRightContent = () => {
    if (rightIcon) return rightIcon;
    if (isPassword && showPasswordToggle) {
      return (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="p-1.5 flex items-center justify-center text-[#C2CAB0] hover:text-[#CCFF80] cursor-pointer rounded-lg transition-colors focus:outline-none"
          aria-label={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
        >
          {showPassword ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          )}
        </button>
      );
    }
    return null;
  };

  const leftIconContent = renderLeftIcon();
  const rightIconContent = renderRightContent();

  const borderClass = error
    ? 'border-rose-500/80 focus-within:border-rose-400 bg-rose-950/15'
    : success
    ? 'border-[#CCFF80]/70 focus-within:border-[#CCFF80] bg-[#191C22]'
    : 'border-[#424936] focus-within:border-[#CCFF80] bg-[#191C22]';

  return (
    <div className={`flex flex-col gap-1.5 ${containerClassName}`}>
      {(label || labelRight) && (
        <div className="flex justify-between items-center">
          {label && (
            <label className={`font-medium text-xs ${error ? 'text-rose-300' : 'text-[#E1E2EB]'}`}>
              {label}
            </label>
          )}
          {labelRight && <div>{labelRight}</div>}
        </div>
      )}

      <div
        className={`relative flex items-center border rounded-xl h-12 transition-colors ${borderClass} ${className}`}
      >
        {leftIconContent && (
          <div className={`absolute left-3.5 flex items-center pointer-events-none ${error ? 'text-rose-400' : 'text-[#8C947C]'}`}>
            {leftIconContent}
          </div>
        )}

        <input
          type={effectiveType}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={`w-full h-full bg-transparent border-none ${
            leftIconContent ? 'pl-11' : 'pl-4'
          } ${rightIconContent ? 'pr-11' : 'pr-4'} text-sm text-[#E1E2EB] placeholder:text-[#8C947C] outline-none ${inputClassName}`}
          {...props}
        />

        {rightIconContent && (
          <div className="absolute right-2.5 flex items-center">
            {rightIconContent}
          </div>
        )}
      </div>

      {error && (
        <p className="flex items-center gap-1.5 text-[11px] text-rose-400 mt-0.5 font-medium">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
