/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary accent
        "ice-blue": "#A5F2F3",
        "ice-blue-dark": "#7DD9DA",

        // Surfaces
        surface: "#F8FAFC",
        "surface-elevated": "#FFFFFF",

        // Text
        "text-primary": "#1E293B",
        "text-secondary": "#475569",
        "text-tertiary": "#94A3B8",

        // Border
        border: "#E2E8F0",

        // Semantic
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",

        // Legacy aliases (para compatibilidad con código existente)
        "snow-white": "#FFFFFF",
        "surface-light": "#F8FAFC",
        "slate-dark": "#1E293B",
        "slate-medium": "#475569",
        "slate-light": "#94A3B8",
        "border-subtle": "#E2E8F0",
      },
      fontFamily: {
        "outfit-regular": ["Outfit_400Regular"],
        "outfit-medium": ["Outfit_500Medium"],
        "outfit-semibold": ["Outfit_600SemiBold"],
        "outfit-bold": ["Outfit_700Bold"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        tab: ["11px", { lineHeight: "14px" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "28px",
      },
      spacing: {
        18: "72px",
        22: "88px",
      },
    },
  },
  plugins: [],
};
