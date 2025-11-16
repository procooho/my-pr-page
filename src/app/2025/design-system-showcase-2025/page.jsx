"use client";

import { useState } from 'react';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { CardContent } from '@/components/CardContent';
import { PageHeader, PageContainer } from '@/components/PageHeader';
import { AlertCard } from '@/components/AlertCard';
import { AnimatedServiceCard } from '@/components/AnimatedServiceCard';
import { AnimatedIndividualCard } from '@/components/AnimatedIndividualCard';
import { InteractiveCardGrid } from '@/components/InteractiveCardGrid';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import {
  InteractiveTabs,
  createLocationTab,
  createScheduleTab,
  createContactTab,
  createSocialTab,
  XIcon
} from '@/components/InteractiveTabs';
import {
  Activity,
  Sparkles,
  TrendingUp,
  Target,
  Trophy,
  Zap,
  Award,
  Goal,
  Dumbbell,
  Facebook,
  Instagram,
  Linkedin,
  Users,
  BarChart,
  Clock,
  Heart,
  Play,
  Dot,
  Check
} from 'lucide-react';

export default function ComponentShowcase() {
  const [hoveredServiceCard, setHoveredServiceCard] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Example data for InteractiveCardGrid
  const serviceItems = [
    {
      title: "Service One",
      description: "Description for the first service offering. This provides detailed information about what this service entails and how it benefits users.",
      imagePath: "/placeholder-1.png",
      icon: Target,
    },
    {
      title: "Service Two",
      description: "Description for the second service offering. Comprehensive details about features and capabilities included in this service package.",
      imagePath: "/placeholder-2.png",
      icon: Trophy,
    },
    {
      title: "Service Three",
      description: "Description for the third service offering. Information about how this service works and what value it provides to customers.",
      imagePath: "/placeholder-3.png",
      icon: Zap,
    },
    {
      title: "Service Four",
      description: "Description for the fourth service offering. Details about features, benefits, and how users can take advantage of this service.",
      imagePath: "/placeholder-4.png",
      icon: Award,
    },
  ];

  const featureItems = [
    {
      title: "Feature One",
      description: "First key feature of the platform. Description explaining the benefits and how this feature works.",
      imagePath: "/placeholder-5.png",
      icon: Activity,
    },
    {
      title: "Feature Two",
      description: "Second key feature of the platform. Details about capabilities and advantages this feature provides.",
      imagePath: "/placeholder-6.png",
      icon: Sparkles,
    },
    {
      title: "Feature Three",
      description: "Third key feature of the platform. Information about how users can leverage this feature effectively.",
      imagePath: "/placeholder-7.png",
      icon: TrendingUp,
    },
    {
      title: "Feature Four",
      description: "Fourth key feature of the platform. Explanation of functionality and value this feature delivers.",
      imagePath: "/placeholder-8.png",
      icon: Trophy,
    },
  ];

  // Example data for FeatureShowcase
  const showcaseFeatures = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real time updates and shared workspaces for maximum productivity."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Gain insights with powerful data visualization and comprehensive reporting tools."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Monitor project progress and team performance with automated time tracking features."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Dedicated support team ensuring your success with 24/7 availability and expert guidance."
    }
  ];

  const benefitsFeatures = [
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Set and track your objectives with our intelligent goal setting framework."
    },
    {
      icon: Trophy,
      title: "Performance Metrics",
      description: "Measure success with comprehensive performance tracking and benchmarking."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our streamlined onboarding process."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Join thousands of satisfied customers using our award winning platform."
    }
  ];

  // Example data for InteractiveTabs
  const exampleTabs = [
    createLocationTab(
      {
        street: "11762 106 St",
        city: "Edmonton, AB",
        get mapUrl() {
          const fullAddress = `${this.street}, ${this.city}, Canada`;
          const encodedAddress = encodeURIComponent(fullAddress);
          return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
        },
        get mapSearchUrl() {
          const fullAddress = `${this.street}, ${this.city}, Canada`;
          const encodedAddress = encodeURIComponent(fullAddress);
          return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        }
      },
    ),
    createScheduleTab(
      [
        { day: "Monday", hours: "9:00 AM - 5:00 PM", isOpen: true },
        { day: "Tuesday", hours: "9:00 AM - 5:00 PM", isOpen: true },
        { day: "Wednesday", hours: "9:00 AM - 5:00 PM", isOpen: true },
        { day: "Thursday", hours: "9:00 AM - 5:00 PM", isOpen: true },
        { day: "Friday", hours: "9:00 AM - 5:00 PM", isOpen: true },
        { day: "Saturday", hours: "Closed", isOpen: false },
        { day: "Sunday", hours: "Closed", isOpen: false }
      ],
      "We are closed on all statutory holidays."
    ),
    createContactTab({
      phone: "+1-111-1234",
      phoneDisplay: "(111) 111-1234",
      email: "contact@example.com",
      fax: "(123) 123-3457"
    }),
    createSocialTab([
      { name: "Facebook", icon: Facebook, url: "#" },
      { name: "Instagram", icon: Instagram, url: "#" },
      { name: "X", icon: XIcon, url: "#" },
      { name: "LinkedIn", icon: Linkedin, url: "#" }
    ])
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3">
      <div className="mx-auto space-y-8">
        <PageContainer>
          <PageHeader
            title="Custom Design System Library 2025 - Soomin Park"
            subtitle="Complete component library and usage examples"
            accentColor="blue"
          />
          {/* Overview Section */}
          <section>
            <PageContainer>
              <PageHeader
                title="Overview"
                accentColor="blue"
              />
              <Card variant="gradient">
                <CardHeader title="About This Design System" />
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      This page demonstrates all reusable components in the design system. Use this as a reference for component appearance, behavior, and implementation patterns.
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Components include layout elements, interactive controls, data displays, and advanced animation components. Each section provides visual examples and code snippets.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Component Categories */}
              <div className="grid grid-cols-1 gap-6 my-6">
                {/* Animation Components */}
                <Card variant="gradient">
                  <CardHeader title="Animation Components" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="FeatureShowcase.jsx"
                        description="Auto rotating carousel with customizable layouts and color variants"
                        onClick={() => scrollToSection('feature-showcase-section')}
                      />
                      <ComponentLink
                        name="InteractiveCardGrid.jsx"
                        description="2x2 grid with vertical push animation and center reveal"
                        onClick={() => scrollToSection('interactive-grid-section')}
                      />
                      <ComponentLink
                        name="AnimatedServiceCard.jsx"
                        description="Card with scale and gradient animation"
                        onClick={() => scrollToSection('animated-service-card-section')}
                      />
                      <ComponentLink
                        name="AnimatedIndividualCard.jsx"
                        description="Card with scale, rotation, and bounce animation"
                        onClick={() => scrollToSection('animated-sport-card-section')}
                      />
                      <ComponentLink
                        name="InteractiveTabs.jsx"
                        description="Tabbed interface with hover activation and animated transitions"
                        onClick={() => scrollToSection('interactive-tabs-section')}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Guidelines */}
              <Card variant="gradient">
                <CardHeader title="Implementation Guidelines" />
                <CardContent>
                  <div className="space-y-2">
                    <Guideline text="FeatureShowcase supports 4 layouts (1-4 columns) and 8 color variants" />
                    <Guideline text="InteractiveCardGrid requires exactly 4 items for proper 2x2 layout" />
                    <Guideline text="AnimatedServiceCard needs hover state management (isHovered, onHover, onLeave)" />
                    <Guideline text="AnimatedIndividualCard includes random rotation for visual variety" />
                    <Guideline text="InteractiveTabs requires 4 tabs and uses helper functions for common content" />
                    <Guideline text="All components support multiple color variants (blue, purple, green, etc.)" />
                    <Guideline text="Use PageContainer for consistent page backgrounds" />
                    <Guideline text="Combine components with Card, CardHeader, CardContent for layouts" />
                  </div>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* FeatureShowcase Component */}
          <section id="feature-showcase-section">
            <PageContainer>
              <PageHeader
                title="FeatureShowcase Component"
                subtitle="Auto-rotating carousel with customizable layouts"
                accentColor="purple"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Auto rotation with configurable interval (or disable)" />
                    <Feature text="Manual navigation with arrow buttons" />
                    <Feature text="Dot indicators for quick navigation" />
                    <Feature text="8 color variants: blue, purple, green, orange, red, yellow, pink, indigo" />
                    <Feature text="4 layout options: 1 col, 2 col, 3 col, 4 col" />
                    <Feature text="3 animation styles: scale, fade, slide" />
                    <Feature text="Optional active badge indicator" />
                    <Feature text="Responsive grid that adapts to screen size" />
                  </div>
                </CardContent>
              </Card>

              <AlertCard
                type="info"
                title="Usage Instructions"
                message="Click on any card to make it active, or wait for auto rotation. Use arrow buttons for manual navigation."
                className="my-5"
              />

              {/* Purple Variant - 4 Column */}
              <div className="my-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Purple Variant - 4 Column Layout
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Default layout with scale animation and auto rotation every 5 seconds
                </p>
                <div className="py-8">
                  <FeatureShowcase
                    features={showcaseFeatures}
                    colorVariant="purple"
                    layout="4-col"
                    animationStyle="scale"
                    autoRotateInterval={5000}
                    showNavigation={true}
                    showIndicators={true}
                    showBadge={true}
                  />
                </div>
              </div>

              {/* Green Variant - 3 Column */}
              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Green Variant - 3 Column Layout
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  3 column layout with fade animation and no auto rotation
                </p>
                <div className="py-8">
                  <FeatureShowcase
                    features={benefitsFeatures}
                    colorVariant="green"
                    layout="3-col"
                    animationStyle="fade"
                    autoRotateInterval={0}
                    showNavigation={true}
                    showIndicators={true}
                    showBadge={false}
                  />
                </div>
              </div>

              {/* Orange Variant - 2 Column */}
              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Orange Variant - 2 Column Layout
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  2 column layout with slide animation and fast rotation
                </p>
                <div className="py-8">
                  <FeatureShowcase
                    features={showcaseFeatures}
                    colorVariant="orange"
                    layout="2-col"
                    animationStyle="slide"
                    autoRotateInterval={3000}
                    showNavigation={false}
                    showIndicators={true}
                    showBadge={true}
                  />
                </div>
              </div>

              {/* Code Example */}
              <Card variant="default">
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { FeatureShowcase } from './FeatureShowcase';
import { Users, BarChart, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly..."
  },
  // ... more features
];

