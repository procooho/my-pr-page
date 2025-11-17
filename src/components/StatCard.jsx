import React from 'react';
import { TrendingUp, TrendingDown, MinusIcon, Info } from 'lucide-react';

// StatCard Component - Displays metrics with trend indicators

// Variants:
// - default: Standard gradient background
// - black: Black background with cyan accents
// - solid: Solid white background
// - glass: Glassmorphism effect

// Color Themes: blue, cyan, purple, green, red, orange

export const StatCard = ({
  label,
  value,
  unit = '',
  color = 'blue',
  variant = 'default',
  previousValue = null,
  higherIsBetter = true,
}) => {
  const isEmpty = value === 0 || value === '' || value === '-';
  const hasPreviousData = previousValue !== null && previousValue !== 0;

  let trend = 'neutral';
  let trendPercentage = 0;

  if (!isEmpty && hasPreviousData) {
    const change = value - previousValue;
    trendPercentage = previousValue !== 0 ? ((change / previousValue) * 100).toFixed(1) : 0;
    if (change > 0) trend = 'up';
    else if (change < 0) trend = 'down';
  }

  const isPositiveTrend = (trend === 'up' && higherIsBetter) || (trend === 'down' && !higherIsBetter);

  const colorClasses = {
    blue: {
      dot: 'bg-blue-500 dark:bg-blue-500',
      border: 'border-blue-500 dark:border-blue-500',
      gradient: 'from-gray-50 to-gray-300 dark:from-gray-700 dark:to-gray-900',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
    cyan: {
      dot: 'bg-cyan-500',
      border: 'border-cyan-500 dark:border-cyan-500',
      gradient: 'from-gray-50 to-gray-300 dark:from-gray-700 dark:to-gray-900',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
    purple: {
      dot: 'bg-purple-500',
      border: 'border-purple-500 dark:border-purple-500',
      gradient: 'from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
    green: {
      dot: 'bg-green-500',
      border: 'border-green-500 dark:border-green-500',
      gradient: 'from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
    red: {
      dot: 'bg-red-500',
      border: 'border-red-500 dark:border-red-500',
      gradient: 'from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
    black: {
      dot: 'bg-orange-500',
      border: 'border-orange-500 dark:border-orange-500',
      gradient: 'from-black-50 to-black-200 dark:from-black-900 dark:to-black-950',
      label: 'text-gray-600 dark:text-white',
      value: 'text-gray-900 dark:text-white',
    },
  };

  const theme = colorClasses[color] || colorClasses.blue;

  const variantClasses = {
    default: `bg-gradient-to-br ${theme.gradient}`,
    black: 'bg-black',
    solid: 'bg-white dark:bg-gray-800',
    glass: 'bg-white/10 dark:bg-white/5 backdrop-blur-md',
  };

  const labelClass = variant === 'black' 
    ? 'text-cyan-400' 
    : theme.label;
  
  const valueClass = variant === 'black'
    ? 'text-cyan-100'
    : isEmpty
    ? 'text-gray-400 dark:text-gray-600'
    : theme.value;

  const dotClass = variant === 'black' ? 'bg-cyan-500' : theme.dot;

  const borderClass = variant === 'black' ? 'bg-cyan-500' : theme.border;

  return (
    <div
      className={`
        group relative 
        ${variantClasses[variant]}
        border-2 ${variant === 'black' ? 'border-cyan-500/50' : 'border-gray-200 dark:border-gray-700'}
        rounded-xl p-4
        hover:shadow-md transition-all duration-200
      `}
    >
      {/* Animated border overlay on hover */}
      <div className={`absolute inset-[-2px] rounded-xl border-2 ${variant === 'black' ? 'border-cyan-400' : 'border-blue-300 dark:border-blue-600'} opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none`} />

      {/* Main content */}
      <div className="flex items-between justify-between gap-3">
        <div className="flex flex-col items-between justify-between min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2 h-2 ${dotClass} rounded-full`} />
            <label className={`text-md font-semibold uppercase tracking-wide ${labelClass}`}>
              {label}
            </label>
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${valueClass}`}>
              {value || '-'}
            </span>
            {unit && <span className="text-sm font-medium text-gray-500 dark:text-white">{unit}</span>}
          </div>
        </div>

        {/* Trend indicator */}
        <div className={`flex flex-col items-center justify-center`}>
          {!isEmpty && hasPreviousData && trend !== 'neutral' && (
            <div className={`w-20 h-20 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg mr-2 border-3 ${isPositiveTrend ? ("border-green-500 bg-green-400/10") :("border-red-500 bg-red-400/10")}`}>
              {isPositiveTrend ? (
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-500" strokeWidth={3} />
              ) : (
                <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-500" strokeWidth={3} />
              )}
              <span className={`text-lg font-bold whitespace-nowrap ${
                isPositiveTrend ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
              }`}>
                {Math.abs(trendPercentage)}%
              </span>
            </div>
          )}

          {!isEmpty && hasPreviousData && trend === 'neutral' && (
            <div className="w-20 h-20 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg mr-2 border-3 border-gray-500 bg-gray-400/10">
              <MinusIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" strokeWidth={3} />
              <span className="text-lg font-bold text-gray-600 dark:text-gray-400 whitespace-nowrap">0%</span>
            </div>
          )}

          {!isEmpty && !hasPreviousData && (
            <div className="w-20 h-20 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg mr-2 border-3 border-blue-500 bg-blue-400/10">
              <Info className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <span className="text-md font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">New</span>
            </div>
          )}

          {isEmpty && (
            <div className="w-20 h-20 flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg mr-2 border-3 border-amber-500 bg-amber-400/10">
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              </div>
              <span className="text-md font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap mt-2">No data</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover effect indicator */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className={`w-1.5 h-1.5 ${dotClass} rounded-full`} />
      </div>
    </div>
  );
};
