/**
 * PetFile Design System - Theme Tokens
 *
 * SINGLE SOURCE OF TRUTH for the entire app.
 * - Tailwind: imports from colors.js (CommonJS mirror of these values)
 * - React Native: imports directly from this file
 *
 * Semantic color naming:
 * - primary: Brand/accent color (Ice Blue)
 * - background: Screen backgrounds
 * - surface: Cards, modals, elevated elements
 * - text: Primary readable text
 * - muted: Secondary/helper text
 * - subtle: Tertiary text
 * - border: Default borders
 * - success/warning/error/info: Semantic states
 */

// =============================================================================
// LIGHT MODE COLORS (from Pencil Style Guide)
// =============================================================================

export const colors = {
  // Brand
  primary: "#A5F2F3", // Ice Blue
  primaryDark: "#7DD9DA", // Ice Blue Dark (hover/pressed)
  accent: "#FF8C42", // Orange accent

  // Backgrounds
  background: "#F8FAFC", // Surface Light
  surface: "#FFFFFF", // Snow White

  // Text
  text: "#1E293B", // Slate Dark
  muted: "#94A3B8", // Slate Light
  subtle: "#475569", // Slate Medium

  // Borders
  border: "#E2E8F0", // Border Subtle

  // Semantic
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#0EA5E9",

  // Shadows (React Native specific)
  shadow: "#1E293B",
} as const;

// =============================================================================
// DARK MODE COLORS (from Pencil Style Guide)
// =============================================================================

export const colorsDark = {
  // Brand
  primary: "#7DD9DA", // Ice Blue Dark
  primaryDark: "#A5F2F3", // Ice Blue (inverted for dark)
  accent: "#FFA366", // Orange accent (lighter for dark mode)

  // Backgrounds
  background: "#0F172A", // Slate 900
  surface: "#1E293B", // Slate 800

  // Text
  text: "#F8FAFC", // Slate 50
  muted: "#64748B", // Slate 500
  subtle: "#94A3B8", // Slate 400

  // Borders
  border: "#334155", // Slate 700

  // Semantic (lighter for dark mode contrast)
  success: "#4ADE80",
  warning: "#FBBF24",
  error: "#F87171",
  info: "#38BDF8",

  // Shadows
  shadow: "#000000",
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const fonts = {
  regular: "Outfit_400Regular",
  medium: "Outfit_500Medium",
  semibold: "Outfit_600SemiBold",
  bold: "Outfit_700Bold",
} as const;

export const fontSize = {
  xs: 10,
  sm: 11,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 26,
  "4xl": 36,
} as const;

export const letterSpacing = {
  tight: -1,
  normal: 0,
  wide: 0.5,
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 48,
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 28,
  full: 9999,
} as const;

// =============================================================================
// TYPE ALIAS
// =============================================================================

/** Color keys available in both light and dark themes */
export type ThemeColors = {
  primary: string;
  primaryDark: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  subtle: string;
  border: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  shadow: string;
};