<FeatureShowcase
  features={features}
  colorVariant="purple"           // blue, purple, green, orange, red, yellow, pink, indigo
  layout="4-col"                  // 1 col, 2 col, 3 col, 4 col
  animationStyle="scale"          // scale, fade, slide
  autoRotateInterval={5000}       // milliseconds, 0 to disable
  showNavigation={true}           // show arrow buttons
  showIndicators={true}           // show dot indicators
  showBadge={true}                // show active badge
/>`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* InteractiveCardGrid Showcase */}
          <section id="interactive-grid-section">
            <PageContainer>
              <PageHeader
                title="InteractiveCardGrid Component"
                subtitle="2x2 grid with vertical push animation"
                accentColor="blue"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="2x2 grid layout that collapses to corners on hover" />
                    <Feature text="Smooth vertical push animation (top cards go up, bottom cards go down)" />
                    <Feature text="Center content card reveals on hover with detailed description" />
                    <Feature text="Customizable color variants for cards and center border" />
                    <Feature text="Perfect for showcasing services, features, or offerings" />
                    <Feature text="Requires exactly 4 items to maintain grid structure" />
                  </div>
                </CardContent>
              </Card>

              <AlertCard
                type="info"
                title="Usage Instructions"
                message="Hover over any card to see the vertical push animation. Top cards slide up, bottom cards slide down, revealing a center card with detailed information."
                className="my-5"
              />

              {/* Blue Variant - Services */}
              <div className="my-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Blue Variant - Example Grid
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Hover over a card to see the animation
                </p>
                <div className="py-8">
                  <InteractiveCardGrid
                    items={serviceItems}
                    colorVariant="blue"
                    centerBorderColor="blue"
                  />
                </div>
              </div>

              {/* Yellow Variant - Features */}
              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Yellow Variant - Alternative Color
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Same component with different colors
                </p>
                <div className="py-8">
                  <InteractiveCardGrid
                    items={featureItems}
                    colorVariant="yellow"
                    centerBorderColor="yellow"
                  />
                </div>
              </div>

              {/* Code Example */}
              <Card variant="default">
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { InteractiveCardGrid } from './InteractiveCardGrid';

const items = [
  {
    title: "Service 1",
    description: "Detailed description...",
    imagePath: "/icon1.png",
    icon: IconComponent, // Optional
  },
  // ... 3 more items (total of 4 required)
];

<InteractiveCardGrid
  items={items}
  colorVariant="blue"
  centerBorderColor="blue"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* AnimatedServiceCard Component */}
          <section id="animated-service-card-section">
            <PageContainer>
              <PageHeader
                title="AnimatedServiceCard Component"
                subtitle="Individual card with hover animations"
                accentColor="blue"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Scales up on hover with gradient background transition" />
                    <Feature text="Icon/image bounce animation" />
                    <Feature text="8 color variants available" />
                    <Feature text="Optional description that appears on hover" />
                    <Feature text="Supports both image paths and icon components" />
                    <Feature text="Used internally by InteractiveCardGrid" />
                  </div>
                </CardContent>
              </Card>

              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {['blue', 'purple', 'green', 'red'].map((color) => (
                    <AnimatedServiceCard
                      key={color}
                      title={`${color.charAt(0).toUpperCase() + color.slice(1)} Card`}
                      description="Hover to see the gradient"
                      icon={color === 'blue' ? Target : color === 'purple' ? Sparkles : color === 'green' ? Trophy : Award}
                      isHovered={hoveredServiceCard === color}
                      onHover={() => setHoveredServiceCard(color)}
                      onLeave={() => setHoveredServiceCard(null)}
                      colorVariant={color}
                    />
                  ))}
                </div>
              </div>

              <Card variant="default">
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { AnimatedServiceCard } from './AnimatedServiceCard';

<AnimatedServiceCard
  title="Service Name"
  description="Optional description on hover"
  imagePath="/icon.png"
  icon={IconComponent} // Optional alternative to imagePath
  isHovered={false}
  onHover={() => {}}
  onLeave={() => {}}
  colorVariant="blue"
  minHeight="180px"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* InteractiveTabs Component */}
          <section id="interactive-tabs-section">
            <PageContainer>
              <PageHeader
                title="Interactive Tabs Component"
                subtitle="Tabbed interface with hover activated content"
                accentColor="green"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 tabs that activate on hover or click" />
                    <Feature text="Smooth fade and slide animations when switching content" />
                    <Feature text="Responsive layout: 2x2 grid on mobile, 1x4 on desktop" />
                    <Feature text="Pre built content creators for common use cases" />
                    <Feature text="Supports location maps, schedules, contact info, and social links" />
                    <Feature text="Customizable color variants and border colors" />
                    <Feature text="Bounce animation on active tab icon" />
                  </div>
                </CardContent>
              </Card>

              <AlertCard
                type="info"
                title="Usage Instructions"
                message="Hover over or click on any tab to see its content. The active tab will scale up with a gradient background and the icon will bounce."
                className="my-5"
              />

              {/* Blue Variant Example */}
              <div className="my-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Blue Variant - Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Hover over each tab to explore different sections
                </p>
                <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl">
                  <InteractiveTabs
                    tabs={exampleTabs}
                    colorVariant="blue"
                    borderColor="blue"
                    minContentHeight="500px"
                  />
                </div>
              </div>

              {/* Purple Variant Example */}
              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Purple Variant - Alternative Color
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Same component with different styling
                </p>
                <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl">
                  <InteractiveTabs
                    tabs={exampleTabs}
                    colorVariant="purple"
                    borderColor="purple"
                    minContentHeight="400px"
                  />
                </div>
              </div>

              {/* Code Example */}
              <Card variant="default" className="mb-5">
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { 
  InteractiveTabs, 
  createLocationTab, 
  createScheduleTab, 
  createContactTab, 
  createSocialTab 
} from './InteractiveTabs';

// Create tabs using helper functions
const tabs = [
  createLocationTab(
    { street: "123 Main St", city: "City, State" },
    "https://maps.google.com/maps?q=..."
  ),
  createScheduleTab(
    [
      { day: "Monday", hours: "9:00 AM - 5:00 PM", isOpen: true },
      // ... more days
    ],
    "Note: Closed on holidays"
  ),
  createContactTab({
    phone: "+1-555-0123",
    email: "contact@example.com"
  }),
  createSocialTab([
    { name: "Facebook", icon: Facebook, url: "#" },
    // ... more social links
  ])
];

<InteractiveTabs
  tabs={tabs}
  colorVariant="blue"
  borderColor="blue"
  minContentHeight="500px"
/>`}
                  </pre>
                </CardContent>
              </Card>

              {/* Custom Tab Example */}
              <Card variant="default">
                <CardHeader title="Custom Tab Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`// You can also create custom tabs with your own content
