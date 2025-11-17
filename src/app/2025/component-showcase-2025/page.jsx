"use client";

import { useState } from 'react';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { CardContent } from '@/components/CardContent';
import { PageHeader, PageContainer } from '@/components/PageHeader';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Dropdown } from '@/components/Dropdown';
import { AlertCard } from '@/components/AlertCard';
import { NoDataCard } from '@/components/NoDataCard';
import { StatCard } from '@/components/StatCard';
import { RadioButton } from '@/components/RadioButton';
import { InfoButton } from '@/components/InfoButton';
import { CollapsibleCard } from '@/components/CollapsibleCard';
import { Table, TableCell } from '@/components/Table';
import { Stepper } from '@/components/Stepper';
import {
  Upload,
  Download,
  Trash2,
  Eye,
  CheckCircle2,
  Search,
  BarChart3,
  Trophy,
  Calendar,
  Play,
  Dot,
  Check
} from 'lucide-react';

export default function ShowcasePage() {
  const [inputValue, setInputValue] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('option1');
  const [currentStep, setCurrentStep] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Section collapse states
  const [cardSectionCollapsed, setCardSectionCollapsed] = useState(true);
  const [collapsibleSectionCollapsed, setCollapsibleSectionCollapsed] = useState(true);
  const [buttonSectionCollapsed, setButtonSectionCollapsed] = useState(true);
  const [inputSectionCollapsed, setInputSectionCollapsed] = useState(true);
  const [textareaSectionCollapsed, setTextareaSectionCollapsed] = useState(true);
  const [dropdownSectionCollapsed, setDropdownSectionCollapsed] = useState(true);
  const [radioSectionCollapsed, setRadioSectionCollapsed] = useState(true);
  const [infoButtonSectionCollapsed, setInfoButtonSectionCollapsed] = useState(true);
  const [alertSectionCollapsed, setAlertSectionCollapsed] = useState(true);
  const [statSectionCollapsed, setStatSectionCollapsed] = useState(true);
  const [tableSectionCollapsed, setTableSectionCollapsed] = useState(true);
  const [noDataSectionCollapsed, setNoDataSectionCollapsed] = useState(true);
  const [stepperSectionCollapsed, setStepperSectionCollapsed] = useState(true);

  const scrollToSection = (id) => {
    // Expand the section first
    switch (id) {
      case 'card-section': setCardSectionCollapsed(false); break;
      case 'collapsible-section': setCollapsibleSectionCollapsed(false); break;
      case 'button-section': setButtonSectionCollapsed(false); break;
      case 'input-section': setInputSectionCollapsed(false); break;
      case 'textarea-section': setTextareaSectionCollapsed(false); break;
      case 'dropdown-section': setDropdownSectionCollapsed(false); break;
      case 'radiobutton-section': setRadioSectionCollapsed(false); break;
      case 'infobutton-section': setInfoButtonSectionCollapsed(false); break;
      case 'alertcard-section': setAlertSectionCollapsed(false); break;
      case 'statcard-section': setStatSectionCollapsed(false); break;
      case 'table-section': setTableSectionCollapsed(false); break;
      case 'nodata-section': setNoDataSectionCollapsed(false); break;
      case 'stepper-section': setStepperSectionCollapsed(false); break;
    }

    // Scroll after a brief delay to allow for expand animation
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-3">
      <div className="mx-auto space-y-8">
        <PageContainer>
          <PageHeader
            title="Custom Component Library 2025 - Soomin Park"
            subtitle="All interactive components with examples and code snippets"
            accentColor="blue"
          />

          {/* Overview Section */}
          <section>
            <PageContainer>
              <PageHeader
                title="Overview"
                accentColor="blue"
              />
              <Card variant="gradient" >
                <CardHeader title="About This Library"/>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-base text-gray-700 dark:text-gray-300">
                      Comprehensive collection of UI components including buttons, forms, cards, tables, and interactive elements. Each component is fully documented with usage examples and code snippets.
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Components support multiple variants, color themes, and customization options for flexibility across different use cases.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Component Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                {/* Layout & Containers */}
                <Card variant="gradient">
                  <CardHeader title="Layout & Containers" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="Card.jsx"
                        description="Universal container with 6 variants and 8 color themes"
                        onClick={() => scrollToSection('card-section')}
                      />
                      <ComponentLink
                        name="CollapsibleCard.jsx"
                        description="Expandable card with smooth animations"
                        onClick={() => scrollToSection('collapsible-section')}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Interactive Controls */}
                <Card variant="gradient">
                  <CardHeader title="Interactive Controls" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="Button.jsx"
                        description="Multi variant buttons with icons and sizes"
                        onClick={() => scrollToSection('button-section')}
                      />
                      <ComponentLink
                        name="RadioButton.jsx"
                        description="Animated radio selection with underline effects"
                        onClick={() => scrollToSection('radiobutton-section')}
                      />
                      <ComponentLink
                        name="InfoButton.jsx"
                        description="Tooltip info buttons with multiple icons"
                        onClick={() => scrollToSection('infobutton-section')}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Form Elements */}
                <Card variant="gradient">
                  <CardHeader title="Form Elements" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="Input.jsx"
                        description="Text inputs with validation and icons"
                        onClick={() => scrollToSection('input-section')}
                      />
                      <ComponentLink
                        name="Textarea.jsx"
                        description="Multi line text input with variants"
                        onClick={() => scrollToSection('textarea-section')}
                      />
                      <ComponentLink
                        name="Dropdown.jsx"
                        description="Styled select dropdowns"
                        onClick={() => scrollToSection('dropdown-section')}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Data Display */}
                <Card variant="gradient">
                  <CardHeader title="Data Display" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="StatCard.jsx"
                        description="Metric cards with trend indicators"
                        onClick={() => scrollToSection('statcard-section')}
                      />
                      <ComponentLink
                        name="Table.jsx"
                        description="Data tables with hover effects"
                        onClick={() => scrollToSection('table-section')}
                      />
                      <ComponentLink
                        name="NoDataCard.jsx"
                        description="Empty state display component"
                        onClick={() => scrollToSection('nodata-section')}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Feedback & Progress */}
                <Card variant="gradient">
                  <CardHeader title="Feedback & Progress" />
                  <CardContent>
                    <div className="space-y-2.5">
                      <ComponentLink
                        name="AlertCard.jsx"
                        description="Contextual alerts (success, error, warning, info)"
                        onClick={() => scrollToSection('alertcard-section')}
                      />
                      <ComponentLink
                        name="Stepper.jsx"
                        description="Multi step progress indicator"
                        onClick={() => scrollToSection('stepper-section')}
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
                    <Guideline text="All components support light and dark mode automatically" />
                    <Guideline text="Use variant prop to switch between visual styles (default, black, minimal, glass)" />
                    <Guideline text="Color themes are consistent across related components" />
                    <Guideline text="Components are accessible with proper ARIA labels and keyboard navigation" />
                    <Guideline text="Icons from lucide react are fully supported" />
                    <Guideline text="All form components support controlled and uncontrolled modes" />
                    <Guideline text="Card and CollapsibleCard support independent hover effect controls" />
                  </div>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* Card Component */}
          <CollapsibleCard
            title="Card Component"
            subtitle="Universal container with multiple variants and hover effects"
            colorTheme="blue"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={cardSectionCollapsed}
            onCollapseChange={setCardSectionCollapsed}
          >
            <section id="card-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="6 variants: default, gradient, black, special, glass, neon" />
                    <Feature text="8 color themes: blue, cyan, purple, green, red, orange, yellow, pink" />
                    <Feature text="Independent hover controls (hoverable, scaleOnHover)" />
                    <Feature text="Animated border overlay on hover" />
                    <Feature text="Hover indicator dot with color matching" />
                    <Feature text="Neon glow effects for special variants" />
                    <Feature text="Click handler support" />
                    <Feature text="Fully customizable with className prop" />
                  </div>
                </CardContent>
              </Card>

              {/* Variant Examples */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Card Variants" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Default</p>
                      <Card variant="default">
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            White background with standard border and shadow
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Gradient</p>
                      <Card variant="gradient">
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Gradient background from gray-50 to gray-300
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Black</p>
                      <Card variant="black">
                        <CardContent>
                          <p className="text-sm text-cyan-100">
                            Pure black background with cyan accents
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Special</p>
                      <Card variant="special">
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Featured card with enhanced styling and ring
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Glass</p>
                      <Card variant="glass">
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Glassmorphism with backdrop blur
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Neon</p>
                      <Card variant="neon">
                        <CardContent>
                          <p className="text-sm text-cyan-100">
                            Dark background with neon glow effect
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Color Themes */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Color Themes" />
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card variant="default" colorTheme="blue">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Blue
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="cyan">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Cyan
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="purple">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Purple
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="green">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Green
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="red">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Red
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="orange">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Orange
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="yellow">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Yellow
                        </p>
                      </CardContent>
                    </Card>
                    <Card variant="default" colorTheme="pink">
                      <CardContent>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                          Pink
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Hover Controls */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Hover Control Options" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Hover (default)
                      </p>
                      <Card variant="default" hoverable={true} scaleOnHover={true}>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            hoverable=true, scaleOnHover=true<br />
                            Border + Dot + Scale
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Border & Dot Only
                      </p>
                      <Card variant="default" hoverable={true} scaleOnHover={false}>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            hoverable=true, scaleOnHover=false<br />
                            Border + Dot (No Scale)
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Scale Only
                      </p>
                      <Card variant="default" hoverable={false} scaleOnHover={true}>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            hoverable=false, scaleOnHover=true<br />
                            Scale Only (No Border/Dot)
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        No Hover Effects
                      </p>
                      <Card variant="default" hoverable={false} scaleOnHover={false}>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            hoverable=false, scaleOnHover=false<br />
                            Static (No Hover Effects)
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Usage */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Advanced Usage Examples" />
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Clickable Card with onClick Handler
                      </p>
                      <Card
                        variant="special"
                        colorTheme="purple"
                        onClick={() => alert('Card clicked!')}
                      >
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Click me to trigger an action! Notice the cursor changes to pointer.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Neon Variant with Custom Color
                      </p>
                      <Card variant="neon" colorTheme="purple">
                        <CardContent>
                          <p className="text-sm text-purple-100">
                            Neon variant with purple color theme and glow effects
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Special Variant with Enhanced Styling
                      </p>
                      <Card variant="special" colorTheme="cyan">
                        <CardContent>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Special variant with ring effect, larger scale on hover (105%), and enhanced animations
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code Examples */}
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Examples" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Card } from './Card';
import { CardContent } from './CardContent';

