import React from 'react';
import { ChartNoAxesCombined } from 'lucide-react';

// NoDataCard Component
// Empty state message with icon

// Variants: default, black, minimal

export const NoDataCard = ({ title, message, variant = 'default' }) => {
  const iconBg = variant === 'black'
    ? 'bg-cyan-900/30'
    : 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30';

  const iconColor = variant === 'black'
    ? 'text-cyan-400'
    : 'text-blue-600 dark:text-blue-400';

  const titleColor = variant === 'black'
    ? 'text-cyan-300'
    : 'text-gray-700 dark:text-gray-300';

  const messageColor = variant === 'black'
    ? 'text-cyan-100'
    : 'text-gray-500 dark:text-gray-400';

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className={`w-16 h-16 rounded-full ${iconBg} flex items-center justify-center`}>
        <ChartNoAxesCombined className={`w-8 h-8 ${iconColor}`} />
      </div>
      <div className="text-center">
        <h3 className={`text-base font-semibold ${titleColor} mb-1`}>{title}</h3>
        <p className={`text-sm ${messageColor}`}>{message}</p>
      </div>
    </div>
  );
};

export default NoDataCard;