const customTabs = [
  {
    title: "Custom Tab",
    icon: YourIcon,
    content: (
      <div>
        <h2>Your Custom Content</h2>
        <p>Add any JSX content here</p>
      </div>
    )
  },
  // ... more custom tabs
];

<InteractiveTabs tabs={customTabs} />`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* AnimatedIndividualCard Component */}
          <section id="animated-sport-card-section">
            <PageContainer>
              <PageHeader
                title="AnimatedIndividualCard Component"
                subtitle="Card with scale, rotation, and bounce"
                accentColor="purple"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Random rotation direction on mount (adds variety)" />
                    <Feature text="Scales and rotates on hover" />
                    <Feature text="Icon bounce animation" />
                    <Feature text="8 color variants available" />
                    <Feature text="Fallback to first letter if no image/icon provided" />
                  </div>
                </CardContent>
              </Card>

              <div className="my-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {['purple', 'blue', 'green', 'orange'].map((color) => (
                    <AnimatedIndividualCard
                      key={color}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                      icon={color === 'purple' ? Goal : color === 'blue' ? Dumbbell : color === 'green' ? Trophy : Award}
                      colorVariant={color}
                    />
                  ))}
                </div>
              </div>

              <Card variant="default">
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { AnimatedIndividualCard } from './AnimatedIndividualCard';

<AnimatedIndividualCard
  title="Item Name"
  imagePath="/item.png"
  icon={IconComponent} // Optional alternative to imagePath
  colorVariant="purple"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>
        </PageContainer>
      </div>
    </main>
  );
}

// Helper Components
const ComponentLink = ({ name, description, onClick }) => (
  <div className="flex items-center gap-3">
    <Dot className="text-gray-500 dark:text-gray-400 font-mono text-xs" />
    <p className="text-md text-gray-700 dark:text-gray-300">
      <strong
        className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer underline decoration-2 underline-offset-2"
        onClick={onClick}
      >
        {name}
      </strong>{' '}
      - {description}
    </p>
  </div>
);

const Guideline = ({ text }) => (
  <p className="text-lg text-gray-700 dark:text-gray-300 my-1 flex items-center gap-3">
    <Play className="text-blue-500" />
    {text}
  </p>
);

const Feature = ({ text }) => (
  <p className="text-base text-gray-700 dark:text-gray-300 flex items-center gap-3">
    <Check className="text-green-500" />
    {text}
  </p>
);