// Basic usage
<Card variant="default">
  <CardContent>
    Your content here
  </CardContent>
</Card>

// With color theme
<Card variant="default" colorTheme="purple">
  <CardContent>
    Purple themed card
  </CardContent>
</Card>

// Special variant for featured content
<Card variant="special" colorTheme="cyan">
  <CardContent>
    Featured card with enhanced styling
  </CardContent>
</Card>

// Glass effect
<Card variant="glass">
  <CardContent>
    Glassmorphism effect
  </CardContent>
</Card>

// Neon with custom color
<Card variant="neon" colorTheme="purple">
  <CardContent>
    Neon glow effect
  </CardContent>
</Card>

// Hover control options
<Card 
  variant="default" 
  hoverable={true} 
  scaleOnHover={false}
>
  <CardContent>
    Border effects but no scale
  </CardContent>
</Card>

// Clickable card
<Card 
  variant="default" 
  onClick={() => handleClick()}
>
  <CardContent>
    Clickable card
  </CardContent>
</Card>

// Custom className
<Card 
  variant="default" 
  className="shadow-2xl"
>
  <CardContent>
    Card with custom styling
  </CardContent>
</Card>`}
                  </pre>
                </CardContent>
              </Card>

              {/* Props Table */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Props Reference" />
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Prop</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Type</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Default</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">variant</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">'default'</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">default | gradient | black | special | glass | neon</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">colorTheme</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">'blue'</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">blue | cyan | purple | green | red | orange | yellow | pink</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">hoverable</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">true</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Controls border, shadow, and indicator dot on hover</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">scaleOnHover</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">true</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Controls scale transformation on hover (103% or 105% for special)</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">onClick</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">function</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">undefined</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Click handler, adds pointer cursor</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">className</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">''</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Additional CSS classes</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">children</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">ReactNode</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">-</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Card content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* CollapsibleCard Component */}
          <CollapsibleCard
            title="CollapsibleCard Component"
            subtitle="Expandable card with smooth animations and customization"
            colorTheme="orange"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={collapsibleSectionCollapsed}
            onCollapseChange={setCollapsibleSectionCollapsed}
          >
            <section id="collapsible-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 variants: default, gradient, black, glass" />
                    <Feature text="6 color themes: blue, cyan, purple, green, red, orange" />
                    <Feature text="Smooth collapse/expand animation with height transitions" />
                    <Feature text="Optional icon support with themed backgrounds" />
                    <Feature text="Subtitle support" />
                    <Feature text="Controlled or uncontrolled mode" />
                    <Feature text="Independent hover controls (hoverable, scaleOnHover)" />
                    <Feature text="Themed hover effects with animated borders and dots" />
                    <Feature text="Color coordinated accent bars and chevron icons" />
                  </div>
                </CardContent>
              </Card>

              {/* Variant Examples */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="CollapsibleCard Variants" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Default</p>
                      <CollapsibleCard
                        title="Default Variant"
                        subtitle="White background"
                        variant="default"
                        colorTheme="blue"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          White background with standard border
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Gradient</p>
                      <CollapsibleCard
                        title="Gradient Variant"
                        subtitle="Gray gradient"
                        variant="gradient"
                        colorTheme="purple"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Gradient background effect
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Black</p>
                      <CollapsibleCard
                        title="Black Variant"
                        subtitle="Cyan accents"
                        variant="black"
                        colorTheme="cyan"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-cyan-100">
                          Pure black with cyan accents
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Glass</p>
                      <CollapsibleCard
                        title="Glass Variant"
                        subtitle="Glassmorphism"
                        variant="glass"
                        colorTheme="green"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Glassmorphism with backdrop blur
                        </p>
                      </CollapsibleCard>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Color Themes */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Color Themes" />
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Blue</p>
                      <CollapsibleCard
                        title="Blue Theme"
                        colorTheme="blue"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Blue themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Cyan</p>
                      <CollapsibleCard
                        title="Cyan Theme"
                        colorTheme="cyan"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Cyan themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Purple</p>
                      <CollapsibleCard
                        title="Purple Theme"
                        colorTheme="purple"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Purple themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Green</p>
                      <CollapsibleCard
                        title="Green Theme"
                        colorTheme="green"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Green themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Red</p>
                      <CollapsibleCard
                        title="Red Theme"
                        colorTheme="red"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Red themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Orange</p>
                      <CollapsibleCard
                        title="Orange Theme"
                        colorTheme="orange"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300">Orange themed collapsible</p>
                      </CollapsibleCard>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hover Controls */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Hover Control Options" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Hover (default)
                      </p>
                      <CollapsibleCard
                        title="Full Hover"
                        subtitle="All effects enabled"
                        colorTheme="blue"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={true}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Border + Dot + Scale
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Border & Dot Only
                      </p>
                      <CollapsibleCard
                        title="No Scale"
                        subtitle="Border and dot only"
                        colorTheme="cyan"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={true}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Border + Dot (No Scale)
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Scale Only
                      </p>
                      <CollapsibleCard
                        title="Scale Only"
                        subtitle="No border or dot"
                        colorTheme="purple"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={false}
                        scaleOnHover={true}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Scale Only (No Border/Dot)
                        </p>
                      </CollapsibleCard>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        No Hover Effects
                      </p>
                      <CollapsibleCard
                        title="Static Card"
                        subtitle="No hover effects"
                        colorTheme="green"
                        variant="default"
                        defaultCollapsed={true}
                        hoverable={false}
                        scaleOnHover={false}
                      >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Static (No Hover Effects)
                        </p>
                      </CollapsibleCard>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Usage Examples */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Usage Examples" />
                <CardContent>
                  <div className="space-y-6">
                    <CollapsibleCard
                      title="Uncontrolled Mode"
                      subtitle="Manages its own state"
                      icon={BarChart3}
                      variant="default"
                      colorTheme="blue"
                      defaultCollapsed={false}
                      hoverable={true}
                      scaleOnHover={false}
                    >
                      <div className="space-y-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          This collapsible card manages its own collapse state internally.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          Use defaultCollapsed prop to set initial state.
                        </p>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title="Controlled Mode"
                      subtitle="External state control"
                      icon={Calendar}
                      variant="default"
                      colorTheme="cyan"
                      collapsed={isCollapsed}
                      onCollapseChange={setIsCollapsed}
                      hoverable={true}
                      scaleOnHover={false}
                    >
                      <div className="space-y-3">
                        <p className="text-gray-700 dark:text-gray-300">
                          This card's collapse state is controlled externally.
                        </p>
                        <Button
                          variant="solid"
                          colorVariant="cyan"
                          onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                          Toggle from Inside
                        </Button>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title="Different Variants"
                      subtitle="Gradient background"
                      icon={Trophy}
                      variant="gradient"
                      colorTheme="purple"
                      defaultCollapsed={true}
                      hoverable={true}
                      scaleOnHover={false}
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        This collapsible card uses the gradient variant.
                      </p>
                    </CollapsibleCard>
                  </div>
                </CardContent>
              </Card>

              {/* Code Examples */}
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Examples" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { CollapsibleCard } from './CollapsibleCard';
import { BarChart3 } from 'lucide-react';

// Uncontrolled (manages own state)
<CollapsibleCard
  title="Section Title"
  subtitle="Optional subtitle"
  icon={BarChart3}
  variant="default"
  colorTheme="blue"
  defaultCollapsed={false}
  hoverable={true}
  scaleOnHover={false}
>
  <p>Your content here</p>
</CollapsibleCard>

// Controlled (external state)
<CollapsibleCard
  title="Controlled Section"
  variant="gradient"
  colorTheme="purple"
  collapsed={isCollapsed}
  onCollapseChange={setIsCollapsed}
>
  <p>Your content here</p>
</CollapsibleCard>

// Different color themes
<CollapsibleCard
  title="Orange Theme"
  colorTheme="orange"
  variant="default"
>
  <p>Content with orange accents</p>
</CollapsibleCard>

// Custom hover behavior
<CollapsibleCard
  title="Custom Hover"
  hoverable={true}
  scaleOnHover={false}
>
  <p>Border effects but no scale</p>
</CollapsibleCard>`}
                  </pre>
                </CardContent>
              </Card>

              {/* Props Table */}
              <Card variant="gradient" scaleOnHover={false}>
                <CardHeader title="Props Reference" />
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Prop</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Type</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Default</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">title</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">required</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Header title text</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">subtitle</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">undefined</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Optional subtitle below title</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">icon</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Component</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">undefined</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Lucide icon component</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">variant</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">'default'</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">default | gradient | black | glass</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">colorTheme</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">string</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">'blue'</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">blue | cyan | purple | green | red | orange</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">defaultCollapsed</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">false</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Initial collapsed state (uncontrolled mode)</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">collapsed</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">undefined</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Controlled collapsed state</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">onCollapseChange</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">function</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">undefined</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Callback when collapse state changes</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">hoverable</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">true</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Controls border, shadow, and indicator dot on hover</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">scaleOnHover</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">boolean</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">true</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Controls scale transformation on hover (103%)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-mono text-xs text-purple-600 dark:text-purple-400">children</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">ReactNode</td>
                          <td className="py-3 px-4 font-mono text-xs text-gray-600 dark:text-gray-400">required</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">Collapsible content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Button Component */}
          <CollapsibleCard
            title="Button Component"
            subtitle="Multi variant buttons with icons and states"
            colorTheme="blue"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={buttonSectionCollapsed}
            onCollapseChange={setButtonSectionCollapsed}
          >
            <section id="button-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="5 variants: solid, underline, underline-solid, outline, ghost" />
                    <Feature text="5 color themes: blue, green, red, purple, gray" />
                    <Feature text="3 sizes: sm, md, lg" />
                    <Feature text="Icon support with automatic spacing" />
                    <Feature text="Disabled state with visual feedback" />
                    <Feature text="Loading state support" />
                    <Feature text="Full keyboard and accessibility support" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Solid Buttons" />
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <Button variant="solid" colorVariant="blue">Blue</Button>
                    <Button variant="solid" colorVariant="green">Green</Button>
                    <Button variant="solid" colorVariant="red">Red</Button>
                    <Button variant="solid" colorVariant="purple">Purple</Button>
                    <Button variant="solid" colorVariant="gray">Gray</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Underline Buttons" />
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <Button variant="underline" colorVariant="blue">Blue</Button>
                    <Button variant="underline" colorVariant="green">Green</Button>
                    <Button variant="underline" colorVariant="red">Red</Button>
                    <Button variant="underline" colorVariant="purple">Purple</Button>
                    <Button variant="underline" colorVariant="gray">Gray</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Buttons with Icons" />
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button variant="solid" colorVariant="blue" icon={Upload}>Upload</Button>
                    <Button variant="solid" colorVariant="green" icon={Download}>Download</Button>
                    <Button variant="solid" colorVariant="red" icon={Trash2}>Delete</Button>
                    <Button variant="underline" colorVariant="purple" icon={Eye}>View</Button>
                    <Button variant="underline" colorVariant="green" icon={CheckCircle2}>Confirm</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Button Sizes" />
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="solid" colorVariant="blue" size="sm">Small</Button>
                    <Button variant="solid" colorVariant="blue" size="md">Medium</Button>
                    <Button variant="solid" colorVariant="blue" size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Button } from './Button';
