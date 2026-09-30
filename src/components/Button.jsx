import React from 'react';

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  icon,
  iconPosition = 'right',
  fullWidth = true,
  className = '',
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex justify-center items-center gap-2 h-[52px] rounded-full font-bold text-base cursor-pointer select-none transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const variants = {
    primary: 'bg-[#A3E635] text-[#121F00] shadow-[0_0_24px_rgba(163,230,53,0.35)] border-none hover:bg-[#b2f04b]',
    secondary: 'bg-[#191C22] text-[#E1E2EB] border border-[#424936] hover:bg-[#272A31]',
    outline: 'bg-transparent text-[#CCFF80] border border-[#A3E635]/60 hover:bg-[#A3E635]/10',
    ghost: 'bg-transparent text-[#C2CAB0] border-none hover:text-white',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}
