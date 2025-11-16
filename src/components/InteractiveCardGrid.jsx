"use client";

import React, { useState, useEffect } from "react";
import { AnimatedServiceCard } from "./AnimatedServiceCard";

// InteractiveCardGrid Component

// A 2x2 grid of cards that animate vertically when hovered, revealing a center content card.
// Perfect for showcasing services, features, or offerings with detailed descriptions.

// Features:
// - 2x2 grid layout that collapses to corners on hover
// - Smooth vertical push animation
// - Center content card reveals on hover
// - Customizable colors per section
// - Responsive design
 
// {Array} items - Array of 4 items with { title, description, imagePath, icon }
// {string} colorVariant - Color theme ('blue', 'yellow', 'purple', etc.)
// {string} centerBorderColor - Border color for center card ('blue', 'yellow', 'purple', etc.)

// Example
// <InteractiveCardGrid
//   items={[
//     { title: "Service 1", description: "Details...", imagePath: "/icon1.png" },
//     { title: "Service 2", description: "Details...", imagePath: "/icon2.png" },
//     { title: "Service 3", description: "Details...", imagePath: "/icon3.png" },
//     { title: "Service 4", description: "Details...", imagePath: "/icon4.png" },
//   ]}
//   colorVariant="blue"
//   centerBorderColor="blue"
// />

export function InteractiveCardGrid({ 
  items = [], 
  colorVariant = 'blue',
  centerBorderColor = 'blue',
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Ensure we have exactly 4 items
  if (items.length !== 4) {
    console.warn('InteractiveCardGrid requires exactly 4 items');
    return null;
  }

  // Border color mappings for center card
  const borderColors = {
    blue: 'border-blue-200 dark:border-blue-900',
    yellow: 'border-yellow-200 dark:border-yellow-900',
    purple: 'border-purple-200 dark:border-purple-900',
    green: 'border-green-200 dark:border-green-900',
    red: 'border-red-200 dark:border-red-900',
    orange: 'border-orange-200 dark:border-orange-900',
    pink: 'border-pink-200 dark:border-pink-900',
    cyan: 'border-cyan-200 dark:border-cyan-900',
  };

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

  const borderColorClass = borderColors[centerBorderColor] || borderColors.blue;
  const colors = colorVariants[colorVariant] || colorVariants.blue;

  // Custom animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .animate-slide-up {
        animation: slideUp 0.4s ease-out;
      }
      .animate-fade-in {
        animation: fadeIn 0.4s ease-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-700 ease-out"
      style={{
        minHeight: hoveredIndex !== null ? '800px' : '500px'
      }}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="w-full max-w-6xl relative" style={{ height: hoveredIndex !== null ? '800px' : '500px' }}>
        
        {/* Card 0 - Top Left, slides UP when hovering */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: '0',
            right: '50%',
            paddingRight: '0.75rem',
            top: hoveredIndex !== null ? '0px' : 'calc(50% - 12rem)',
            transform: hoveredIndex === 0 ? 'scale(0.95) rotate(0deg)' : hoveredIndex !== null ? 'scale(0.85) rotate(-3deg)' : 'scale(1)',
            opacity: hoveredIndex === null || hoveredIndex === 0 ? 1 : 0.7,
          }}
          onMouseEnter={() => setHoveredIndex(0)}
        >
          <AnimatedServiceCard
            {...items[0]}
            isHovered={hoveredIndex === 0}
            onHover={() => {}}
            onLeave={() => {}}
            colorVariant={colorVariant}
            className={`border-2 ${borderColorClass}`}
          />
        </div>

        {/* Card 1 - Top Right, slides UP when hovering */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: '50%',
            right: '0',
            paddingLeft: '0.75rem',
            top: hoveredIndex !== null ? '0px' : 'calc(50% - 12rem)',
            transform: hoveredIndex === 1 ? 'scale(0.95) rotate(0deg)' : hoveredIndex !== null ? 'scale(0.85) rotate(3deg)' : 'scale(1)',
            opacity: hoveredIndex === null || hoveredIndex === 1 ? 1 : 0.7,
          }}
          onMouseEnter={() => setHoveredIndex(1)}
        >
          <AnimatedServiceCard
            {...items[1]}
            isHovered={hoveredIndex === 1}
            onHover={() => {}}
            onLeave={() => {}}
            colorVariant={colorVariant}
            className={`border-2 ${borderColorClass}`}
          />
        </div>

        {/* Card 2 - Bottom Left, slides DOWN when hovering */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: '0',
            right: '50%',
            paddingRight: '0.75rem',
            bottom: hoveredIndex !== null ? '0px' : 'calc(50% - 12rem)',
            transform: hoveredIndex === 2 ? 'scale(0.95) rotate(0deg)' : hoveredIndex !== null ? 'scale(0.85) rotate(3deg)' : 'scale(1)',
            opacity: hoveredIndex === null || hoveredIndex === 2 ? 1 : 0.7,
          }}
          onMouseEnter={() => setHoveredIndex(2)}
        >
          <AnimatedServiceCard
            {...items[2]}
            isHovered={hoveredIndex === 2}
            onHover={() => {}}
            onLeave={() => {}}
            colorVariant={colorVariant}
            className={`border-2 ${borderColorClass}`}
          />
        </div>

        {/* Card 3 - Bottom Right, slides DOWN when hovering */}
        <div
          className="absolute transition-all duration-700 ease-out"
          style={{
            left: '50%',
            right: '0',
            paddingLeft: '0.75rem',
            bottom: hoveredIndex !== null ? '0px' : 'calc(50% - 12rem)',
            transform: hoveredIndex === 3 ? 'scale(0.95) rotate(0deg)' : hoveredIndex !== null ? 'scale(0.85) rotate(-3deg)' : 'scale(1)',
            opacity: hoveredIndex === null || hoveredIndex === 3 ? 1 : 0.7,
          }}
          onMouseEnter={() => setHoveredIndex(3)}
        >
          <AnimatedServiceCard
            {...items[3]}
            isHovered={hoveredIndex === 3}
            onHover={() => {}}
            onLeave={() => {}}
            colorVariant={colorVariant}
            className={`border-2 ${borderColorClass}`}
          />
        </div>

        {/* Center content card - only visible when hovering */}
        {hoveredIndex !== null && (
          <div
            key={hoveredIndex}
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full lg:max-w-2xl xl:max-w-3xl px-8 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16 ${colors.normalBg} rounded-xl shadow-2xl border-2 ${borderColorClass} transition-all duration-500 ease-out z-10 animate-fade-in animate-slide-up`}
          >
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
              {items[hoveredIndex].title}
            </p>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              style={{ animationDelay: '100ms' }}
            >
              {items[hoveredIndex].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