import { Upload } from 'lucide-react';

// Basic usage
<Button variant="solid" colorVariant="blue">
  Click Me
</Button>

// With icon
<Button variant="solid" colorVariant="green" icon={Upload}>
  Upload File
</Button>

// Different sizes
<Button variant="solid" colorVariant="blue" size="sm">Small</Button>
<Button variant="solid" colorVariant="blue" size="lg">Large</Button>

// Disabled state
<Button variant="solid" colorVariant="blue" disabled>
  Disabled
</Button>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Input Component */}
          <CollapsibleCard
            title="Input Component"
            subtitle="Form inputs with validation and icons"
            colorTheme="green"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={inputSectionCollapsed}
            onCollapseChange={setInputSectionCollapsed}
          >
            <section id="input-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Multiple input types: text, email, password, number, date, time" />
                    <Feature text="4 variants: default, black, glass, minimal" />
                    <Feature text="Color themes: blue, cyan, purple, green" />
                    <Feature text="Icon support on left or right side" />
                    <Feature text="Label and error message display" />
                    <Feature text="Required field indicator" />
                    <Feature text="Disabled state styling" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Input Examples" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Text Input"
                      type="text"
                      placeholder="Enter your name..."
                      value={inputValue}
                      onChange={setInputValue}
                    />
                    <Input
                      label="Email Input"
                      type="email"
                      placeholder="Enter your email..."
                      value={emailInput}
                      onChange={setEmailInput}
                    />
                    <Input
                      label="Date Input"
                      type="date"
                    />
                    <Input
                      label="Search Input"
                      type="text"
                      placeholder="Search..."
                      icon={Search}
                    />
                    <Input
                      label="Required Field"
                      type="text"
                      placeholder="Required..."
                      required
                    />
                    <Input
                      label="Disabled Input"
                      type="text"
                      placeholder="Disabled..."
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Input } from './Input';
import { Search } from 'lucide-react';

