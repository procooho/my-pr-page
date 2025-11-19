"use client";
import React, { useId } from 'react';

// Input Component - Universal input with extensive styling

// Variants: default, black, glass, minimal
// Types: text, number, email, password, date, tel, url, search, etc.
// Color Themes: blue, cyan, purple, green, red, orange

export function Input({
  type = 'text',
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
  min,
  max,
  step,
  pattern,
  maxLength,
  name,
  id,
}) {
  const generatedId = useId();
  const inputId = id || name || generatedId || `input-${Math.random().toString(36).substr(2, 9)}`;

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
    purple: {
      bg: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      border: 'border-purple-200 dark:border-purple-700',
      focus: 'focus:ring-purple-500',
      hover: 'hover:border-purple-400 dark:hover:border-purple-500',
    },
    green: {
      bg: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      border: 'border-green-200 dark:border-green-700',
      focus: 'focus:ring-green-500',
      hover: 'hover:border-green-400 dark:hover:border-green-500',
    },
    red: {
      bg: 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
      border: 'border-red-200 dark:border-red-700',
      focus: 'focus:ring-red-500',
      hover: 'hover:border-red-400 dark:hover:border-red-500',
    },
    orange: {
      bg: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      border: 'border-orange-200 dark:border-orange-700',
      focus: 'focus:ring-orange-500',
      hover: 'hover:border-orange-400 dark:hover:border-orange-500',
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

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        maxLength={maxLength}
        className={`
          w-full px-4 py-3
          ${variantClasses[variant]}
          rounded-lg font-medium
          ${variant === 'black' ? 'text-cyan-100' : 'text-gray-900 dark:text-gray-100'}
          ${variant === 'black' ? 'placeholder-cyan-400/50' : 'placeholder-gray-500 dark:placeholder-gray-400'}
          transition-all duration-200
          ${variant !== 'black' && variant !== 'glass' ? theme.hover : ''}
          focus:outline-none focus:ring-2
          ${variant === 'black' ? 'focus:ring-cyan-500 focus:border-cyan-400' : theme.focus}
          focus:border-transparent
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
