/**
 * Theme Hook - Provides dynamic theme colors based on system preference
 *
 * Uses React Native's useColorScheme() to detect system theme and
 * returns the appropriate color palette (light or dark mode).
 */

import { useColorScheme, ColorSchemeName } from "react-native";
import { colors, colorsDark, ThemeColors } from "@/constants/theme";

export type ColorScheme = "light" | "dark";

/**
 * Hook to get the current theme colors based on system preference
 *
 * @returns Object containing:
 *  - colors: The current color palette (light or dark)
 *  - colorScheme: The current color scheme ("light" | "dark")
 *  - isDark: Boolean indicating if dark mode is active
 *
 * @example
 * const { colors, isDark } = useThemeColors();
 * <View style={{ backgroundColor: colors.background }}>
 *   <Text style={{ color: colors.text }}>Hello</Text>
 * </View>
 */
export function useThemeColors() {
  const systemScheme = useColorScheme();
  const colorScheme: ColorScheme = systemScheme === "dark" ? "dark" : "light";
  const isDark = colorScheme === "dark";

  return {
    colors: isDark ? colorsDark : colors,
    colorScheme,
    isDark,
  };
}

/**
 * Helper function to get colors for a specific scheme (non-reactive)
 * Useful for static configurations or outside of React components
 */
export function getColorsForScheme(scheme: ColorSchemeName): ThemeColors {
  return scheme === "dark" ? colorsDark : colors;
}