// Basic usage
<Input
  label="Username"
  type="text"
  placeholder="Enter username..."
  value={value}
  onChange={setValue}
/>

// With icon
<Input
  label="Search"
  type="text"
  placeholder="Search..."
  icon={Search}
/>

// Required field
<Input
  label="Email"
  type="email"
  required
  error="Please enter a valid email"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Input Component */}
          <CollapsibleCard
            title="Input Component"
            subtitle="Form inputs with validation and icons"
            colorTheme="green"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={inputSectionCollapsed}
            onCollapseChange={setInputSectionCollapsed}
          >
            <section id="input-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Multiple input types: text, email, password, number, date, time" />
                    <Feature text="4 variants: default, black, glass, minimal" />
                    <Feature text="Color themes: blue, cyan, purple, green" />
                    <Feature text="Icon support on left or right side" />
                    <Feature text="Label and error message display" />
                    <Feature text="Required field indicator" />
                    <Feature text="Disabled state styling" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Input Examples" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Text Input"
                      type="text"
                      placeholder="Enter your name..."
                      value={inputValue}
                      onChange={setInputValue}
                    />
                    <Input
                      label="Email Input"
                      type="email"
                      placeholder="Enter your email..."
                      value={emailInput}
                      onChange={setEmailInput}
                    />
                    <Input
                      label="Date Input"
                      type="date"
                    />
                    <Input
                      label="Search Input"
                      type="text"
                      placeholder="Search..."
                      icon={Search}
                    />
                    <Input
                      label="Required Field"
                      type="text"
                      placeholder="Required..."
                      required
                    />
                    <Input
                      label="Disabled Input"
                      type="text"
                      placeholder="Disabled..."
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Input } from './Input';
import { Search } from 'lucide-react';

