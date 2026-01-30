/**
 * PetFile Design System - Color Tokens
 *
 * Semantic color naming for easy usage:
 * - Use "primary" for brand/accent elements
 * - Use "background" for screen backgrounds
 * - Use "surface" for cards/elevated elements
 * - Use "text" for primary text
 * - Use "muted" for secondary/disabled text
 *
 * Tailwind usage examples:
 * - bg-primary, bg-surface, bg-background
 * - text-primary, text-muted
 * - border-primary, border-subtle
 *
 * Dark mode: Use dark: prefix with same color names
 * - bg-background dark:bg-background (auto-switches)
 */

// =============================================================================
// LIGHT MODE (default)
// =============================================================================
const light = {
  // Brand
  primary: "#A5F2F3", // Ice Blue - main brand color
  "primary-dark": "#7DD9DA", // Ice Blue Dark - pressed/hover state
  accent: "#FF8C42", // Orange accent

  // Backgrounds
  background: "#F8FAFC", // Main screen background
  surface: "#FFFFFF", // Cards, modals, elevated surfaces

  // Text
  text: "#1E293B", // Primary text (slate-800)
  muted: "#94A3B8", // Secondary/helper text (slate-400)
  subtle: "#475569", // Tertiary text (slate-600)

  // Borders
  border: "#E2E8F0", // Default borders (slate-200)

  // Semantic
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#0EA5E9",
};

// =============================================================================
// DARK MODE
// =============================================================================
const dark = {
  // Brand
  "dark-primary": "#7DD9DA", // Ice Blue Dark
  "dark-primary-dark": "#A5F2F3",
  "dark-accent": "#FFA366", // Orange accent (lighter for dark mode)

  // Backgrounds
  "dark-background": "#0F172A", // slate-900
  "dark-surface": "#1E293B", // slate-800

  // Text
  "dark-text": "#F8FAFC", // slate-50
  "dark-muted": "#64748B", // slate-500
  "dark-subtle": "#94A3B8", // slate-400

  // Borders
  "dark-border": "#334155", // slate-700

  // Semantic (lighter variants for dark mode contrast)
  "dark-success": "#4ADE80",
  "dark-warning": "#FBBF24",
  "dark-error": "#F87171",
  "dark-info": "#38BDF8",
};

module.exports = {
  ...light,
  ...dark,
};
