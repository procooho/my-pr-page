import React from 'react';
import Image from 'next/image';

// AnimatedServiceCard Component
// Card with scale and gradient animation on hover
// Color Variants:
// - blue (default)
// - purple
// - green
// - red
// - orange
// - yellow
// - pink
// - cyan
// Features:
// - Scales up on hover
// - Gradient background transition
// - Icon bounce animation
// - Shadow effects

export const AnimatedServiceCard = ({ 
  title, 
  description, 
  imagePath, 
  icon: Icon,
  isHovered, 
  onHover, 
  onLeave,
  colorVariant = 'blue',
  minHeight = '180px',
  className = '',
}) => {
  // Color variant mappings
  const colorVariants = {
    blue: {
      gradient: 'from-blue-400 to-blue-800 dark:from-blue-400 dark:to-blue-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-blue-100 dark:bg-blue-900/20',
    },
    purple: {
      gradient: 'from-purple-400 to-purple-800 dark:from-purple-400 dark:to-purple-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-purple-100 dark:bg-purple-900/20',
    },
    green: {
      gradient: 'from-green-400 to-green-800 dark:from-green-400 dark:to-green-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-green-100 dark:bg-green-900/20',
    },
    red: {
      gradient: 'from-red-400 to-red-800 dark:from-red-400 dark:to-red-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-red-100 dark:bg-red-900/20',
    },
    orange: {
      gradient: 'from-orange-400 to-orange-800 dark:from-orange-400 dark:to-orange-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-orange-100 dark:bg-orange-900/20',
    },
    yellow: {
      gradient: 'from-yellow-400 to-yellow-800 dark:from-yellow-400 dark:to-yellow-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
    pink: {
      gradient: 'from-pink-400 to-pink-800 dark:from-pink-400 dark:to-pink-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-pink-100 dark:bg-pink-900/20',
    },
    cyan: {
      gradient: 'from-cyan-400 to-cyan-800 dark:from-cyan-400 dark:to-cyan-800',
      default: 'bg-white dark:bg-gray-800',
      normalBg: 'bg-cyan-100 dark:bg-cyan-900/20',
    },
  };

  const colors = colorVariants[colorVariant] || colorVariants.blue;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 ease-out cursor-pointer touch-auto ${
        isHovered
          ? `bg-gradient-to-br ${colors.gradient} text-white transform scale-105 shadow-2xl`
          : `${colors.normalBg} text-gray-800 dark:text-gray-200 shadow-lg`
      } ${className}`}
      style={{ minHeight }}
    >
      {/* Icon or Image */}
      {Icon ? (
        <Icon 
          className={`w-16 h-16 transition-transform duration-300 mb-4 ${
            isHovered ? 'animate-bounce' : ''
          }`} 
        />
      ) : imagePath ? (
        <Image 
          width={70} 
          height={70} 
          src={imagePath} 
          alt={title} 
          className={`object-contain transition-transform duration-300 mb-4 ${
            isHovered ? 'animate-bounce' : ''
          }`} 
        />
      ) : (
        <div className={`w-16 h-16 rounded-full ${
          isHovered ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-700'
        } flex items-center justify-center mb-4 transition-all duration-300 ${
          isHovered ? 'animate-bounce' : ''
        }`}>
          <span className={`text-2xl font-bold ${
            isHovered ? 'text-white' : 'text-gray-600 dark:text-gray-300'
          }`}>
            {title.charAt(0)}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-center">
        {title}
      </h3>

      {/* Optional Description (shown on hover) */}
      {description && isHovered && (
        <p className="text-sm text-center mt-3 text-white/90 animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  );
};