// Basic usage
<Input
  label="Username"
  type="text"
  placeholder="Enter username..."
  value={value}
  onChange={setValue}
/>

// With icon
<Input
  label="Search"
  type="text"
  placeholder="Search..."
  icon={Search}
/>

// Required field
<Input
  label="Email"
  type="email"
  required
  error="Please enter a valid email"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Textarea Component */}
          <CollapsibleCard
            title="Textarea Component"
            subtitle="Multi line text input with variants"
            colorTheme="purple"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={textareaSectionCollapsed}
            onCollapseChange={setTextareaSectionCollapsed}
          >
            <section id="textarea-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 variants: default, black, glass, minimal" />
                    <Feature text="Color themes: blue, cyan, purple, green" />
                    <Feature text="Configurable rows and max length" />
                    <Feature text="Resizable or fixed height" />
                    <Feature text="Label and error message support" />
                    <Feature text="Character count display option" />
                    <Feature text="Required field indicator" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Textarea Examples" />
                <CardContent>
                  <div className="space-y-6">
                    <Textarea
                      label="Message"
                      placeholder="Enter your message..."
                      value={textareaValue}
                      onChange={setTextareaValue}
                      rows={4}
                    />
                    <Textarea
                      label="Required Textarea"
                      placeholder="This field is required..."
                      required
                      rows={3}
                    />
                    <Textarea
                      label="Fixed Height"
                      placeholder="Cannot resize..."
                      resize={false}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Textarea } from './Textarea';

