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
    hoverable = true,
    scaleOnHover = true,
    children,
}) => {
    const isControlled = collapsed !== undefined;
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const [isHovered, setIsHovered] = useState(false);
    const isCollapsed = isControlled ? collapsed : internalCollapsed;

    const contentWrapperRef = useRef(null);
    const contentHeight = contentWrapperRef.current?.scrollHeight || 0;

    const colorThemes = {
        blue: {
            icon: 'text-blue-700 dark:text-blue-200',
            iconBg: 'bg-blue-100 dark:bg-blue-700',
            accent: 'bg-gradient-to-b from-blue-500 to-blue-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-blue-300 dark:border-blue-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-blue-500',
        },
        cyan: {
            icon: 'text-cyan-700 dark:text-cyan-200',
            iconBg: 'bg-cyan-100 dark:bg-cyan-700',
            accent: 'bg-gradient-to-b from-cyan-500 to-cyan-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-cyan-300 dark:border-cyan-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-cyan-500',
        },
        purple: {
            icon: 'text-purple-700 dark:text-purple-200',
            iconBg: 'bg-purple-100 dark:bg-purple-700',
            accent: 'bg-gradient-to-b from-purple-500 to-purple-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-purple-300 dark:border-purple-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-purple-500',
        },
        green: {
            icon: 'text-green-700 dark:text-green-200',
            iconBg: 'bg-green-100 dark:bg-green-700',
            accent: 'bg-gradient-to-b from-green-500 to-green-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-green-300 dark:border-green-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-green-500',
        },
        red: {
            icon: 'text-red-700 dark:text-red-200',
            iconBg: 'bg-red-100 dark:bg-red-700',
            accent: 'bg-gradient-to-b from-red-500 to-red-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-red-300 dark:border-red-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-red-500',
        },
        orange: {
            icon: 'text-orange-700 dark:text-orange-200',
            iconBg: 'bg-orange-100 dark:bg-orange-700',
            accent: 'bg-gradient-to-b from-orange-500 to-orange-600',
            title: 'text-gray-900 dark:text-gray-100',
            subtitle: 'text-gray-500 dark:text-gray-400',
            border: 'border-gray-300 dark:border-gray-600',
            hoverBorder: 'border-orange-300 dark:border-orange-600',
            chevron: 'text-gray-600 dark:text-white',
            dot: 'bg-orange-500',
        },
    };

    const theme = colorThemes[colorTheme] || colorThemes.blue;

    const variantClasses = {
        default: "bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700",
        gradient: "bg-gradient-to-br from-gray-50 to-gray-300 dark:from-gray-700 dark:to-gray-900 shadow-lg border-2 border-gray-200 dark:border-gray-700",
        black: "bg-black shadow-2xl border-2 border-cyan-500/50",
        glass: "bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/20",
    };

    // Override theme colors for black and gradient variants
    const accentColor = variant === 'black'
        ? 'bg-gradient-to-b from-cyan-400 to-cyan-500'
        : variant === 'gradient'
            ? theme.accent
            : theme.accent;

    const titleColor = variant === 'black'
        ? 'text-cyan-300'
        : variant === 'gradient'
            ? 'text-gray-900 dark:text-white'
            : theme.title;

    const subtitleColor = variant === 'black'
        ? 'text-cyan-100'
        : variant === 'gradient'
            ? 'text-gray-700 dark:text-gray-300'
            : theme.subtitle;

    const borderColor = variant === 'black'
        ? 'border-cyan-500/50'
        : theme.border;

    const chevronColor = variant === 'black'
        ? 'text-cyan-400'
        : variant === 'gradient'
            ? 'text-gray-900 dark:text-white'
            : theme.chevron;

    const hoverBorderColor = variant === 'black'
        ? 'border-cyan-400 dark:border-cyan-300'
        : theme.hoverBorder;

    const dotColor = variant === 'black'
        ? 'bg-cyan-400'
        : theme.dot;

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

    return (
        <div
            className={`relative rounded-xl transition-all duration-200 my-5 ${variantClasses[variant]} ${scaleOnHover ? 'hover:scale-[103%]' : ''} ${hoverable && isHovered ? 'shadow-md' : ''}`}
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
            }}
            onMouseEnter={() => hoverable && setIsHovered(true)}
            onMouseLeave={() => hoverable && setIsHovered(false)}
        >
            {/* Animated border overlay */}
            {hoverable && (
                <div className={`absolute inset-[-2px] rounded-xl border-2 ${hoverBorderColor} transition-opacity pointer-events-none z-10 ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
            )}

            {/* Hover effect indicator */}
            {hoverable && (
                <div className={`absolute top-2 right-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`} />
                </div>
            )}

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