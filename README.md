# BITS Design System - Button Component

Angular button component built with design system tokens from Figma.

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Storybook
```bash
npm run storybook
```

### Build Storybook
```bash
npm run build-storybook
```

## Component Usage

```html
<bits-button variant="outlined" color="primary" size="md">
  Button Text
</bits-button>
```

## Deploy to GitHub Pages

Push to GitHub and enable GitHub Pages. The workflow in `.github/workflows/storybook.yml` will automatically build and deploy Storybook.

## Files

- `bits-button.component.*` - Button component files
- `button.tokens.ts` - Design system tokens
- `.storybook/` - Storybook configuration
- `*.stories.ts` - Storybook stories

