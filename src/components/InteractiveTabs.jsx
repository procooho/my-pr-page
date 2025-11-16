import React, { useState } from 'react';
import { MapPin, Clock, PhoneCall, Share2, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

// InteractiveTabs Component
// Tabbed interface with hover activation and animated content display

// Features:
// - 4 tabs that activate on hover or click
// - Smooth content transitions with fade and slide animations
// - Fully customizable tab data
// - Responsive grid layout (2x2 on mobile, 1x4 on desktop)
// - Different content types: location map, schedule, contact info, social links

// Color Variants:
// - blue (default)
// - purple
// - green
// - red

// X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Individual Tab Card Component
const TabCard = ({ title, icon: Icon, isActive, onHover, colorVariant = 'blue' }) => {
  const colorVariants = {
    blue: {
      active: 'from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900',
      hover: 'hover:shadow-xl',
    },
    purple: {
      active: 'from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900',
      hover: 'hover:shadow-xl',
    },
    green: {
      active: 'from-green-500 to-green-700 dark:from-green-600 dark:to-green-900',
      hover: 'hover:shadow-xl',
    },
    red: {
      active: 'from-red-500 to-red-700 dark:from-red-600 dark:to-red-900',
      hover: 'hover:shadow-xl',
    },
  };

  const colors = colorVariants[colorVariant] || colorVariants.blue;

  return (
    <div
      onMouseEnter={onHover}
      onClick={onHover}
      className={`flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 rounded-xl transition-all duration-500 ease-out cursor-pointer touch-auto ${isActive
        ? `bg-gradient-to-br ${colors.active} text-white transform scale-105 shadow-2xl`
        : `bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg ${colors.hover}`
        }`}
      style={{ minHeight: '100px' }}
    >
      <Icon
        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1 sm:mb-2 md:mb-3 transition-transform duration-300 ${isActive ? 'animate-bounce' : ''
          }`}
      />
      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-center leading-tight">
        {title}
      </h3>
    </div>
  );
};

export const InteractiveTabs = ({
  tabs = [],
  colorVariant = 'blue',
  borderColor = 'blue',
  minContentHeight = '500px',
}) => {
  const [activeTab, setActiveTab] = useState(0);

  // Border color variants
  const borderColors = {
    blue: 'border-blue-200 dark:border-blue-900',
    purple: 'border-purple-200 dark:border-purple-900',
    green: 'border-green-200 dark:border-green-900',
    red: 'border-red-200 dark:border-red-900',
  };

  const borderClass = borderColors[borderColor] || borderColors.blue;

  // Render content based on active tab
  const renderContent = () => {
    if (!tabs[activeTab]) return null;

    const tab = tabs[activeTab];

    return (
      <div
        key={`tab-${activeTab}`}
        className="w-full"
        style={{
          animation: 'fadeIn 0.5s ease-out, slideUp 0.5s ease-out'
        }}
      >
        {tab.content}
      </div>
    );
  };

  // Dynamic grid columns based on number of tabs
  const getGridCols = () => {
    const tabCount = tabs.length;

    // Mobile grid classes
    const mobileClass = tabCount === 1 ? 'grid-cols-1' : 'grid-cols-2';

    // Desktop grid classes
    let desktopClass = 'sm:grid-cols-4';
    if (tabCount === 1) desktopClass = 'sm:grid-cols-1';
    else if (tabCount === 2) desktopClass = 'sm:grid-cols-2';
    else if (tabCount === 3) desktopClass = 'sm:grid-cols-3';

    return `${mobileClass} ${desktopClass}`;
  };


  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="w-full">
        {/* Tab Cards Grid */}
         <div className={`grid ${getGridCols()} gap-2 sm:gap-8 mb-8`}>
          {tabs.map((tab, index) => (
            <TabCard
              key={index}
              title={tab.title}
              icon={tab.icon}
              isActive={activeTab === index}
              onHover={() => setActiveTab(index)}
              colorVariant={colorVariant}
            />
          ))}
        </div>

        {/* Content Display Area */}
        <div
          className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 border-2 ${borderClass}`}
          style={{ minHeight: minContentHeight }}
        >
          {renderContent()}
        </div>
      </div>
    </>
  );
};

// Example tab data structure for reference
export const createLocationTab = (address) => ({
  title: "Address",
  icon: MapPin,
  content: (
    <div key="address" className="w-full h-full flex flex-col"
      style={{ animation: "fadeIn 0.5s ease-out, slideUp 0.5s ease-out" }}
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Address
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
          {address.street}
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          {address.city}
        </p>
      </div>

      {/* Dynamic map URL automatically from address.mapSearchUrl */}
      <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={address.mapSearchUrl}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "300px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  )
});

export const createScheduleTab = (businessHours = [], note = '') => ({
  title: "Hours",
  icon: Clock,
  content: (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Business Hours
      </h2>
      <div className="space-y-3">
        {businessHours.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-xl transition-all duration-300 ${item.isOpen
              ? 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700'
              : 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700'
              }`}
          >
            <span className={`font-semibold ${item.isOpen
              ? 'text-green-700 dark:text-green-300'
              : 'text-gray-600 dark:text-gray-400'
              }`}>
              {item.day}
            </span>
            <span className={`${item.isOpen
              ? 'text-green-600 dark:text-green-400'
              : 'text-gray-500 dark:text-gray-500'
              }`}>
              {item.hours}
            </span>
          </div>
        ))}
        {note && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Note:</strong> {note}
            </p>
          </div>
        )}
      </div>
    </div>
  )
});

export const createContactTab = (contact = {}) => ({
  title: "Contact",
  icon: PhoneCall,
  content: (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Contact Information
      </h2>
      <div className="grid grid-cols-2 gap-4 space-y-4">
        {contact.phone && (
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group w-full h-full"
          >
            <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
              <p className="text-blue-600 dark:text-blue-400">{contact.phoneDisplay || contact.phone}</p>
            </div>
          </a>
        )}
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 group w-full h-full"
          >
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
              <p className="text-blue-600 dark:text-blue-400">{contact.email}</p>
            </div>
          </a>
        )}
        {contact.fax && (
          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl w-full h-full">
            <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Fax</p>
              <p className="text-gray-600 dark:text-gray-400">{contact.fax}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
});

export const createSocialTab = (socialLinks = []) => ({
  title: "Social",
  icon: Share2,
  content: (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Connect With Us
      </h2>
      <div className="space-y-4">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Follow us on social media:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
});

// Export XIcon for use in social links
export { XIcon };
