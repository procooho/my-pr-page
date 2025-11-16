"use client";
import { Info, AlertTriangle, HelpCircle, AlertCircle, CheckCircle, XCircle } from "lucide-react";

// InfoButton Component
// Tooltip button with customizable icon and colors
 
// Colors: blue, yellow, red, green, purple, orange, cyan
// Shapes: info, warning, question, alert, check, error
// Variants: default, black

export function InfoButton({ 
  color = "blue", 
  shape = "info", 
  message = "No message provided",
  title = null,
  variant = "default"
}) {
  const iconMap = {
    info: Info,
    warning: AlertTriangle,
    question: HelpCircle,
    alert: AlertCircle,
    check: CheckCircle,
    error: XCircle,
  };

  const defaultTitles = {
    info: "Information",
    warning: "Warning",
    question: "Help",
    alert: "Alert",
    check: "Success",
    error: "Error",
  };

  const iconColorMap = {
    blue: "text-blue-500 dark:text-cyan-500",
    cyan: "text-cyan-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
    green: "text-green-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
  };

  const titleColorMap = {
    blue: "text-blue-300 dark:text-cyan-300",
    cyan: "text-cyan-300",
    yellow: "text-yellow-300",
    red: "text-red-300",
    green: "text-green-300",
    purple: "text-purple-300",
    orange: "text-orange-300",
  };

  const IconComponent = iconMap[shape] || Info;
  const iconColorClass = iconColorMap[color] || iconColorMap.blue;
  const titleColorClass = titleColorMap[color] || titleColorMap.blue;
  const displayTitle = title || defaultTitles[shape] || defaultTitles.info;

  const tooltipBg = variant === 'black'
    ? 'bg-black border-cyan-500/50'
    : 'bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900';

  return (
    <div className="relative group/info">
      <button className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 group-hover/info:rotate-12">
        <IconComponent className={`w-10 h-10 ${iconColorClass}`} />
      </button>

      <div className={`absolute left-35 -translate-x-1/2 top-full mt-3 w-80 ${tooltipBg} text-white text-sm rounded-xl p-4 shadow-2xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-300 z-50 border border-gray-700`}>
        <div className={`absolute -top-2 left-8 -translate-x-1/2 w-4 h-4 ${tooltipBg} transform rotate-45 border-l border-t border-gray-700`} />
        <div className="relative flex items-start gap-3">
          <div className="flex-1">
            <p className={`font-medium ${titleColorClass} mb-1`}>{displayTitle}</p>
            <p className="text-gray-300 leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
