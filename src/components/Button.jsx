"use client";
import React from 'react';

// Button Component - Universal button with extensive variants

// Variants:
// - solid: Solid color background
// - gradient: Gradient background with shadow
// - outline: Border only, transparent background
// - ghost: Minimal styling, bg on hover
// - underline: Underline animation on hover
// - underline-solid: Solid bg with underline animation
// - neon: Neon glow effect
// - glass: Glassmorphism effect

// Color Variants: blue, purple, green, red, orange, gray, cyan, pink, yellow, indigo
// Sizes: sm, md (default), lg, xl

export function Button({
  children,
  onClick,
  disabled = false,
  variant = 'solid',
  colorVariant = 'blue',
  size = 'md',
  icon: Icon = null,
  fullWidth = false,
  className = '',
  type = 'button',
}) {
  // Size mappings
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  // Solid variant color mappings
  const solidColors = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700',
    cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-600 dark:hover:bg-cyan-700',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-600 dark:hover:bg-purple-700',
    green: 'bg-green-600 hover:bg-green-700 text-white dark:bg-green-600 dark:hover:bg-green-700',
    red: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700',
    orange: 'bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-600 dark:hover:bg-orange-700',
    gray: 'bg-gray-600 hover:bg-gray-700 text-white dark:bg-gray-600 dark:hover:bg-gray-700',
    pink: 'bg-pink-600 hover:bg-pink-700 text-white dark:bg-pink-600 dark:hover:bg-pink-700',
    yellow: 'bg-yellow-600 hover:bg-yellow-700 text-white dark:bg-yellow-600 dark:hover:bg-yellow-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-600 dark:hover:bg-indigo-700',
  };

  // Gradient variant color mappings
  const gradientColors = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/30',
    cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-cyan-500/30',
    purple: 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-purple-500/30',
    green: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/30',
    red: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/30',
    orange: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/30',
    gray: 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white shadow-gray-500/30',
    pink: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-pink-500/30',
    yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-yellow-500/30',
    indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-indigo-500/30',
  };

  // Outline variant color mappings
  const outlineColors = {
    blue: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20',
    cyan: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:text-cyan-400 dark:border-cyan-400 dark:hover:bg-cyan-900/20',
    purple: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900/20',
    green: 'border-2 border-green-600 text-green-600 hover:bg-green-50 dark:text-green-400 dark:border-green-400 dark:hover:bg-green-900/20',
    red: 'border-2 border-red-600 text-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-900/20',
    orange: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-orange-900/20',
    gray: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:border-gray-400 dark:hover:bg-gray-900/20',
    pink: 'border-2 border-pink-600 text-pink-600 hover:bg-pink-50 dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-900/20',
    yellow: 'border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:border-yellow-400 dark:hover:bg-yellow-900/20',
    indigo: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/20',
  };

  // Ghost variant color mappings
  const ghostColors = {
    blue: 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/40',
    cyan: 'text-cyan-600 hover:bg-cyan-50 dark:text-cyan-400 dark:hover:bg-cyan-900/40',
    purple: 'text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/40',
    green: 'text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/40',
    red: 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/40',
    orange: 'text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/40',
    gray: 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900/40',
    pink: 'text-pink-600 hover:bg-pink-50 dark:text-pink-400 dark:hover:bg-pink-900/40',
    yellow: 'text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/40',
    indigo: 'text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/40',
  };

  // Neon variant color mappings
  const neonColors = {
    blue: 'bg-gray-900 border-2 border-blue-500 text-blue-400 hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-950',
    cyan: 'bg-gray-900 border-2 border-cyan-500 text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-950',
    purple: 'bg-gray-900 border-2 border-purple-500 text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:bg-purple-950',
    green: 'bg-gray-900 border-2 border-green-500 text-green-400 hover:shadow-lg hover:shadow-green-500/50 hover:bg-green-950',
    red: 'bg-gray-900 border-2 border-red-500 text-red-400 hover:shadow-lg hover:shadow-red-500/50 hover:bg-red-950',
    orange: 'bg-gray-900 border-2 border-orange-500 text-orange-400 hover:shadow-lg hover:shadow-orange-500/50 hover:bg-orange-950',
    gray: 'bg-gray-900 border-2 border-gray-500 text-gray-400 hover:shadow-lg hover:shadow-gray-500/50 hover:bg-gray-950',
    pink: 'bg-gray-900 border-2 border-pink-500 text-pink-400 hover:shadow-lg hover:shadow-pink-500/50 hover:bg-pink-950',
    yellow: 'bg-gray-900 border-2 border-yellow-500 text-yellow-400 hover:shadow-lg hover:shadow-yellow-500/50 hover:bg-yellow-950',
    indigo: 'bg-gray-900 border-2 border-indigo-500 text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-950',
  };

  // Glass variant
  const glassColors = {
    blue: 'bg-blue-500/10 backdrop-blur-md border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20',
    cyan: 'bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20',
    purple: 'bg-purple-500/10 backdrop-blur-md border border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20',
    green: 'bg-green-500/10 backdrop-blur-md border border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/20',
    red: 'bg-red-500/10 backdrop-blur-md border border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-500/20',
    orange: 'bg-orange-500/10 backdrop-blur-md border border-orange-500/30 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20',
    gray: 'bg-gray-500/10 backdrop-blur-md border border-gray-500/30 text-gray-600 dark:text-gray-400 hover:bg-gray-500/20',
    pink: 'bg-pink-500/10 backdrop-blur-md border border-pink-500/30 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20',
    yellow: 'bg-yellow-500/10 backdrop-blur-md border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-500/20',
    indigo: 'bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20',
  };

  // Underline variant color mappings
  const underlineColors = {
    blue: 'border-2 border-blue-600 text-blue-600 dark:text-blue-300 hover:text-white dark:hover:text-white bg-blue-500/20 hover:bg-blue-600',
    cyan: 'border-2 border-cyan-600 text-cyan-600 dark:text-cyan-300 hover:text-white dark:hover:text-white bg-cyan-500/20 hover:bg-cyan-600',
    purple: 'border-2 border-purple-600 text-purple-600 dark:text-purple-300 hover:text-white dark:hover:text-white bg-purple-500/20 hover:bg-purple-600',
    green: 'border-2 border-green-600 text-green-600 dark:text-green-300 hover:text-white dark:hover:text-white hover:bg-green-600 bg-green-500/20',
    red: 'border-2 border-red-600 text-red-600 dark:text-red-300 hover:text-white dark:hover:text-white hover:bg-red-600 bg-red-500/20',
    orange: 'border-2 border-orange-600 text-orange-600 dark:text-orange-300 hover:text-white dark:hover:text-white hover:bg-orange-600 bg-orange-500/20',
    gray: 'border-2 border-gray-600 text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-600 bg-gray-500/20',
    pink: 'border-2 border-pink-600 text-pink-600 dark:text-pink-300 hover:text-white dark:hover:text-white hover:bg-pink-600 bg-pink-500/20',
    yellow: 'border-2 border-yellow-600 text-yellow-600 dark:text-yellow-300 hover:text-white dark:hover:text-white hover:bg-yellow-600 bg-yellow-500/20',
    indigo: 'border-2 border-indigo-600 text-indigo-600 dark:text-indigo-300 hover:text-white dark:hover:text-white hover:bg-indigo-600 bg-indigo-500/20',
  };

  // Underline-solid variant color mappings
  const underlineSolidColors = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    orange: 'bg-orange-600 hover:bg-orange-700 text-white',
    gray: 'bg-gray-600 hover:bg-gray-700 text-white',
    pink: 'bg-pink-600 hover:bg-pink-700 text-white',
    yellow: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    indigo: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  };

  // Underline bar colors
  const underlineBarColors = {
    blue: 'bg-blue-200',
    cyan: 'bg-cyan-200',
    purple: 'bg-purple-200',
    green: 'bg-green-200',
    red: 'bg-red-200',
    orange: 'bg-orange-200',
    gray: 'bg-gray-200',
    pink: 'bg-pink-200',
    yellow: 'bg-yellow-200',
    indigo: 'bg-indigo-200',
  };

  // Get color classes based on variant
  const getColorClasses = () => {
    switch (variant) {
      case 'gradient':
        return gradientColors[colorVariant] || gradientColors.blue;
      case 'outline':
        return outlineColors[colorVariant] || outlineColors.blue;
      case 'ghost':
        return ghostColors[colorVariant] || ghostColors.blue;
      case 'neon':
        return neonColors[colorVariant] || neonColors.blue;
      case 'glass':
        return glassColors[colorVariant] || glassColors.blue;
      case 'underline':
        return underlineColors[colorVariant] || underlineColors.blue;
      case 'underline-solid':
        return underlineSolidColors[colorVariant] || underlineSolidColors.blue;
      case 'solid':
      default:
        return solidColors[colorVariant] || solidColors.blue;
    }
  };

  const colorClasses = getColorClasses();
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const widthClass = fullWidth ? 'w-full' : '';
  const shadowClass = variant === 'gradient' ? 'shadow-lg hover:shadow-xl' : '';

  // Special rendering for underline variants
  if (variant === 'underline' || variant === 'underline-solid') {
    const underlineBarColor = underlineBarColors[colorVariant] || underlineBarColors.blue;

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          group/item
          ${colorClasses}
          ${sizeClass}
          ${widthClass}
          relative
          font-semibold
          rounded-lg
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-2
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {children}
        <div
          className={`
            absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full
            transition-all duration-300 ${underlineBarColor}
            ${disabled ? 'w-0' : 'w-0 group-hover/item:w-1/2'}
          `}
        />
      </button>
    );
  }

  // Standard rendering
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${colorClasses}
        ${sizeClass}
        ${widthClass}
        ${shadowClass}
        font-semibold
        rounded-lg
        transition-all
        duration-200
        flex
        items-center
        justify-center
        gap-2
        hover:scale-103
        active:scale-95
        ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : 'cursor-pointer'}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
