"use client";

import {
  ImageIcon,
  Moon,
  Sun,
  LayoutList,
  Presentation,
  CircleQuestionMark,
  FileText,
  Mail,
  MessageCircleMore,
} from "lucide-react";

// ============================================
// DEFAULT CONFIGURATION
// ============================================

export const defaultNavbarTheme = {
  lightBackground: "from-gray-200 via-gray-200 to-gray-200",
  darkBackground: "dark:from-gray-800 dark:via-gray-900 dark:to-gray-950",

  borderLight: "border-gray-200",
  borderDark: "dark:border-gray-800",

  textLight: "text-gray-700",
  textDark: "dark:text-gray-100",

  sectionColors: {
    blue: {
      light: "via-blue-500",
      dark: "dark:via-blue-500"
    },
    purple: {
      light: "via-purple-500",
      dark: "dark:via-purple-500"
    },
    yellow: {
      light: "via-yellow-500",
      dark: "dark:via-yellow-500"
    },
    green: {
      light: "via-green-500",
      dark: "dark:via-green-500"
    },
    red: {
      light: "via-red-500",
      dark: "dark:via-red-500"
    }
  },

  logoBackground: "from-blue-900/30 to-blue-800/40",
  logoBackgroundDark: "dark:from-gray-900 dark:to-gray-800",
  logoBorder: "border-blue-200",
  logoBorderDark: "dark:border-gray-700"
};

export const defaultNavbarBehavior = {
  desktopWidth: "320px",
  closeOnNavigate: true,
  breakpoint: 1024,
  showToggleButton: true,
  toggleButtonPosition: "fixed",
  showMobileOverlay: true,
  overlayBlur: true
};

export const defaultNavbarConfig = {
  theme: defaultNavbarTheme,
  behavior: defaultNavbarBehavior,
  logo: {
    src: "/logo1.png",
    alt: "Logo",
    width: 48,
    height: 48,
    linkTo: "/",
  },
  sections: [
    {
      title: 'Main Menu',
      gradientColor: 'blue',
      items: [
        { label: 'About Me!', href: '/', icon: CircleQuestionMark },
        { label: 'Contact Me!', href: '/contact', icon: Mail },
        {
          label: 'Download Resume',
          icon: LayoutList,
          links: [
            { label: 'Resume (MS Word)', href: '/Soomin Park - Resume 2025.docx', download: true },
            { label: 'Cover Letter (MS Word)', href: '/Soomin Park - Cover Letter 2025.docx', download: true },
            { label: 'Combined Document (PDF)', href: '/Soomin Park Resume Portfolio 2025.pdf', download: true },
          ]
        }
      ],
    },
    {
      title: 'Custom Designs',
      gradientColor: 'red',
      items: [
        {
          label: '2025 Components',
          icon: LayoutList,
          links: [
            { label: 'Components', href: '/2025/component-showcase-2025' },
            { label: 'Design System', href: '/2025/design-system-showcase-2025' },
          ],
        },
      ],
    },
    {
      title: 'Personal Projects',
      gradientColor: 'green',
      items: [
        {
          label: 'World Of Warcraft',
          icon: Presentation,
          links: [
            { label: 'LINK - Guild Item Level Tracker', href: 'https://wow-guild-raid-ilvl.vercel.app/' },
            { label: 'Description', href: '/guild-item-level-tracker' },
          ],
        },
      ],
    },
    {
      title: 'Team Projects',
      gradientColor: 'purple',
      items: [
        {
          label: 'Capstone Project (NAIT)',
          icon: Presentation,
          links: [
            { label: 'Description', href: '/capstone' },
          ],
        },
      ],
    },
  ],
};

// Sample Usage
// import {
//   HomeIcon,
//   InfoIcon,
//   UserIcon,
//   BellIcon,
//   Users2,
//   Settings,
//   Mail,
//   Search,
//   FileText,
//   BarChart,
// } from "lucide-react";
// import {
//   defaultNavbarTheme,
//   defaultNavbarBehavior,
// } from "./navbar-config";

// // ============================================
// // EXAMPLE CONFIGURATION
// // ============================================

// export const exampleNavbarConfig = {
//   // Logo configuration
//   logo: {
//     src: "/logo.png",
//     alt: "My Application Logo",
//     width: 250,
//     height: 100,
//     linkTo: "/",
//   },

//   // Theme configuration
//   theme: {
//     ...defaultNavbarTheme,
//     // Customize colors as needed
//     // lightBackground: "from-indigo-200 via-indigo-200 to-indigo-200",
//     // darkBackground: "dark:from-indigo-950 dark:via-gray-900 dark:to-gray-950",
//   },

//   // Behavior configuration
//   behavior: {
//     ...defaultNavbarBehavior,
//     // Customize behavior as needed
//     // desktopWidth: "280px",
//     // breakpoint: 768,
//     // closeOnNavigate: false,
//   },

//   // Navigation sections
//   sections: [
//     // ============================================
//     // PUBLIC SECTION (No auth required)
//     // ============================================
//     {
//       title: "General",
//       gradientColor: "blue",
//       requiresAuth: false,
//       items: [
//         {
//           label: "Home",
//           href: "/",
//           icon: HomeIcon,
//         },
//         {
//           label: "About",
//           href: "/about",
//           icon: InfoIcon,
//         },
//         {
//           label: "Contact Us",
//           href: "/contact",
//           icon: Mail,
//         },
//       ],
//     },

//     // ============================================
//     // USER SECTION (Requires authentication)
//     // ============================================
//     {
//       title: "My Space",
//       gradientColor: "amber",
//       requiresAuth: true,
//       items: [
//         {
//           label: "Profile",
//           href: "/profile",
//           icon: UserIcon,
//         },
//         {
//           label: "Notifications",
//           href: "/notifications",
//           icon: BellIcon,
//           badge: 5, // Optional badge
//         },
//         {
//           label: "Settings",
//           href: "/settings",
//           icon: Settings,
//         },
//       ],
//     },

//     // ============================================
//     // ADMIN SECTION (Requires Admin role)
//     // ============================================
//     {
//       title: "Admin Suite",
//       gradientColor: "purple",
//       requiresAuth: true,
//       requiresRole: ["Admin"],
//       items: [
//         {
//           label: "Search Users",
//           href: "/admin/users",
//           icon: Search,
//         },
//         // Dropdown example
//         {
//           label: "Manage",
//           icon: Users2,
//           links: [
//             {
//               label: "User Management",
//               href: "/admin/users/manage",
//               icon: Users2,
//             },
//             {
//               label: "Content Management",
//               href: "/admin/content",
//               icon: FileText,
//             },
//             {
//               label: "Analytics",
//               href: "/admin/analytics",
//               icon: BarChart,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// // ============================================
// // MINIMAL CONFIGURATION EXAMPLE
// // ============================================

// export const minimalNavbarConfig = {
//   logo: {
//     src: "/logo.png",
//     alt: "App Logo",
//     width: 200,
//     height: 80,
//     linkTo: "/",
//   },
//   theme: defaultNavbarTheme,
//   behavior: defaultNavbarBehavior,
//   sections: [
//     {
//       title: "Navigation",
//       gradientColor: "blue",
//       items: [
//         { label: "Home", href: "/", icon: HomeIcon },
//         { label: "About", href: "/about", icon: InfoIcon },
//       ],
//     },
//   ],
// };