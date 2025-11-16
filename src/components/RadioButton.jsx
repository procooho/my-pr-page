import React from 'react';
import { Check } from 'lucide-react';

// RadioButton Component
// Animated radio button with underline effect

// Color Variants: blue, indigo, purple, green, red, orange, cyan, pink

const RadioButton = ({
  label,
  value,
  isSelected = false,
  disabled = false,
  onChange,
  colorVariant = 'blue',
  showCheckmark = false,
  className = ''
}) => {
  const colorStyles = {
    blue: {
      selected: 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-500 shadow-lg shadow-blue-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-blue-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-blue-500'
    },
    cyan: {
      selected: 'bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-500 shadow-lg shadow-cyan-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-cyan-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-cyan-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-cyan-500'
    },
    purple: {
      selected: 'bg-gradient-to-br from-purple-500 to-purple-600 border-purple-500 shadow-lg shadow-purple-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-purple-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-purple-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-purple-500'
    },
    green: {
      selected: 'bg-gradient-to-br from-green-500 to-green-600 border-green-500 shadow-lg shadow-green-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-green-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-green-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-green-500'
    },
    red: {
      selected: 'bg-gradient-to-br from-red-500 to-red-600 border-red-500 shadow-lg shadow-red-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-red-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-red-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-red-500'
    },
    orange: {
      selected: 'bg-gradient-to-br from-orange-500 to-orange-600 border-orange-500 shadow-lg shadow-orange-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-orange-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-orange-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-orange-500'
    },
    pink: {
      selected: 'bg-gradient-to-br from-pink-500 to-pink-600 border-pink-500 shadow-lg shadow-pink-500/50',
      unselected: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-pink-400',
      textSelected: 'text-white',
      textUnselected: 'text-gray-700 dark:text-gray-300 group-hover/item:text-pink-600',
      underlineSelected: 'bg-white/50',
      underlineUnselected: 'bg-pink-500'
    }
  };

  const colors = colorStyles[colorVariant] || colorStyles.blue;

  return (
    <label
      className={`flex-1 relative cursor-pointer group/item rounded-lg px-4 py-3 text-center border-2 transition-all duration-300
        ${isSelected ? colors.selected : colors.unselected}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <input
        type="radio"
        name="radio-option"
        value={value}
        checked={isSelected}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        className="sr-only"
      />

      {showCheckmark && isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        </div>
      )}

      <span className={`font-semibold text-sm transition-colors duration-200 ${isSelected ? colors.textSelected : colors.textUnselected}`}>
        {label}
      </span>

      <div
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300
          ${isSelected ? `w-3/4 ${colors.underlineSelected}` : `w-0 ${colors.underlineUnselected} group-hover/item:w-1/2`}
        `}
      />
    </label>
  );
};

export { RadioButton };
export default RadioButton;