// Basic usage
<Textarea
  label="Description"
  placeholder="Enter description..."
  value={value}
  onChange={setValue}
  rows={4}
/>

// With max length
<Textarea
  label="Bio"
  maxLength={500}
  placeholder="Tell us about yourself..."
/>

// Fixed height (non resizable)
<Textarea
  label="Comment"
  resize={false}
  rows={3}
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Dropdown Component */}
          <CollapsibleCard
            title="Dropdown Component"
            subtitle="Styled select dropdowns"
            colorTheme="cyan"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={dropdownSectionCollapsed}
            onCollapseChange={setDropdownSectionCollapsed}
          >
            <section id="dropdown-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="Gradient background styling" />
                    <Feature text="Label support" />
                    <Feature text="Required field indicator" />
                    <Feature text="Disabled state" />
                    <Feature text="Custom placeholder option" />
                    <Feature text="Accessible with keyboard navigation" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Dropdown Examples" />
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Dropdown
                      label="Select Option"
                      options={[
                        { value: 'option1', label: 'Option 1' },
                        { value: 'option2', label: 'Option 2' },
                        { value: 'option3', label: 'Option 3' },
                      ]}
                      value={dropdownValue}
                      onChange={setDropdownValue}
                    />
                    <Dropdown
                      label="Required Dropdown"
                      options={[
                        { value: 'a', label: 'Choice A' },
                        { value: 'b', label: 'Choice B' },
                        { value: 'c', label: 'Choice C' },
                      ]}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Dropdown } from './Dropdown';

<Dropdown
  label="Select Category"
  options={[
    { value: 'cat1', label: 'Category 1' },
    { value: 'cat2', label: 'Category 2' },
    { value: 'cat3', label: 'Category 3' },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  required
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* RadioButton Component */}
          <CollapsibleCard
            title="RadioButton Component"
            subtitle="Animated radio selection with underline effects"
            colorTheme="blue"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={radioSectionCollapsed}
            onCollapseChange={setRadioSectionCollapsed}
          >
            <section id="radiobutton-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="8 color variants: blue, cyan, purple, green, red, orange, pink" />
                    <Feature text="Animated underline effect on hover and selection" />
                    <Feature text="Gradient background when selected" />
                    <Feature text="Optional checkmark indicator" />
                    <Feature text="Shadow effects on selection" />
                    <Feature text="Disabled state support" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="RadioButton Examples" />
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Blue Variant
                      </h4>
                      <div className="flex gap-4">
                        <RadioButton
                          label="Option 1"
                          value="option1"
                          isSelected={selectedRadio === 'option1'}
                          onChange={setSelectedRadio}
                          colorVariant="blue"
                        />
                        <RadioButton
                          label="Option 2"
                          value="option2"
                          isSelected={selectedRadio === 'option2'}
                          onChange={setSelectedRadio}
                          colorVariant="blue"
                        />
                        <RadioButton
                          label="Option 3"
                          value="option3"
                          isSelected={selectedRadio === 'option3'}
                          onChange={setSelectedRadio}
                          colorVariant="blue"
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        With Checkmarks
                      </h4>
                      <div className="flex gap-4">
                        <RadioButton
                          label="Choice A"
                          value="choiceA"
                          isSelected={selectedRadio === 'choiceA'}
                          onChange={setSelectedRadio}
                          colorVariant="green"
                          showCheckmark
                        />
                        <RadioButton
                          label="Choice B"
                          value="choiceB"
                          isSelected={selectedRadio === 'choiceB'}
                          onChange={setSelectedRadio}
                          colorVariant="green"
                          showCheckmark
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Different Colors
                      </h4>
                      <div className="flex gap-4">
                        <RadioButton label="Purple" value="purple" colorVariant="purple" />
                        <RadioButton label="Cyan" value="cyan" colorVariant="cyan" />
                        <RadioButton label="Orange" value="orange" colorVariant="orange" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { RadioButton } from './RadioButton';

<RadioButton
  label="Option 1"
  value="option1"
  isSelected={selected === 'option1'}
  onChange={setSelected}
  colorVariant="blue"
  showCheckmark={true}
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* InfoButton Component */}
          <CollapsibleCard
            title="InfoButton Component"
            subtitle="Tooltip info buttons with multiple icons"
            colorTheme="yellow"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={infoButtonSectionCollapsed}
            onCollapseChange={setInfoButtonSectionCollapsed}
          >
            <section id="infobutton-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="7 color options: blue, cyan, yellow, red, green, purple, orange" />
                    <Feature text="6 icon shapes: info, warning, question, alert, check, error" />
                    <Feature text="2 variants: default, black" />
                    <Feature text="Hover triggered tooltip with smooth animation" />
                    <Feature text="Custom title and message support" />
                    <Feature text="Automatic icon rotation on hover" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="InfoButton Examples" />
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Different Shapes
                      </h4>
                      <div className="flex gap-6 flex-wrap">
                        <InfoButton
                          shape="info"
                          color="blue"
                          message="This is an information message."
                        />
                        <InfoButton
                          shape="warning"
                          color="yellow"
                          message="This is a warning message."
                        />
                        <InfoButton
                          shape="question"
                          color="purple"
                          message="This is a help message."
                        />
                        <InfoButton
                          shape="alert"
                          color="orange"
                          message="This is an alert message."
                        />
                        <InfoButton
                          shape="check"
                          color="green"
                          message="This is a success message."
                        />
                        <InfoButton
                          shape="error"
                          color="red"
                          message="This is an error message."
                        />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Custom Message
                      </h4>
                      <InfoButton
                        shape="info"
                        color="blue"
                        title="Custom Title"
                        message="You can provide a custom title and message for any tooltip. Hover over the icon to see this tooltip in action."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { InfoButton } from './InfoButton';

