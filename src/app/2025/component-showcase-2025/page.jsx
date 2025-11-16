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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
              <Card variant="gradient">
                <CardHeader title="About This Library" />
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
                      <ComponentLink
                        name="CollapsibleCard.jsx"
                        description="Expandable card with smooth animations"
                        onClick={() => scrollToSection('collapsible-section')}
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
                  </div>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* Button Component */}
          <section id="button-section">
            <PageContainer>
              <PageHeader
                title="Button Component"
                subtitle="Multi variant buttons with icons and states"
                accentColor="blue"
              />
              <Card variant="default">
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

              {/* Button Examples */}
              <Card variant="default">
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

              <Card variant="default">
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

              <Card variant="default">
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

              <Card variant="default">
                <CardHeader title="Button Sizes" />
                <CardContent>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="solid" colorVariant="blue" size="sm">Small</Button>
                    <Button variant="solid" colorVariant="blue" size="md">Medium</Button>
                    <Button variant="solid" colorVariant="blue" size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* Input Component */}
          <section id="input-section">
            <PageContainer>
              <PageHeader
                title="Input Component"
                subtitle="Form inputs with validation and icons"
                accentColor="green"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* Textarea Component */}
          <section id="textarea-section">
            <PageContainer>
              <PageHeader
                title="Textarea Component"
                subtitle="Multi line text input with variants"
                accentColor="purple"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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

// Fixed height (non-resizable)
<Textarea
  label="Comment"
  resize={false}
  rows={3}
/>`}
                  </pre>
                </CardContent>
              </Card>
            </PageContainer>
          </section>

          {/* Dropdown Component */}
          <section id="dropdown-section">
            <PageContainer>
              <PageHeader
                title="Dropdown Component"
                subtitle="Styled select dropdowns"
                accentColor="cyan"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* RadioButton Component */}
          <section id="radiobutton-section">
            <PageContainer>
              <PageHeader
                title="RadioButton Component"
                subtitle="Animated radio selection with underline effects"
                accentColor="blue"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* InfoButton Component */}
          <section id="infobutton-section">
            <PageContainer>
              <PageHeader
                title="InfoButton Component"
                subtitle="Tooltip info buttons with multiple icons"
                accentColor="yellow"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* AlertCard Component */}
          <section id="alertcard-section">
            <PageContainer>
              <PageHeader
                title="AlertCard Component"
                subtitle="Contextual alert messages"
                accentColor="red"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* StatCard Component */}
          <section id="statcard-section">
            <PageContainer>
              <PageHeader
                title="StatCard Component"
                subtitle="Metric cards with trend indicators"
                accentColor="green"
              />
              <Card variant="default">
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


              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* Table Component */}
          <section id="table-section">
            <PageContainer>
              <PageHeader
                title="Table Component"
                subtitle="Data tables with hover effects"
                accentColor="blue"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* NoDataCard Component */}
          <section id="nodata-section">
            <PageContainer>
              <PageHeader
                title="NoDataCard Component"
                subtitle="Empty state display"
                accentColor="gray"
              />
              <Card variant="default">
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

              <Card variant="default" style={{ minHeight: '300px' }}>
                <CardHeader title="NoDataCard Example" />
                <CardContent>
                  <NoDataCard
                    title="No Data Available"
                    message="There are no records to display at this time."
                  />
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* Stepper Component */}
          <section id="stepper-section">
            <PageContainer>
              <PageHeader
                title="Stepper Component"
                subtitle="Multi step progress indicator"
                accentColor="purple"
              />
              <Card variant="default">
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

              <Card variant="default">
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

              {/* Code Example */}
              <Card variant="default">
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
            </PageContainer>
          </section>

          {/* CollapsibleCard Component */}
          <section id="collapsible-section">
            <PageContainer>
              <PageHeader
                title="CollapsibleCard Component"
                subtitle="Expandable card with smooth animations"
                accentColor="orange"
              />
              <Card variant="default">
                <CardHeader title="Features & Capabilities" />
                <CardContent>
                  <div className="space-y-2">
                    <Feature text="4 variants: default, gradient, black, glass" />
                    <Feature text="3 color themes: blue, cyan, purple" />
                    <Feature text="Smooth collapse/expand animation" />
                    <Feature text="Optional icon support" />
                    <Feature text="Subtitle support" />
                    <Feature text="Controlled or uncontrolled mode" />
                    <Feature text="Hover effects with animated border" />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <CollapsibleCard
                  title="Collapsible Section"
                  subtitle="Click to expand or collapse"
                  icon={BarChart3}
                  variant="default"
                  colorTheme="blue"
                  defaultCollapsed={false}
                >
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      This is the content inside the collapsible card. You can put any content here including text, images, or other components.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      The card smoothly animates when expanding or collapsing.
                    </p>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Gradient Variant"
                  subtitle="With gradient background"
                  icon={Trophy}
                  variant="gradient"
                  colorTheme="purple"
                  defaultCollapsed={true}
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    This collapsible card uses the gradient variant for a different visual style.
                  </p>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Controlled Collapse"
                  subtitle="Controlled by external state"
                  icon={Calendar}
                  variant="default"
                  colorTheme="cyan"
                  collapsed={isCollapsed}
                  onCollapseChange={setIsCollapsed}
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
              </div>

              {/* Code Example */}
              <Card variant="default">
                <CardHeader title="Code Example" />
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
>
  <p>Your content here</p>
</CollapsibleCard>

// Controlled (external state)
<CollapsibleCard
  title="Controlled Section"
  variant="gradient"
  collapsed={isCollapsed}
  onCollapseChange={setIsCollapsed}
>
  <p>Your content here</p>
</CollapsibleCard>`}
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