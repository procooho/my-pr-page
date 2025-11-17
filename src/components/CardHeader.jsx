import React from 'react';

// CardHeader Component
// Displays title and optional subtitle with accent bar

// Variants:
// - default: Standard header
// - special: Featured/emphasized header
// - black: Black background theme
// - minimal: Minimal styling without accent bar
// - bold: Extra bold with larger accent

// Color Themes: blue, cyan, purple, green, red, orange, yellow, pink

export const CardHeader = ({
  title,
  subtitle,
  variant = 'default',
  colorTheme = 'blue',
  icon: Icon,
  badge,
  actions,
}) => {
  const isSpecial = variant === 'special';
  const isBlack = variant === 'black';
  const isMinimal = variant === 'minimal';
  const isBold = variant === 'bold';

  // Color theme mappings
  const colorThemes = {
    blue: {
      accent: 'from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-blue-500 dark:text-blue-50',
      badge: 'text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-600',
      border: 'border-blue-300 dark:border-blue-600',
    },
    cyan: {
      accent: 'from-cyan-500 to-cyan-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-cyan-500 dark:text-cyan-50',
      badge: 'text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/50 border-cyan-300 dark:border-cyan-600',
      border: 'border-cyan-300 dark:border-cyan-600',
    },
    purple: {
      accent: 'from-purple-500 to-purple-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-purple-500 dark:text-purple-50',
      badge: 'text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/50 border-purple-300 dark:border-purple-600',
      border: 'border-purple-300 dark:border-purple-600',
    },
    green: {
      accent: 'from-green-500 to-green-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-green-500 dark:text-green-50',
      badge: 'text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-600',
      border: 'border-green-300 dark:border-green-600',
    },
    red: {
      accent: 'from-red-500 to-red-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-red-500 dark:text-red-50',
      badge: 'text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 border-red-300 dark:border-red-600',
      border: 'border-red-300 dark:border-red-600',
    },
    orange: {
      accent: 'from-orange-500 to-orange-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-orange-500 dark:text-orange-50',
      badge: 'text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/50 border-orange-300 dark:border-orange-600',
      border: 'border-orange-300 dark:border-orange-600',
    },
    yellow: {
      accent: 'from-yellow-500 to-yellow-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-yellow-500 dark:text-yellow-50',
      badge: 'text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/50 border-yellow-300 dark:border-yellow-600',
      border: 'border-yellow-300 dark:border-yellow-600',
    },
    pink: {
      accent: 'from-pink-500 to-pink-600',
      title: 'text-black dark:text-white',
      subtitle: 'text-pink-500 dark:text-pink-50',
      badge: 'text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-900/50 border-pink-300 dark:border-pink-600',
      border: 'border-pink-300 dark:border-pink-600',
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;

  // Variant-specific classes
  const accentWidth = isBold ? 'w-2' : isSpecial ? 'w-2' : 'w-1.5';
  const accentHeight = isBold ? 'h-14' : isSpecial ? 'h-12' : 'h-10';
  const titleSize = isBold ? 'text-2xl' : isSpecial ? 'text-2xl' : 'text-xl';
  const subtitleSize = isSpecial ? 'text-sm' : 'text-xs';

  // Black variant overrides
  const titleClass = isBlack 
    ? 'text-cyan-300 dark:text-cyan-300' 
    : isSpecial 
    ? 'text-blue-600 dark:text-cyan-300' 
    : theme.title;

  const subtitleClass = isBlack
    ? 'text-cyan-100 dark:text-cyan-100'
    : isSpecial
    ? 'text-blue-600 dark:text-cyan-100'
    : theme.subtitle;

  const borderClass = isBlack
    ? 'border-cyan-500/50'
    : isSpecial
    ? 'border-blue-400 dark:border-cyan-500'
    : theme.border;

  const accentClass = isBlack
    ? 'from-cyan-400 to-cyan-500'
    : theme.accent;

  if (isMinimal) {
    return (
      <div className="relative px-6 pt-5 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </div>
            )}
            <div>
              <h3 className={`${titleSize} font-bold text-gray-900 dark:text-gray-100`}>
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {subtitle}
                </p>
              )}
            </div>
            {badge && (
              <span className="px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full">
                {badge}
              </span>
            )}
          </div>
          {actions && <div>{actions}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative px-6 pt-5 pb-3 border-b ${borderClass}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Accent bar */}
          <div className={`${accentWidth} ${accentHeight} bg-gradient-to-b ${accentClass} rounded-full ${isSpecial ? 'shadow-lg shadow-cyan-500/50' : ''}`} />

          {Icon && (
            <div className={`p-2 rounded-lg ${isBlack ? 'bg-cyan-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <Icon className={`w-6 h-6 ${isBlack ? 'text-cyan-400' : 'text-gray-700 dark:text-gray-200'}`} />
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className={`${titleSize} font-bold ${titleClass}`}>
                {title}
              </h3>
              {isSpecial && (
                <span className={`px-3 py-1 text-xs font-semibold ${theme.badge} rounded-full border`}>
                  Featured
                </span>
              )}
              {badge && !isSpecial && (
                <span className={`px-3 py-1 text-xs font-semibold ${isBlack ? 'text-cyan-300 bg-cyan-900/30 border-cyan-500/50' : theme.badge} rounded-full border`}>
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className={`${subtitleSize} mt-0.5 ${isSpecial ? 'font-medium' : ''} ${subtitleClass}`}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {actions && <div>{actions}</div>}
      </div>
    </div>
  );
};