<InfoButton 
  shape="info" 
  color="blue"
  title="Information"
  message="This is helpful information for the user."
/>

<InfoButton 
  shape="warning" 
  color="yellow"
  message="Please be careful with this action."
  variant="black"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* AlertCard Component */}
          <CollapsibleCard
            title="AlertCard Component"
            subtitle="Contextual alert messages"
            colorTheme="red"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={alertSectionCollapsed}
            onCollapseChange={setAlertSectionCollapsed}
          >
            <section id="alertcard-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 types: success, error, warning, info" />
                    <Feature text="3 variants: default, black, minimal" />
                    <Feature text="Contextual icons for each type" />
                    <Feature text="Optional title and message" />
                    <Feature text="Color coded borders and backgrounds" />
                    <Feature text="Dismissible with onClose callback" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="AlertCard Examples" />
                <CardContent>
                  <div className="space-y-4">
                    <AlertCard
                      type="success"
                      title="Success"
                      message="Your changes have been saved successfully!"
                    />
                    <AlertCard
                      type="error"
                      title="Error"
                      message="Something went wrong. Please try again."
                    />
                    <AlertCard
                      type="warning"
                      title="Warning"
                      message="Please review your input before proceeding."
                    />
                    <AlertCard
                      type="info"
                      title="Information"
                      message="Here's some helpful information for you."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Minimal Variant" />
                <CardContent>
                  <div className="space-y-4">
                    <AlertCard
                      type="success"
                      message="Operation completed successfully"
                      variant="minimal"
                    />
                    <AlertCard
                      type="info"
                      message="New updates available"
                      variant="minimal"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { AlertCard } from './AlertCard';

<AlertCard
  type="success"
  title="Success"
  message="Operation completed successfully!"
/>

<AlertCard
  type="error"
  title="Error"
  message="Something went wrong."
  variant="black"
/>

<AlertCard
  type="info"
  message="Info without title"
  variant="minimal"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* StatCard Component */}
          <CollapsibleCard
            title="StatCard Component"
            subtitle="Metric cards with trend indicators"
            colorTheme="green"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={statSectionCollapsed}
            onCollapseChange={setStatSectionCollapsed}
          >
            <section id="statcard-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 variants: default, black, solid, glass" />
                    <Feature text="6 color themes: blue, cyan, purple, green, red, orange" />
                    <Feature text="Automatic trend calculation (up/down/neutral)" />
                    <Feature text="Percentage change display" />
                    <Feature text="'New' indicator for first time data" />
                    <Feature text="Empty state handling" />
                    <Feature text="Hover animation with border pulse" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                <StatCard
                  label="Total Users"
                  value={1234}
                  unit=""
                  color="blue"
                  previousValue={1100}
                  higherIsBetter={true}
                />
                <StatCard
                  label="Revenue"
                  value={52400}
                  unit="$"
                  color="green"
                  previousValue={48000}
                  higherIsBetter={true}
                />
                <StatCard
                  label="Response Time"
                  value={145}
                  unit="ms"
                  color="purple"
                  variant="black"
                  previousValue={680}
                  higherIsBetter={true}
                />
                <StatCard
                  label="Conversion Rate"
                  value={3.2}
                  unit="%"
                  color="cyan"
                  variant="glass"
                  previousValue={3.2}
                />
                <StatCard
                  label="New Metric"
                  value={89}
                  unit=""
                  color="orange"
                  variant="gradient"
                  previousValue={null}
                />
                <StatCard
                  label="No Data"
                  value={0}
                  unit=""
                  color="red"
                />
              </div>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { StatCard } from './StatCard';

<StatCard
  label="Total Users"
  value={1234}
  unit=""
  color="blue"
  variant="default"
  previousValue={1100}
  higherIsBetter={true}
