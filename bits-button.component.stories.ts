import type { Meta, StoryObj } from '@storybook/angular';
import { BitsButtonComponent } from './bits-button.component';
import { fn } from '@storybook/test';

const meta: Meta<BitsButtonComponent> = {
  title: 'Components/Button',
  component: BitsButtonComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BITS Design System Button Component. Built with design system tokens from Figma.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['white', 'outlined'],
      description: 'Button variant style',
      table: {
        type: { summary: "'white' | 'outlined'" },
        defaultValue: { summary: "'outlined'" }
      }
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'Button color theme',
      table: {
        type: { summary: "'primary' | 'secondary' | 'tertiary' | 'danger'" },
        defaultValue: { summary: "'primary'" }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "'md'" }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading spinner',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    pill: {
      control: 'boolean',
      description: 'Whether to use pill (rounded) style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
      table: {
        type: { summary: "'button' | 'submit' | 'reset'" },
        defaultValue: { summary: "'button'" }
      }
    }
  },
  args: {
    clicked: fn()
  }
};

export default meta;
type Story = StoryObj<BitsButtonComponent>;

// Default story
export const Default: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    pill: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button 
      [variant]="variant" 
      [color]="color" 
      [size]="size"
      [disabled]="disabled"
      [loading]="loading"
      [pill]="pill"
      [type]="type"
      (clicked)="clicked($event)">
      Button
    </bits-button>`
  })
};

// Variants - Outlined
export const OutlinedPrimary: Story = {
  args: {
    variant: 'outlined',
    color: 'primary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Primary Button</bits-button>`
  })
};

export const OutlinedSecondary: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Secondary Button</bits-button>`
  })
};

export const OutlinedTertiary: Story = {
  args: {
    variant: 'outlined',
    color: 'tertiary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Tertiary Button</bits-button>`
  })
};

export const OutlinedDanger: Story = {
  args: {
    variant: 'outlined',
    color: 'danger'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Danger Button</bits-button>`
  })
};

// Variants - White
export const WhitePrimary: Story = {
  args: {
    variant: 'white',
    color: 'primary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Primary Button</bits-button>`
  })
};

export const WhiteSecondary: Story = {
  args: {
    variant: 'white',
    color: 'secondary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Secondary Button</bits-button>`
  })
};

export const WhiteTertiary: Story = {
  args: {
    variant: 'white',
    color: 'tertiary'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [variant]="variant" [color]="color">Tertiary Button</bits-button>`
  })
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [size]="size">Small Button</bits-button>`
  })
};

export const Medium: Story = {
  args: {
    size: 'md'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [size]="size">Medium Button</bits-button>`
  })
};

export const Large: Story = {
  args: {
    size: 'lg'
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [size]="size">Large Button</bits-button>`
  })
};

// States
export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [disabled]="disabled">Disabled Button</bits-button>`
  })
};

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [loading]="loading">Loading Button</bits-button>`
  })
};

export const Pill: Story = {
  args: {
    pill: true
  },
  render: (args) => ({
    props: args,
    template: `<bits-button [pill]="pill">Pill Button</bits-button>`
  })
};

// All Variants
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
        <div>
          <h3 style="margin-bottom: 16px; font-weight: 600;">Outlined Variant</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <bits-button variant="outlined" color="primary">Primary</bits-button>
            <bits-button variant="outlined" color="secondary">Secondary</bits-button>
            <bits-button variant="outlined" color="tertiary">Tertiary</bits-button>
            <bits-button variant="outlined" color="danger">Danger</bits-button>
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 16px; font-weight: 600;">White Variant</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <bits-button variant="white" color="primary">Primary</bits-button>
            <bits-button variant="white" color="secondary">Secondary</bits-button>
            <bits-button variant="white" color="tertiary">Tertiary</bits-button>
          </div>
        </div>
      </div>
    `
  })
};

// All Sizes
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
        <div>
          <h3 style="margin-bottom: 16px; font-weight: 600;">Outlined - All Sizes</h3>
          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            <bits-button variant="outlined" color="primary" size="sm">Small</bits-button>
            <bits-button variant="outlined" color="primary" size="md">Medium</bits-button>
            <bits-button variant="outlined" color="primary" size="lg">Large</bits-button>
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 16px; font-weight: 600;">White - All Sizes</h3>
          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            <bits-button variant="white" color="primary" size="sm">Small</bits-button>
            <bits-button variant="white" color="primary" size="md">Medium</bits-button>
            <bits-button variant="white" color="primary" size="lg">Large</bits-button>
          </div>
        </div>
      </div>
    `
  })
};

// With Icons (example)
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
        <div>
          <h3 style="margin-bottom: 16px; font-weight: 600;">Icons</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <bits-button variant="outlined" color="primary">
              <svg slot="icon-left" style="width: 16px; height: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Add Item
            </bits-button>
            
            <bits-button variant="outlined" color="primary">
              Submit
              <svg slot="icon-right" style="width: 16px; height: 16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </bits-button>
          </div>
        </div>
      </div>
    `
  })
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    pill: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px;">
        <bits-button 
          [variant]="variant" 
          [color]="color" 
          [size]="size"
          [disabled]="disabled"
          [loading]="loading"
          [pill]="pill"
          [type]="type"
          (clicked)="clicked($event)">
          Button
        </bits-button>
      </div>
    `
  })
};

