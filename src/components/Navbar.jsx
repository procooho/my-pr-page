"use client";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Moon,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";

// ============================================
// HELPER FUNCTIONS
// ============================================

function isNavLink(item) {
  return "href" in item;
}

function shouldShowItem(item, isAuthenticated, userRole) {
  if (item.requiresAuth && !isAuthenticated) return false;
  if (item.requiresRole && userRole && !item.requiresRole.includes(userRole)) {
    return false;
  }
  return true;
}

// ============================================
// NAV LINK ITEM
// ============================================

function NavLinkItem({ link, gradientColor, onNavigate }) {
  const Icon = link.icon;
  const isExternal = link.href.startsWith("http");

  const content = (
    <div
      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-${gradientColor}-100 dark:hover:bg-${gradientColor}-900/30 hover:translate-x-1`}
    >
      <Icon className={`w-5 h-5 text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-400 transition-colors`} />
      <span className={`text-sm font-semibold text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-400 transition-colors`}>
        {link.label}
      </span>
    </div>
  );

  if (link.download) {
    return (
      <a href={link.href} download onClick={onNavigate}>
        {content}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href}>
      {content}
    </Link>
  );
}

// ============================================
// NAV DROPDOWN ITEM
// ============================================

function NavDropdownItem({ dropdown, gradientColor, onNavigate }) {
  const [open, setOpen] = useState(false);
  const Icon = dropdown.icon;

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen(!open)}
        className={`group relative w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 hover:bg-${gradientColor}-100 dark:hover:bg-${gradientColor}-900/30 hover:translate-x-1`}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-400 transition-colors`} />
          <span className={`text-sm font-semibold text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-400 transition-colors`}>
            {dropdown.label}
          </span>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-400 transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {open && (
          <div className={`mt-2 ml-6 space-y-1 border-l-2 border-${gradientColor}-300 dark:border-${gradientColor}-800 pl-4`}>
            {dropdown.links.map((link, idx) => {
              const isExternal = link.href.startsWith("http");
              const linkContent = (
                <div className={`group px-3 py-2.5 rounded-lg transition-all hover:bg-${gradientColor}-100 dark:hover:bg-${gradientColor}-900/30 hover:translate-x-1`}>
                  <span className={`text-sm font-medium text-gray-700 dark:text-gray-100 group-hover:text-${gradientColor}-600 dark:group-hover:text-${gradientColor}-300`}>
                    {link.label}
                  </span>
                </div>
              );

              if (isExternal) {
                return (
                  <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                    {linkContent}
                  </a>
                );
              }

              return (
                <Link key={idx} href={link.href}>
                  {linkContent}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// MAIN NAVBAR COMPONENT
// ============================================

export default function Navbar({ config, user = null, userRole = null, renderUserButton, renderSignInButton }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const router = useRouter();
  const navbarRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isAuthenticated = !!user;
  const { sections, theme: navTheme, behavior, logo } = config;

  useEffect(() => {
    const width = isNavbarVisible ? behavior.desktopWidth : "0px";
    document.documentElement.style.setProperty("--navbar-width", width);
  }, [isNavbarVisible, behavior.desktopWidth]);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < behavior.breakpoint;
      setIsNavbarVisible(!isMobile);

      const width = isMobile ? "0px" : behavior.desktopWidth;
      document.documentElement.style.setProperty("--navbar-width", width);
    }
  }, [behavior.breakpoint, behavior.desktopWidth]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        window.innerWidth < behavior.breakpoint &&
        isNavbarVisible
      ) {
        const toggleButton = event.target.closest('button[aria-label="Toggle Navbar"]');
        if (!toggleButton) {
          setIsNavbarVisible(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavbarVisible, behavior.breakpoint]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleNavigate = behavior.closeOnNavigate
    ? () => window.innerWidth < behavior.breakpoint && setIsNavbarVisible(false)
    : undefined;

  // ============================================
  // Render
  // ============================================

  return (
    <>
      {/* Toggle Button */}
      {behavior.showToggleButton && (
        <button
          onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          className={`${behavior.toggleButtonPosition} top-17 z-[60] transition-all duration-300 ${isNavbarVisible ? "left-[300px]" : "left-1"}`}
          aria-label="Toggle Navbar"
        >
          <div
            className={`group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 ${isNavbarVisible
              ? "border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-300 hover:dark:border-blue-600 hover:rotate-10"
              : "border-blue-300 dark:border-blue-600 rounded-lg animate-pulse hover:-rotate-10"
              } p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-115`}
          >
            {isNavbarVisible ? (
              <ChevronLeftIcon className="h-4 w-4 text-gray-700 dark:text-gray-300 hover:scale-115" />
            ) : (
              <ChevronRightIcon className="h-4 w-4 text-gray-700 dark:text-gray-300 hover:scale-115" />
            )}
          </div>
        </button>
      )}

      {/* Sidebar */}
      <div
        ref={navbarRef}
        className={`
          fixed inset-y-0 left-0 z-50 h-screen
          overflow-y-auto overflow-x-hidden
          bg-gradient-to-b ${navTheme.lightBackground} ${navTheme.darkBackground}
          border-r-2 ${navTheme.borderLight} ${navTheme.borderDark}
          transform transition-all duration-300 ease-in-out
          ${isNavbarVisible ? "translate-x-0" : "-translate-x-full"}
          shadow-2xl
        `}
        style={{ width: behavior.desktopWidth }}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo Section */}
          <div
            className="mb-6 cursor-pointer group"
            onClick={() => {
              if (window.innerWidth < behavior.breakpoint) {
                setIsNavbarVisible(false);
              }
              router.push(logo.linkTo);
            }}
          >
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${navTheme.logoBackground} ${navTheme.logoBackgroundDark} shadow-xl border-2 ${navTheme.logoBorder} ${navTheme.logoBorderDark} transition-all duration-300 hover:shadow-2xl hover:scale-[1.05] hover:border-blue-400 dark:hover:border-blue-600`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl" />

              <div className="relative w-full h-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1.5">
            {sections.map((section, sectionIdx) => {
              if (!shouldShowItem(section, isAuthenticated, userRole)) return null;

              const colorConfig = navTheme.sectionColors[section.gradientColor];

              return (
                <div key={sectionIdx} className="pt-2 pb-3">
                  <div className="px-3 pb-2 text-xs tracking-widest text-gray-700 dark:text-gray-100 uppercase font-bold flex items-center gap-2">
                    <div className={`h-0.5 bg-gradient-to-r from-transparent ${colorConfig.light} ${colorConfig.dark} to-transparent flex-1`} />
                    <span>{section.title}</span>
                    <div className={`h-0.5 bg-gradient-to-r from-transparent ${colorConfig.light} ${colorConfig.dark} to-transparent flex-1`} />
                  </div>

                  {section.items.map((item, itemIdx) => {
                    if (!shouldShowItem(item, isAuthenticated, userRole)) return null;

                    return isNavLink(item) ? (
                      <NavLinkItem
                        key={itemIdx}
                        link={item}
                        gradientColor={section.gradientColor}
                        onNavigate={handleNavigate}
                      />
                    ) : (
                      <NavDropdownItem
                        key={itemIdx}
                        dropdown={item}
                        gradientColor={section.gradientColor}
                        onNavigate={handleNavigate}
                      />
                    );
                  })}
                </div>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto py-6 border-t-2 border-gray-200 dark:border-gray-800">
            <div className="flex justify-center items-center gap-3">
              {/* Log In */}
              {/* {isAuthenticated
                ? renderUserButton
                  ? renderUserButton()
                  : <div className="flex-1 text-sm text-gray-700 dark:text-gray-100">User Logged In</div>
                : renderSignInButton
                  ? renderSignInButton()
                  : <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Sign In</button>
              } */}

              <button
                onClick={toggleTheme}
                className="group relative flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 hover:border-blue-400 dark:hover:border-blue-600"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {mounted && (
                  <div className="relative z-10">
                    {theme === "dark"
                      ? <Sun className="w-6 h-6 text-yellow-500 transition-transform duration-300 group-hover:rotate-180" />
                      : <Moon className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:-rotate-20" />}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {behavior.showMobileOverlay && isNavbarVisible && (
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 ${behavior.overlayBlur ? "backdrop-blur-sm" : ""} z-40 transition-opacity duration-300`}
          onClick={() => setIsNavbarVisible(false)}
        />
      )}
    </>
  );
}