/>

// Lower is better (like response time)
<StatCard
  label="Response Time"
  value={145}
  unit="ms"
  color="purple"
  previousValue={180}
  higherIsBetter={false}
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Table Component */}
          <CollapsibleCard
            title="Table Component"
            subtitle="Data tables with hover effects"
            colorTheme="blue"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={tableSectionCollapsed}
            onCollapseChange={setTableSectionCollapsed}
          >
            <section id="table-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="3 variants: default, black, minimal" />
                    <Feature text="Hover effects on rows" />
                    <Feature text="Custom cell rendering" />
                    <Feature text="Highlight first row option" />
                    <Feature text="Empty state support" />
                    <Feature text="Responsive with horizontal scroll" />
                    <Feature text="Customizable column headers" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Table Example" />
                <CardContent>
                  <Table
                    columns={['Name', 'Role', 'Status', 'Actions']}
                    data={[
                      { name: 'John Doe', role: 'Admin', status: 'Active' },
                      { name: 'Jane Smith', role: 'User', status: 'Active' },
                      { name: 'Bob Johnson', role: 'User', status: 'Inactive' },
                    ]}
                    renderCell={(row, rowIndex) => (
                      <>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${row.status === 'Active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                            }`}>
                            {row.status}
                          </span>
                        </TableCell>
                        <TableCell className="flex justify-center">
                          <Button variant="underline" colorVariant="blue" size="sm" icon={Eye}>
                            View
                          </Button>
                        </TableCell>
                      </>
                    )}
                    highlightFirstRow
                  />
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Table, TableCell } from './Table';

<Table
  columns={['Name', 'Role', 'Status']}
  data={[
    { name: 'John Doe', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', role: 'User', status: 'Active' },
  ]}
  renderCell={(row, rowIndex) => (
    <>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.role}</TableCell>
      <TableCell>{row.status}</TableCell>
    </>
  )}
  highlightFirstRow
  variant="default"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* NoDataCard Component */}
          <CollapsibleCard
            title="NoDataCard Component"
            subtitle="Empty state display"
            colorTheme="gray"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={noDataSectionCollapsed}
            onCollapseChange={setNoDataSectionCollapsed}
          >
            <section id="nodata-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="3 variants: default, black, minimal" />
                    <Feature text="Customizable title and message" />
                    <Feature text="Icon with color coded background" />
                    <Feature text="Centered layout" />
                    <Feature text="Perfect for empty tables or lists" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false} style={{ minHeight: '300px' }}>
                <CardHeader title="NoDataCard Example" />
                <CardContent>
                  <NoDataCard
                    title="No Data Available"
                    message="There are no records to display at this time."
                  />
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { NoDataCard } from './NoDataCard';

<NoDataCard
  title="No Results Found"
  message="Try adjusting your search criteria."
  variant="default"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>

          {/* Stepper Component */}
          <CollapsibleCard
            title="Stepper Component"
            subtitle="Multi step progress indicator"
            colorTheme="purple"
            variant="default"
            hoverable={false}
            scaleOnHover={false}
            collapsed={stepperSectionCollapsed}
            onCollapseChange={setStepperSectionCollapsed}
          >
            <section id="stepper-section">
              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="3 variants: default, compact, minimal" />
                    <Feature text="5 color themes: blue, cyan, purple, green, orange" />
                    <Feature text="Visual feedback for completed steps" />
                    <Feature text="Active step highlighting with gradient" />
                    <Feature text="Checkmark icons for completed steps" />
                    <Feature text="Progress line between steps" />
                    <Feature text="Configurable step labels" />
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Stepper Examples" />
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Default Variant
                      </h4>
                      <Stepper
                        steps={[
                          { label: 'Select Items' },
                          { label: 'Enter Details' },
                          { label: 'Review Order' },
                          { label: 'Complete' },
                        ]}
                        currentStep={currentStep}
                        colorTheme="blue"
                      />
                      <div className="flex justify-center gap-4 mt-6">
                        <Button
                          variant="underline"
                          colorVariant="blue"
                          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                          disabled={currentStep === 1}
                        >
                          Previous
                        </Button>
                        <Button
                          variant="solid"
                          colorVariant="blue"
                          onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                          disabled={currentStep === 4}
                        >
                          Next
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Compact Variant
                      </h4>
                      <Stepper
                        steps={['Start', 'Process', 'Complete']}
                        currentStep={2}
                        variant="compact"
                        colorTheme="green"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Minimal Variant
                      </h4>
                      <Stepper
                        steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
                        currentStep={3}
                        variant="minimal"
                        colorTheme="purple"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="default" scaleOnHover={false}>
                <CardHeader title="Code Example" />
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {`import { Stepper } from './Stepper';

<Stepper
  steps={[
    { label: 'Select Items' },
    { label: 'Enter Details' },
    { label: 'Review Order' },
    { label: 'Complete' },
  ]}
  currentStep={2}
  variant="default"
  colorTheme="blue"
/>

// Compact version
<Stepper
  steps={['Start', 'Process', 'Complete']}
  currentStep={2}
  variant="compact"
  colorTheme="green"
/>`}
                  </pre>
                </CardContent>
              </Card>
            </section>
          </CollapsibleCard>
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