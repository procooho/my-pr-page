import React from 'react';

// CardContent Component
// Wrapper for card content with consistent padding and optional styling

// Padding: none, sm, md (default), lg, xl
// Variants: default, black, glass

export const CardContent = ({
  children,
  className = '',
  padding = 'md',
  variant = 'default',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variantClasses = {
    default: '',
    black: 'text-gray-100 dark:text-gray-100',
    glass: 'text-gray-900 dark:text-gray-100',
  };

  return (
    <div className={`relative ${paddingClasses[padding]} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
