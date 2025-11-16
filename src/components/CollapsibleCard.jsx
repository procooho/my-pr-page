import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { CardContent } from "./CardContent";

// CollapsibleCard Component
// Card with collapsible content and smooth animations
// Variants: default, gradient, black, glass
// Color Themes: blue, cyan, purple, green, red, orange

export const CollapsibleCard = ({
    title,
    subtitle,
    icon: Icon,
    variant = "default",
    colorTheme = "blue",
    defaultCollapsed = false,
    collapsed,
    onCollapseChange,
    children,
}) => {
    const isControlled = collapsed !== undefined;
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const isCollapsed = isControlled ? collapsed : internalCollapsed;

    const contentWrapperRef = useRef(null);
    const contentHeight = contentWrapperRef.current?.scrollHeight || 0;

    const colorThemes = {
        blue: {
            icon: 'text-gray-700 dark:text-gray-200',
            iconBg: 'bg-gray-100 dark:bg-gray-700',
        },
        cyan: {
            icon: 'text-cyan-700 dark:text-cyan-200',
            iconBg: 'bg-cyan-100 dark:bg-cyan-700',
        },
        purple: {
            icon: 'text-purple-700 dark:text-purple-200',
            iconBg: 'bg-purple-100 dark:bg-purple-700',
        },
    };

    const theme = colorThemes[colorTheme] || colorThemes.blue;

    const variantClasses = {
        default: "bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700",
        gradient: "bg-gradient-to-br from-gray-50 to-gray-300 dark:from-gray-700 dark:to-gray-900 shadow-lg border-2 border-gray-200 dark:border-gray-700",
        black: "bg-black shadow-2xl border-2 border-cyan-500/50",
        glass: "bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/20",
    };

    const updateHeight = () => {
        if (contentWrapperRef.current) {
            contentWrapperRef.current.style.maxHeight = isCollapsed
                ? "0px"
                : contentWrapperRef.current.scrollHeight + "px";
        }
    };

    useEffect(() => {
        requestAnimationFrame(updateHeight);
    }, [isCollapsed, children]);

    const handleTransitionEnd = () => {
        if (isCollapsed) {
            contentWrapperRef.current.style.maxHeight = "0px";
        } else {
            contentWrapperRef.current.style.maxHeight = "none";
        }
    };

    const handleToggle = () => {
        const newValue = !isCollapsed;
        if (!isControlled) setInternalCollapsed(newValue);
        if (onCollapseChange) onCollapseChange(newValue);
    };

    const accentColor = variant === 'black' ? 'bg-gradient-to-b from-cyan-400 to-cyan-500' : 'bg-gradient-to-b from-blue-500 to-blue-600';
    const titleColor = variant === 'black' ? 'text-cyan-300' : 'text-gray-900 dark:text-gray-100';
    const subtitleColor = variant === 'black' ? 'text-cyan-100' : 'text-gray-500 dark:text-gray-400';
    const borderColor = variant === 'black' ? 'border-cyan-500/50' : 'border-gray-300 dark:border-gray-600';
    const chevronColor = variant === 'black' ? 'text-cyan-400' : variant === 'gradient' ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-white';

    return (
        <div
            className={`group relative rounded-xl transition-all duration-200 ${variantClasses[variant]} hover:shadow-md`}
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
            }}
        >
            {/* Animated border overlay */}
            <div className="absolute inset-[-2px] rounded-xl border-2 border-blue-300 dark:border-blue-600 opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none z-10" />

            {/* Hover effect indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            </div>

            {/* Header */}
            <div
                className={`relative px-6 pt-5 pb-3 flex items-center justify-between cursor-pointer select-none ${isCollapsed ? "" : `border-b ${borderColor}`}`}
                onClick={handleToggle}
            >
                <div className="flex items-center gap-3">
                    <div className={`w-1 h-8 ${accentColor} rounded-full`} />
                    {Icon && (
                        <div className={`p-2 rounded-lg ${variant === "gradient" ? "bg-white/20" : theme.iconBg}`}>
                            <Icon className={`w-6 h-6 ${variant === "gradient" ? "text-white" : theme.icon}`} />
                        </div>
                    )}
                    <div>
                        <h3 className={`text-lg font-bold ${titleColor}`}>{title}</h3>
                        {subtitle && (
                            <p className={`text-xs ${subtitleColor} mt-0.5`}>{subtitle}</p>
                        )}
                    </div>
                </div>

                <div className={`transition-colors p-1.5 rounded-lg ${chevronColor}`}>
                    <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${isCollapsed ? "rotate-0" : "rotate-180"}`}
                    />
                </div>
            </div>

            {/* Collapsible content */}
            <div
                ref={contentWrapperRef}
                style={{
                    maxHeight: isCollapsed ? "0px" : `${contentHeight}px`,
                    overflow: "hidden",
                    transition: "max-height 0.5s ease, opacity 0.5s ease",
                    opacity: isCollapsed ? 0 : 1,
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                <CardContent variant={variant}>{children}</CardContent>
            </div>
        </div>
    );
};
