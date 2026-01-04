/**
 * BITS Design System - Button Tokens
 * Extracted from semantics.json and brand.json
 */

export interface ButtonSizeTokens {
  spacingX: number;
  spacingY: number;
  gapBetween: number;
  label: string;
}

export interface ButtonVariantTokens {
  borderColor: string;
  borderHoverColor: string;
  borderDisabledColor: string;
  bgColor?: string;
  bgHoverColor?: string;
  bgFocusColor?: string;
  bgDisabledColor?: string;
  iconColor: string;
  iconHoverColor: string;
  iconDisabledColor: string;
  placeholderColor: string;
  placeholderHoverColor: string;
  placeholderDisabledColor: string;
  dividerColor?: string;
  dividerHoverColor?: string;
  dividerDisabledColor?: string;
}

export const BUTTON_TOKENS = {
  // Base properties
  iconSize: 14,
  borderRadius: 8, // border_radius.lg (approximate)
  pilledBorderRadius: 9999, // border_radius.full
  dividerWidth: 1,
  dividerColor: '#E5E7EB',
  iconColor: '#1F2937',
  placeholderColor: '#1F2937',

  // Size tokens
  sizes: {
    lg: {
      spacingX: 20,
      spacingY: 22,
      gapBetween: 10,
      label: 'Button-lg'
    },
    md: {
      spacingX: 16,
      spacingY: 14,
      gapBetween: 10,
      label: 'Button'
    },
    sm: {
      spacingX: 12,
      spacingY: 10,
      gapBetween: 8,
      label: 'Button-sm'
    }
  } as Record<'lg' | 'md' | 'sm', ButtonSizeTokens>,

  // White variant tokens
  white: {
    bgColor: '#FFFFFF',
    bgHoverColor: '#F8FAFC',
    bgFocusColor: '#F8FAFC',
    bgDisabledColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderHoverColor: '#E5E7EB',
    borderDisabledColor: '#F3F4F6',
    primary: {
      iconColor: '#2563EB',
      iconHoverColor: '#1D4ED8',
      iconDisabledColor: '#BFDBFE',
      placeholderColor: '#2563EB',
      placeholderHoverColor: '#1D4ED8',
      placeholderDisabledColor: '#BFDBFE',
      dividerColor: '#93C5FD',
      dividerHoverColor: '#93C5FD',
      dividerDisabledColor: '#BFDBFE'
    },
    secondary: {
      iconColor: '#EC4899',
      iconHoverColor: '#EC4899',
      iconDisabledColor: '#FBCFE8',
      placeholderColor: '#EC4899',
      placeholderHoverColor: '#EC4899',
      placeholderDisabledColor: '#FBCFE8',
      dividerColor: '#F9A8D4',
      dividerHoverColor: '#F9A8D4',
      dividerDisabledColor: '#FBCFE8'
    },
    tertiary: {
      iconColor: '#EAB308',
      iconHoverColor: '#CA8A04',
      iconDisabledColor: '#FDE047',
      placeholderColor: '#EAB308',
      placeholderHoverColor: '#CA8A04',
      placeholderDisabledColor: '#FDE047',
      dividerColor: '#FDE047',
      dividerHoverColor: '#FDE047',
      dividerDisabledColor: '#FDE047'
    }
  },

  // Outlined variant tokens
  outlined: {
    primary: {
      borderColor: '#2563EB',
      borderHoverColor: '#3B82F6',
      borderDisabledColor: '#BFDBFE',
      bgFocusColor: 'rgba(255, 255, 255, 0.01)',
      iconColor: '#2563EB',
      iconHoverColor: '#3B82F6',
      iconDisabledColor: '#BFDBFE',
      placeholderColor: '#2563EB',
      placeholderHoverColor: '#3B82F6',
      placeholderDisabledColor: '#BFDBFE',
      dividerColor: '#93C5FD',
      dividerHoverColor: 'rgba(255, 255, 255, 0.5)',
      dividerDisabledColor: '#BFDBFE'
    },
    secondary: {
      borderColor: '#EC4899',
      borderHoverColor: '#F472B6',
      borderDisabledColor: '#FBCFE8',
      bgFocusColor: 'rgba(255, 255, 255, 0.01)',
      iconColor: '#EC4899',
      iconHoverColor: '#F472B6',
      iconDisabledColor: '#FBCFE8',
      placeholderColor: '#EC4899',
      placeholderHoverColor: '#F472B6',
      placeholderDisabledColor: '#FBCFE8',
      dividerColor: '#F9A8D4',
      dividerHoverColor: 'rgba(255, 255, 255, 0.5)',
      dividerDisabledColor: '#FBCFE8'
    },
    tertiary: {
      borderColor: '#EAB308',
      borderHoverColor: '#FACC15',
      borderDisabledColor: '#FDE047',
      bgFocusColor: 'rgba(255, 255, 255, 0.01)',
      iconColor: '#EAB308',
      iconHoverColor: '#FACC15',
      iconDisabledColor: '#FDE047',
      placeholderColor: '#EAB308',
      placeholderHoverColor: '#FACC15',
      placeholderDisabledColor: '#FDE047',
      dividerColor: '#FDE047',
      dividerHoverColor: 'rgba(255, 255, 255, 0.5)',
      dividerDisabledColor: '#FDE047'
    },
    danger: {
      borderColor: '#DC2626', // Approximate danger color
      borderHoverColor: '#EF4444',
      borderDisabledColor: '#FCA5A5',
      bgFocusColor: 'rgba(255, 255, 255, 0.01)',
      iconColor: '#DC2626',
      iconHoverColor: '#EF4444',
      iconDisabledColor: '#FCA5A5',
      placeholderColor: '#DC2626',
      placeholderHoverColor: '#EF4444',
      placeholderDisabledColor: '#FCA5A5',
      dividerColor: '#FCA5A5',
      dividerHoverColor: 'rgba(255, 255, 255, 0.5)',
      dividerDisabledColor: '#FCA5A5'
    }
  }
};

export type ButtonVariant = 'white' | 'outlined';
export type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'lg' | 'md' | 'sm';

