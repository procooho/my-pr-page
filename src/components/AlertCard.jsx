import React from 'react';
import { TriangleAlert, CheckCircle2, XCircle, Info } from 'lucide-react';

// AlertCard Component
// Alert messages with contextual icons and colors
// Types: success, error, warning, info
// Variants: default, black, minimal

export const AlertCard = ({
  type = 'info',
  title,
  message,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    success: {
      container: 'bg-green-50 dark:bg-green-900/80 border-green-600 dark:border-green-800',
      icon: 'text-green-600 dark:text-green-400',
      title: 'text-green-600 dark:text-green-400',
      message: 'text-green-600 dark:text-green-400',
      Icon: CheckCircle2,
    },
    error: {
      container: 'bg-red-50 dark:bg-red-900/80 border-red-600 dark:border-red-800',
      icon: 'text-red-600 dark:text-red-400',
      title: 'text-red-600 dark:text-red-400',
      message: 'text-red-600 dark:text-red-400',
      Icon: XCircle,
    },
    warning: {
      container: 'bg-amber-50 dark:bg-amber-900/80 border-amber-600 dark:border-amber-800',
      icon: 'text-amber-600 dark:text-amber-400',
      title: 'text-amber-600 dark:text-amber-400',
      message: 'text-amber-600 dark:text-amber-400',
      Icon: TriangleAlert,
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/80 border-blue-600 dark:border-blue-800',
      icon: 'text-blue-600 dark:text-blue-400',
      title: 'text-blue-600 dark:text-blue-400',
      message: 'text-blue-600 dark:text-blue-400',
      Icon: Info,
    },
  };

  const blackVariants = {
    success: 'bg-black border-green-500/50 text-green-400',
    error: 'bg-black border-red-500/50 text-red-400',
    warning: 'bg-black border-yellow-500/50 text-yellow-400',
    info: 'bg-black border-cyan-500/50 text-cyan-400',
  };

  const style = variants[type] || variants.info;
  const IconComponent = style.Icon;

  const containerClass = variant === 'black' 
    ? blackVariants[type]
    : variant === 'minimal'
    ? `border-l-4 ${style.container.split(' ')[2]} bg-transparent`
    : style.container;

  return (
    <div className={`p-3 ${containerClass} border-2 rounded-lg flex items-center gap-3 ${className}`}>
      <IconComponent className={`w-10 h-10 ${style.icon} flex-shrink-0 mt-0.5`} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className={`text-lg font-bold ${style.title} mb-1`}>{title}</p>
        )}
        <p className={`text-md font-semibold ${style.message}`}>{message}</p>
      </div>
    </div>
  );
};
