import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUTTON_TOKENS, ButtonVariant, ButtonColor, ButtonSize } from './button.tokens';

/**
 * BITS Design System Button Component
 * Based on design system tokens from Figma
 */
@Component({
  selector: 'bits-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bits-button.component.html',
  styleUrls: ['./bits-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitsButtonComponent {
  @Input() variant: ButtonVariant = 'outlined';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() pill: boolean = false;
  @Input() loading: boolean = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  readonly tokens = BUTTON_TOKENS;

  get buttonClasses(): string {
    const classes: string[] = ['bits-button'];
    
    // Variant and color
    classes.push(`bits-button--${this.variant}`);
    classes.push(`bits-button--${this.variant}-${this.color}`);
    
    // Size
    classes.push(`bits-button--${this.size}`);
    
    // States
    if (this.disabled) {
      classes.push('bits-button--disabled');
    }
    if (this.loading) {
      classes.push('bits-button--loading');
    }
    if (this.pill) {
      classes.push('bits-button--pill');
    }

    return classes.join(' ');
  }

  get buttonStyles(): Record<string, string> {
    const sizeTokens = this.tokens.sizes[this.size];
    const variantTokens = this.variant === 'white' 
      ? this.tokens.white[this.color as 'primary' | 'secondary' | 'tertiary']
      : this.tokens.outlined[this.color];

    const styles: Record<string, string> = {
      '--button-padding-x': `${sizeTokens.spacingX}px`,
      '--button-padding-y': `${sizeTokens.spacingY}px`,
      '--button-gap': `${sizeTokens.gapBetween}px`,
      '--button-icon-size': `${this.tokens.iconSize}px`,
      '--button-border-radius': this.pill 
        ? `${this.tokens.pilledBorderRadius}px` 
        : `${this.tokens.borderRadius}px`
    };

    // Variant-specific styles
    if (this.variant === 'white') {
      const whiteBase = this.tokens.white;
      styles['--button-bg-color'] = this.disabled 
        ? whiteBase.bgDisabledColor 
        : whiteBase.bgColor;
      styles['--button-border-color'] = this.disabled 
        ? whiteBase.borderDisabledColor 
        : whiteBase.borderColor;
      styles['--button-text-color'] = this.disabled 
        ? variantTokens.placeholderDisabledColor 
        : variantTokens.placeholderColor;
      styles['--button-icon-color'] = this.disabled 
        ? variantTokens.iconDisabledColor 
        : variantTokens.iconColor;
      
      // Hover styles (only if not disabled)
      if (!this.disabled) {
        styles['--button-bg-color-hover'] = whiteBase.bgHoverColor || whiteBase.bgColor;
        styles['--button-text-color-hover'] = variantTokens.placeholderHoverColor || variantTokens.placeholderColor;
        styles['--button-icon-color-hover'] = variantTokens.iconHoverColor || variantTokens.iconColor;
      }
    } else {
      // Outlined
      styles['--button-bg-color'] = 'transparent';
      styles['--button-border-color'] = this.disabled 
        ? variantTokens.borderDisabledColor 
        : variantTokens.borderColor;
      styles['--button-text-color'] = this.disabled 
        ? variantTokens.placeholderDisabledColor 
        : variantTokens.placeholderColor;
      styles['--button-icon-color'] = this.disabled 
        ? variantTokens.iconDisabledColor 
        : variantTokens.iconColor;
      
      // Hover styles (only if not disabled)
      if (!this.disabled) {
        styles['--button-border-color-hover'] = variantTokens.borderHoverColor || variantTokens.borderColor;
        styles['--button-text-color-hover'] = variantTokens.placeholderHoverColor || variantTokens.placeholderColor;
        styles['--button-icon-color-hover'] = variantTokens.iconHoverColor || variantTokens.iconColor;
        if (variantTokens.bgFocusColor) {
          styles['--button-bg-color-hover'] = variantTokens.bgFocusColor;
        }
      }
    }

    return styles;
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}

