import React from 'react';
import { CheckCircle2 } from 'lucide-react';


// Stepper Component
// Multi-step progress indicator with visual feedback

// Variants: default, compact, minimal
// Color Themes: blue, cyan, purple, green, orange

// Perfect for multi-step forms, wizards, and progress tracking


export const Stepper = ({
  steps = [],
  currentStep = 1,
  variant = 'default',
  colorTheme = 'blue',
  className = '',
}) => {
  const colorThemes = {
    blue: {
      active: 'from-blue-500 to-cyan-500',
      activeShadow: 'shadow-lg',
      activeText: 'text-blue-600 dark:text-blue-400',
      complete: 'bg-green-500',
      completeText: 'text-green-600 dark:text-green-400',
      incomplete: 'bg-gray-200 dark:bg-gray-700',
      incompleteText: 'text-gray-500 dark:text-gray-400',
      progressComplete: 'bg-green-500',
      progressIncomplete: 'bg-gray-200 dark:bg-gray-700',
    },
    cyan: {
      active: 'from-cyan-500 to-teal-500',
      activeShadow: 'shadow-lg shadow-cyan-500/50',
      activeText: 'text-cyan-600 dark:text-cyan-400',
      complete: 'bg-green-500',
      completeText: 'text-green-600 dark:text-green-400',
      incomplete: 'bg-gray-200 dark:bg-gray-700',
      incompleteText: 'text-gray-500 dark:text-gray-400',
      progressComplete: 'bg-green-500',
      progressIncomplete: 'bg-gray-200 dark:bg-gray-700',
    },
    purple: {
      active: 'from-purple-500 to-pink-500',
      activeShadow: 'shadow-lg shadow-purple-500/50',
      activeText: 'text-purple-600 dark:text-purple-400',
      complete: 'bg-green-500',
      completeText: 'text-green-600 dark:text-green-400',
      incomplete: 'bg-gray-200 dark:bg-gray-700',
      incompleteText: 'text-gray-500 dark:text-gray-400',
      progressComplete: 'bg-green-500',
      progressIncomplete: 'bg-gray-200 dark:bg-gray-700',
    },
    green: {
      active: 'from-green-500 to-emerald-500',
      activeShadow: 'shadow-lg shadow-green-500/50',
      activeText: 'text-green-600 dark:text-green-400',
      complete: 'bg-green-600',
      completeText: 'text-green-700 dark:text-green-300',
      incomplete: 'bg-gray-200 dark:bg-gray-700',
      incompleteText: 'text-gray-500 dark:text-gray-400',
      progressComplete: 'bg-green-600',
      progressIncomplete: 'bg-gray-200 dark:bg-gray-700',
    },
    orange: {
      active: 'from-orange-500 to-red-500',
      activeShadow: 'shadow-lg shadow-orange-500/50',
      activeText: 'text-orange-600 dark:text-orange-400',
      complete: 'bg-green-500',
      completeText: 'text-green-600 dark:text-green-400',
      incomplete: 'bg-gray-200 dark:bg-gray-700',
      incompleteText: 'text-gray-500 dark:text-gray-400',
      progressComplete: 'bg-green-500',
      progressIncomplete: 'bg-gray-200 dark:bg-gray-700',
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;
  
  const stepSize = variant === 'compact' ? 'w-10 h-10' : 'w-12 h-12';
  const textSize = variant === 'compact' ? 'text-sm' : 'text-base';

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isComplete = currentStep > stepNumber;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={stepNumber}>
              {/* Step Circle */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`${stepSize} rounded-full flex items-center justify-center font-semibold text-lg transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${theme.active} text-white ${theme.activeShadow} scale-110`
                      : isComplete
                      ? `${theme.complete} text-white`
                      : `${theme.incomplete} ${theme.incompleteText}`
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    stepNumber
                  )}
                </div>

                {/* Step Label */}
                {variant !== 'minimal' && (
                  <p
                    className={`${textSize} font-medium whitespace-nowrap ${
                      isActive
                        ? theme.activeText
                        : isComplete
                        ? theme.completeText
                        : theme.incompleteText
                    }`}
                  >
                    {typeof step === 'string' ? step : step.label}
                  </p>
                )}
              </div>

              {/* Progress Line */}
              {!isLast && (
                <div
                  className={`flex-1 h-1 mx-4 rounded transition-all ${
                    isComplete
                      ? theme.progressComplete
                      : theme.progressIncomplete
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
