import React from 'react';

// Card Component - Universal container with hover effects

// Variants:
// - default: White background with standard border
// - gradient: Gradient background (gray scale)
// - black: Pure black background with cyan accents
// - special: Emphasized featured card with enhanced styling
// - glass: Glassmorphism effect
// - neon: Neon glow effect

// Color Themes:
// - blue (default)
// - cyan
// - purple
// - green
// - red
// - orange
// - yellow
// - pink

export const Card = ({
  children,
  className = '',
  variant = 'default',
  colorTheme = 'blue',
  hoverable = true,
  scaleOnHover = true,
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Color theme mappings for borders and accents
  const colorThemes = {
    blue: {
      border: 'border-blue-200 dark:border-blue-700',
      hoverBorder: 'border-blue-300 dark:border-blue-600',
      dot: 'bg-blue-500',
      ring: 'ring-blue-200 dark:ring-blue-800',
    },
    cyan: {
      border: 'border-cyan-200 dark:border-cyan-700',
      hoverBorder: 'border-cyan-300 dark:border-cyan-600',
      dot: 'bg-cyan-500',
      ring: 'ring-cyan-200 dark:ring-cyan-800',
    },
    purple: {
      border: 'border-purple-200 dark:border-purple-700',
      hoverBorder: 'border-purple-300 dark:border-purple-600',
      dot: 'bg-purple-500',
      ring: 'ring-purple-200 dark:ring-purple-800',
    },
    green: {
      border: 'border-green-200 dark:border-green-700',
      hoverBorder: 'border-green-300 dark:border-green-600',
      dot: 'bg-green-500',
      ring: 'ring-green-200 dark:ring-green-800',
    },
    red: {
      border: 'border-red-200 dark:border-red-700',
      hoverBorder: 'border-red-300 dark:border-red-600',
      dot: 'bg-red-500',
      ring: 'ring-red-200 dark:ring-red-800',
    },
    orange: {
      border: 'border-orange-200 dark:border-orange-700',
      hoverBorder: 'border-orange-300 dark:border-orange-600',
      dot: 'bg-orange-500',
      ring: 'ring-orange-200 dark:ring-orange-800',
    },
    yellow: {
      border: 'border-yellow-200 dark:border-yellow-700',
      hoverBorder: 'border-yellow-300 dark:border-yellow-600',
      dot: 'bg-yellow-500',
      ring: 'ring-yellow-200 dark:ring-yellow-800',
    },
    pink: {
      border: 'border-pink-200 dark:border-pink-700',
      hoverBorder: 'border-pink-300 dark:border-pink-600',
      dot: 'bg-pink-500',
      ring: 'ring-pink-200 dark:ring-pink-800',
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;

  // Scale classes separated from other hover effects
  const scaleClass = scaleOnHover
    ? variant === 'special'
      ? 'hover:scale-[105%]'
      : 'hover:scale-[103%]'
    : '';

  // Variant class mappings (without scale)
  const variantClasses = {
    default: `bg-white dark:bg-gray-800 shadow-lg border-2 ${theme.border}`,

    gradient: `bg-gradient-to-br from-gray-50 to-gray-300 dark:from-gray-700 dark:to-gray-900 shadow-lg border-2 ${theme.border}`,

    black: `bg-black dark:bg-black shadow-2xl border-2 border-cyan-500/50 dark:border-cyan-400/50 ${scaleOnHover ? 'hover:border-cyan-400 hover:shadow-cyan-500/50' : ''}`,

    special: `bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-cyan-950 shadow-2xl border-2 border-blue-400 dark:border-cyan-500 ring-4 ${theme.ring}`,

    glass: `bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/20 dark:border-white/10 ${scaleOnHover ? 'hover:bg-white/20 dark:hover:bg-white/10' : ''}`,

    neon: `bg-gray-900 dark:bg-black shadow-2xl border-2 ${theme.border} ${scaleOnHover ? 'hover:shadow-cyan-500/50' : ''} relative overflow-hidden`,
  };

  const hoverBorderClass = variant === 'special'
    ? 'border-cyan-400 dark:border-cyan-400 group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-cyan-500/50'
    : variant === 'black'
      ? 'border-cyan-400 dark:border-cyan-300 group-hover:animate-pulse'
      : variant === 'neon'
        ? `${theme.hoverBorder} group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-cyan-500/50`
        : `${theme.hoverBorder} group-hover:animate-pulse`;

  const dotSize = variant === 'special' ? 'w-3 h-3' : 'w-2 h-2';
  const dotClass = variant === 'special'
    ? 'bg-cyan-400 shadow-lg shadow-cyan-500/50 animate-pulse'
    : variant === 'black'
      ? 'bg-cyan-400'
      : theme.dot;

  return (
    <div
      className={`
        relative rounded-xl transition-all duration-200 my-5
        ${variantClasses[variant]} 
        ${scaleClass}
        ${hoverable && isHovered ? 'shadow-md' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
    >
      {/* Neon glow effect for neon variant */}
      {variant === 'neon' && hoverable && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 transition-opacity duration-300 rounded-xl blur-xl pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Animated border overlay on hover */}
      {hoverable && (
        <div
          className={`absolute inset-[-2px] rounded-xl border-2 transition-opacity pointer-events-none z-10 ${hoverBorderClass} ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
        />
      )}

      <div className="relative z-[1]">
        {children}
      </div>

      {/* Hover effect indicator dot */}
      {hoverable && (
        <div className={`absolute top-2 right-2 transition-opacity z-10 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`rounded-full ${dotSize} ${dotClass}`} />
        </div>
      )}
    </div>
  );
};