import React, { useState } from 'react';
import Image from 'next/image';

// AnimatedIndividualCard Component
// Card with scale, rotation, and bounce animation on hover
// Color Variants:
// - purple (default)
// - blue
// - green
// - red
// - orange
// - yellow
// - pink
// - cyan
// Features:
// - Random rotation direction on mount
// - Scales and rotates on hover
// - Icon bounce animation
// - Gradient background transition

export const AnimatedIndividualCard = ({ 
  title, 
  imagePath,
  icon: Icon,
  colorVariant = 'purple',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotationDirection] = useState(() => Math.random() > 0.5 ? 'rotate-3' : '-rotate-3');

  // Color variant mappings
  const colorVariants = {
    purple: {
      gradient: 'from-purple-500 to-purple-800 dark:from-purple-500 dark:to-purple-900',
      default: 'bg-white dark:bg-gray-700',
    },
    blue: {
      gradient: 'from-blue-500 to-blue-800 dark:from-blue-500 dark:to-blue-900',
      default: 'bg-white dark:bg-gray-700',
    },
    green: {
      gradient: 'from-green-500 to-green-800 dark:from-green-500 dark:to-green-900',
      default: 'bg-white dark:bg-gray-700',
    },
    red: {
      gradient: 'from-red-500 to-red-800 dark:from-red-500 dark:to-red-900',
      default: 'bg-white dark:bg-gray-700',
    },
    orange: {
      gradient: 'from-orange-500 to-orange-800 dark:from-orange-500 dark:to-orange-900',
      default: 'bg-white dark:bg-gray-700',
    },
    yellow: {
      gradient: 'from-yellow-500 to-yellow-800 dark:from-yellow-500 dark:to-yellow-900',
      default: 'bg-white dark:bg-gray-700',
    },
    pink: {
      gradient: 'from-pink-500 to-pink-800 dark:from-pink-500 dark:to-pink-900',
      default: 'bg-white dark:bg-gray-700',
    },
    cyan: {
      gradient: 'from-cyan-500 to-cyan-800 dark:from-cyan-500 dark:to-cyan-900',
      default: 'bg-white dark:bg-gray-800',
    },
  };

  const colors = colorVariants[colorVariant] || colorVariants.purple;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-500 ease-out cursor-pointer ${
        isHovered
          ? `bg-gradient-to-br ${colors.gradient} text-white transform scale-110 ${rotationDirection} shadow-2xl`
          : `${colors.default} text-gray-800 dark:text-gray-200 shadow-md`
      }`}
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
          isHovered ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-800'
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
      <h3 className="text-lg font-bold text-center">
        {title}
      </h3>
    </div>
  );
};
