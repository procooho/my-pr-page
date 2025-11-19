"use client";
import React from 'react';

// PageHeader - Page title headers with accent bars
// PageContainer - Page background wrapper

// Color Themes: blue, cyan, purple, green, red, orange, yellow, pink
// Sizes: sm, md, lg, xl
// Variants: default, black, minimal


export function PageHeader({
  title,
  subtitle,
  accentColor = 'blue',
  titleSize = 'xl',
  variant = 'default',
  children,
}) {
  const accentColorMap = {
    blue: 'from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600',
    yellow: 'from-yellow-500 to-yellow-600',
    pink: 'from-pink-500 to-pink-600',
  };

  const titleSizeMap = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const accentGradient = accentColorMap[accentColor] || accentColorMap.blue;
  const titleClass = titleSizeMap[titleSize] || titleSizeMap.xl;

  const titleColor = variant === 'black' ? 'text-cyan-300' : 'text-gray-900 dark:text-white';
  const subtitleColor = variant === 'black' ? 'text-cyan-100' : 'text-gray-500 dark:text-gray-400';
  const accentWidth = variant === 'minimal' ? 'w-1' : 'w-2';

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        {variant !== 'minimal' && (
          <div className={`${accentWidth} h-13 bg-gradient-to-b ${accentGradient} rounded-full mr-2`} />
        )}
        
        {children ? (
          children
        ) : (
          <div>
            <h1 className={`${titleClass} font-bold mb-2 ${titleColor}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`text-sm ${subtitleColor}`}>{subtitle}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function PageContainer({
  children,
  className = '',
  variant = 'default',
}) {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-lg',
    black: 'bg-white dark:bg-black shadow-2xl border-2 border-cyan-500/50',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl',
    minimal: 'bg-white dark:bg-gray-800',
  };

  return (
    <div className={`${variantClasses[variant]} rounded-xl my-5 md:m-5 p-3 md:p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}
