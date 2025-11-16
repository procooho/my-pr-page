"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// FeatureShowcase Component

// An animated carousel/showcase for displaying features or offerings
// Features auto-rotation and manual navigation

// {Array} features - Array of feature objects with { icon, title, description }
// {number} autoRotateInterval - Auto-rotation interval in ms (0 to disable)
// {boolean} showNavigation - Show navigation arrows
// {boolean} showIndicators - Show dot indicators
// {string} colorVariant - Color theme: blue, purple, green, orange, red, yellow, pink, indigo
// {string} layout - Grid layout: '4-col' (default), '3-col', '2-col', '1-col'
// {string} animationStyle - Animation style: 'scale' (default), 'fade', 'slide'
// {boolean} showBadge - Show active indicator badge

export function FeatureShowcase({
  features = [],
  autoRotateInterval = 5000,
  showNavigation = true,
  showIndicators = true,
  colorVariant = "blue",
  layout = "4-col",
  animationStyle = "scale",
  showBadge = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Color variant configurations
  const colorConfigs = {
    blue: {
      active: "border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-blue-500",
      titleColor: "text-blue-600 dark:text-blue-400",
      badgeColor: "bg-blue-500",
      indicatorColor: "bg-blue-500",
      indicatorHover: "hover:bg-blue-300",
      navBorder: "border-blue-500/30 hover:border-blue-500",
      navHover: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
      navIcon: "text-blue-500",
      bgEffect: "from-blue-500/10 to-cyan-500/10",
    },
    purple: {
      active: "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-purple-500",
      titleColor: "text-purple-600 dark:text-purple-400",
      badgeColor: "bg-purple-500",
      indicatorColor: "bg-purple-500",
      indicatorHover: "hover:bg-purple-300",
      navBorder: "border-purple-500/30 hover:border-purple-500",
      navHover: "hover:bg-purple-50 dark:hover:bg-purple-900/30",
      navIcon: "text-purple-500",
      bgEffect: "from-purple-500/10 to-pink-500/10",
    },
    green: {
      active: "border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-green-500",
      titleColor: "text-green-600 dark:text-green-400",
      badgeColor: "bg-green-500",
      indicatorColor: "bg-green-500",
      indicatorHover: "hover:bg-green-300",
      navBorder: "border-green-500/30 hover:border-green-500",
      navHover: "hover:bg-green-50 dark:hover:bg-green-900/30",
      navIcon: "text-green-500",
      bgEffect: "from-green-500/10 to-emerald-500/10",
    },
    orange: {
      active: "border-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-orange-500",
      titleColor: "text-orange-600 dark:text-orange-400",
      badgeColor: "bg-orange-500",
      indicatorColor: "bg-orange-500",
      indicatorHover: "hover:bg-orange-300",
      navBorder: "border-orange-500/30 hover:border-orange-500",
      navHover: "hover:bg-orange-50 dark:hover:bg-orange-900/30",
      navIcon: "text-orange-500",
      bgEffect: "from-orange-500/10 to-amber-500/10",
    },
    red: {
      active: "border-red-500 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-red-500 to-rose-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-red-500",
      titleColor: "text-red-600 dark:text-red-400",
      badgeColor: "bg-red-500",
      indicatorColor: "bg-red-500",
      indicatorHover: "hover:bg-red-300",
      navBorder: "border-red-500/30 hover:border-red-500",
      navHover: "hover:bg-red-50 dark:hover:bg-red-900/30",
      navIcon: "text-red-500",
      bgEffect: "from-red-500/10 to-rose-500/10",
    },
    yellow: {
      active: "border-yellow-500 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-yellow-500 to-amber-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-yellow-600",
      titleColor: "text-yellow-600 dark:text-yellow-400",
      badgeColor: "bg-yellow-500",
      indicatorColor: "bg-yellow-500",
      indicatorHover: "hover:bg-yellow-300",
      navBorder: "border-yellow-500/30 hover:border-yellow-500",
      navHover: "hover:bg-yellow-50 dark:hover:bg-yellow-900/30",
      navIcon: "text-yellow-600",
      bgEffect: "from-yellow-500/10 to-amber-500/10",
    },
    pink: {
      active: "border-pink-500 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-pink-500",
      titleColor: "text-pink-600 dark:text-pink-400",
      badgeColor: "bg-pink-500",
      indicatorColor: "bg-pink-500",
      indicatorHover: "hover:bg-pink-300",
      navBorder: "border-pink-500/30 hover:border-pink-500",
      navHover: "hover:bg-pink-50 dark:hover:bg-pink-900/30",
      navIcon: "text-pink-500",
      bgEffect: "from-pink-500/10 to-rose-500/10",
    },
    indigo: {
      active: "border-indigo-500 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30",
      inactive: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
      iconInactive: "bg-gray-100 dark:bg-gray-700",
      iconColor: "text-indigo-500",
      titleColor: "text-indigo-600 dark:text-indigo-400",
      badgeColor: "bg-indigo-500",
      indicatorColor: "bg-indigo-500",
      indicatorHover: "hover:bg-indigo-300",
      navBorder: "border-indigo-500/30 hover:border-indigo-500",
      navHover: "hover:bg-indigo-50 dark:hover:bg-indigo-900/30",
      navIcon: "text-indigo-500",
      bgEffect: "from-indigo-500/10 to-blue-500/10",
    },
  };

  // Layout configurations
  const layoutConfigs = {
    "4-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "3-col": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "2-col": "grid-cols-1 md:grid-cols-2",
    "1-col": "grid-cols-1",
  };

  // Animation style configurations
  const getAnimationClasses = (isActive) => {
    switch (animationStyle) {
      case 'fade':
        return isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80';
      case 'slide':
        return isActive ? 'translate-x-0' : 'translate-x-1 hover:translate-x-0';
      case 'scale':
      default:
        return isActive ? 'scale-105' : 'scale-100 hover:scale-102';
    }
  };

  const colors = colorConfigs[colorVariant] || colorConfigs.blue;

  useEffect(() => {
    if (autoRotateInterval > 0) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % features.length);
      }, autoRotateInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotateInterval, features.length]);

  const handlePrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + features.length) % features.length
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % features.length);
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  if (features.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Main showcase area */}
      <div className={`grid ${layoutConfigs[layout]} gap-6`}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-xl border-2 p-6
                transition-all duration-500 ease-in-out cursor-pointer
                ${isActive ? colors.active : colors.inactive}
                ${getAnimationClasses(isActive)}
                shadow-md hover:shadow-xl
              `}
              onClick={() => handleIndicatorClick(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleIndicatorClick(index);
                }
              }}
            >
              {/* Animated background effect */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.bgEffect} animate-pulse`} />
              )}

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div
                  className={`
                  w-16 h-16 rounded-lg flex items-center justify-center
                  transition-all duration-300
                  ${isActive ? colors.iconBg + " shadow-lg" : colors.iconInactive}
                `}
                >
                  {Icon && (
                    <Icon
                      className={`w-8 h-8 ${isActive ? "text-white" : colors.iconColor
                        }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${isActive
                        ? colors.titleColor
                        : "text-gray-900 dark:text-white"
                      }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm transition-colors ${isActive
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-gray-600 dark:text-gray-400"
                      }`}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Active indicator badge */}
                {isActive && showBadge && (
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 ${colors.badgeColor} rounded-full animate-ping`} />
                    <div className={`absolute top-0 right-0 w-3 h-3 ${colors.badgeColor} rounded-full`} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      {showNavigation && features.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 ${colors.navBorder} ${colors.navHover} transition-all`}
            aria-label="Previous feature"
          >
            <ChevronLeft className={`w-6 h-6 ${colors.navIcon}`} />
          </button>
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 ${colors.navBorder} ${colors.navHover} transition-all`}
            aria-label="Next feature"
          >
            <ChevronRight className={`w-6 h-6 ${colors.navIcon}`} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showIndicators && features.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === activeIndex
                  ? `${colors.indicatorColor} w-8`
                  : `bg-gray-300 dark:bg-gray-600 ${colors.indicatorHover}`
                }
              `}
              aria-label={`Go to feature ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}