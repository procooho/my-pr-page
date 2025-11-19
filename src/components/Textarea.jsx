"use client";
import React, { useId } from 'react';

// Textarea Component
// Styled textarea matching Input component

// Variants: default, black, glass, minimal
// Color Themes: blue, cyan, purple, green

export function Textarea({
  value = '',
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  label = '',
  error = '',
  required = false,
  variant = 'default',
  colorTheme = 'blue',
  name,
  id,
  rows = 4,
  maxLength,
  resize = true,
}) {
  const reactAutoId = useId();
  const inputId = id || name || reactAutoId;

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  const colorThemes = {
    blue: {
      bg: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      border: 'border-blue-200 dark:border-blue-700',
      focus: 'focus:ring-blue-500',
      hover: 'hover:border-blue-400 dark:hover:border-blue-500',
    },
    cyan: {
      bg: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
      border: 'border-cyan-200 dark:border-cyan-700',
      focus: 'focus:ring-cyan-500',
      hover: 'hover:border-cyan-400 dark:hover:border-cyan-500',
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;

  const variantClasses = {
    default: `bg-gradient-to-r ${theme.bg} border-2 ${theme.border}`,
    black: 'bg-black border-2 border-cyan-500/50 text-cyan-100 placeholder-cyan-400/50',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20',
    minimal: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600',
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`block mb-2 text-sm font-medium ${variant === 'black' ? 'text-cyan-300' : 'text-gray-900 dark:text-gray-100'}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        id={inputId}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className={`
          w-full px-4 py-3 min-h-[96px]
          ${variantClasses[variant]}
          rounded-lg font-medium
          ${variant === 'black' ? 'text-cyan-100' : 'text-gray-900 dark:text-gray-100'}
          ${variant === 'black' ? 'placeholder-cyan-400/50' : 'placeholder-gray-500 dark:placeholder-gray-400'}
          transition-all duration-200
          ${variant !== 'black' ? theme.hover : 'hover:border-cyan-400'}
          focus:outline-none focus:ring-2
          ${variant === 'black' ? 'focus:ring-cyan-500' : theme.focus}
          focus:border-transparent
          ${resize ? 'resize-y' : 'resize-none'}
          ${disabled ? 'opacity-70 bg-gray-100 dark:bg-gray-900 bg-[repeating-linear-gradient(45deg,#e5e7eb,#e5e7eb_10px,#f3f4f6_10px,#f3f4f6_20px)] dark:bg-[repeating-linear-gradient(45deg,#1f1f1f,#1f1f1f_10px,#2a2a2a_10px,#2a2a2a_20px)] cursor-not-allowed' : ''}
          ${error ? 'border-red-400 dark:border-red-500 focus:ring-red-500' : ''}
        `}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
