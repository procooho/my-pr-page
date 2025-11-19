"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

// Dropdown Component
// Styled select dropdown with gradient background

// Variants: default, black, glass, minimal
// Color Themes: blue, cyan, purple, green, red, orange

export function Dropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  variant = 'default',
  colorTheme = 'blue',
  className = '',
}) {
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  const colorThemes = {
    blue: {
      bg: 'from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20',
      border: 'border-blue-200 dark:border-blue-700',
      focus: 'focus:ring-blue-500',
      hover: 'hover:border-blue-400 dark:hover:border-blue-500',
      icon: 'text-blue-500 dark:text-blue-500',
    },
    cyan: {
      bg: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
      border: 'border-cyan-200 dark:border-cyan-700',
      focus: 'focus:ring-cyan-500',
      hover: 'hover:border-cyan-400 dark:hover:border-cyan-500',
      icon: 'text-cyan-600 dark:text-cyan-400',
    },
    purple: {
      bg: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      border: 'border-purple-200 dark:border-purple-700',
      focus: 'focus:ring-purple-500',
      hover: 'hover:border-purple-400 dark:hover:border-purple-500',
      icon: 'text-purple-600 dark:text-purple-400',
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;

  const variantClasses = {
    default: `bg-gradient-to-r ${theme.bg} border-2 ${theme.border}`,
    black: 'bg-black border-2 border-cyan-500/50',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20',
    minimal: 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600',
  };

  return (
    <div className={className}>
      {label && (
        <label className={`block text-sm font-medium mb-2 ${variant === 'black' ? 'text-cyan-300' : 'text-gray-900 dark:text-gray-100'}`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          style={{ colorScheme: 'light dark' }}
          className={`
            w-full px-4 py-3 pr-10
            ${variantClasses[variant]}
            rounded-lg font-medium
            ${variant === 'black' ? 'text-cyan-100' : 'text-gray-900 dark:text-gray-100'}
            appearance-none cursor-pointer
            transition-all duration-200
            ${variant !== 'black' ? theme.hover : 'hover:border-cyan-400'}
            focus:outline-none focus:ring-2
            ${variant === 'black' ? 'focus:ring-cyan-500' : theme.focus}
            focus:border-transparent
            ${disabled ? 'opacity-70 bg-gray-100 dark:bg-gray-900 bg-[repeating-linear-gradient(45deg,#e5e7eb,#e5e7eb_10px,#f3f4f6_10px,#f3f4f6_20px)] dark:bg-[repeating-linear-gradient(45deg,#1f1f1f,#1f1f1f_10px,#2a2a2a_10px,#2a2a2a_20px)] cursor-not-allowed' : ''}
          `}
        >
          {placeholder && (
            <option value="" disabled className="bg-white dark:bg-gray-800">{placeholder}</option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-white dark:bg-gray-800">
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <ChevronDown className={`w-5 h-5 ${variant === 'black' ? 'text-blue-400' : theme.icon}`} />
        </div>
      </div>
    </div>
  );
}
