# AGENTS.md

> Context file for AI agents working on this project.

## Project Overview

**PetFile** is a mobile app for pet health tracking and care management. Built with React Native + Expo for cross-platform support (iOS, Android, Web).

## Tech Stack

| Technology          | Version | Purpose                                           |
| ------------------- | ------- | ------------------------------------------------- |
| Expo SDK            | 54      | Development platform                              |
| React Native        | 0.81.5  | Cross-platform UI                                 |
| React               | 19.1.0  | UI library                                        |
| Expo Router         | 6.x     | File-based navigation                             |
| NativeWind          | 2.0.11  | Tailwind CSS for React Native                     |
| Tailwind CSS        | 3.3.2   | Utility-first CSS (compatible with NativeWind v2) |
| Lucide React Native | -       | Icon library                                      |
| TypeScript          | 5.9.3   | Type safety                                       |

## Package Manager

This project uses **pnpm**. Do not use npm or yarn.

```bash
pnpm install    # Install dependencies
pnpm add <pkg>  # Add dependency
pnpm remove <pkg>  # Remove dependency
```

## Development

### Start Development Server

```bash
pnpm start          # Start Expo dev server
pnpm start --clear  # Start with cache cleared (use after config changes)
```

### Run on Platforms

```bash
# Mobile (requires Expo Go app or dev client)
# Scan QR code from terminal with Expo Go

# Web
pnpm web

# Android (requires Android Studio / emulator)
pnpm android

# iOS (requires Xcode, macOS only)
pnpm ios
```

### Testing on Physical Device

1. Install **Expo Go** from App Store / Play Store
2. Run `pnpm start`
3. Scan QR code with Expo Go (Android) or Camera app (iOS)
4. Device and computer must be on same WiFi network

If network issues, use tunnel mode:

```bash
pnpm start --tunnel
```

## Project Structure

```
petfile/
├── app/                    # Expo Router pages (file-based routing)
│   ├── _layout.tsx         # Root layout (fonts, providers)
│   ├── (tabs)/             # Tab group (URL: /)
│   │   ├── _layout.tsx     # Tabs configuration
│   │   ├── index.tsx       # Diary screen (/)
│   │   ├── health.tsx      # Health screen (/health)
│   │   └── profile.tsx     # Profile screen (/profile)
│   └── index.tsx           # Redirect or standalone pages
├── components/             # Reusable components
├── constants/              # App constants
│   └── theme.ts            # Design tokens (colors, fonts, spacing)
├── tailwind.config.js      # Tailwind/NativeWind config
├── babel.config.js         # Babel config with NativeWind plugin
├── metro.config.js         # Metro bundler config
└── global.css              # Global Tailwind imports
```

## Path Aliases

Configured in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@/*` | `./*` |
| `@/components/*` | `./components/*` |
| `@/constants/*` | `./constants/*` |
| `@/hooks/*` | `./hooks/*` |
| `@/store/*` | `./store/*` |
| `@/types/*` | `./types/*` |
| `@/utils/*` | `./utils/*` |

Example: `import { colors } from "@/constants/theme";`

## Routing Convention (Expo Router)

- `app/` directory = routes
- `_layout.tsx` = layout wrapper (not a route)
- `(folder)/` = route group (parentheses = not in URL)
- `index.tsx` = index route for directory
- `[param].tsx` = dynamic route

## Styling

### NativeWind v2 (Tailwind for React Native)

Use `className` prop on React Native components:

```tsx
<View className="flex-1 p-4 bg-surface">
  <Text className="text-2xl text-text-primary">Hello</Text>
</View>
```

### Design System Colors

Defined in `tailwind.config.js`:

| Token              | Value   | Usage                    |
| ------------------ | ------- | ------------------------ |
| `ice-blue`         | #A5F2F3 | Primary accent           |
| `surface`          | #F8FAFC | Background               |
| `surface-elevated` | #FFFFFF | Cards, elevated surfaces |
| `text-primary`     | #1E293B | Main text                |
| `text-secondary`   | #475569 | Secondary text           |
| `text-tertiary`    | #94A3B8 | Muted text               |
| `border`           | #E2E8F0 | Borders                  |
| `success`          | #22C55E | Success states           |
| `warning`          | #F59E0B | Warning states           |
| `error`            | #EF4444 | Error states             |

### Fonts

**Outfit** font family loaded via `@expo-google-fonts/outfit`:

- `Outfit_400Regular`
- `Outfit_500Medium`
- `Outfit_600SemiBold`
- `Outfit_700Bold`

Use in styles: `fontFamily: "Outfit_500Medium"`

## Important Notes

### NativeWind v2 Limitations

- No CSS variables support in native (use direct color values)
- No `@layer components` custom classes
- Compatible with Expo Go (no dev build required)
- Must use Tailwind CSS 3.3.x (not 3.4+)

### Safe Area Handling

Safe areas are handled in `app/(tabs)/_layout.tsx` using `useSafeAreaInsets()`. Individual screens don't need SafeAreaView.

### Known Issues

- `SafeAreaView` doesn't work properly on web; content may appear blank
- For web testing, use regular `View` or add platform checks

## Build & Deployment

```bash
# Create production build
npx eas build --platform android
npx eas build --platform ios

# Build for local testing
npx expo run:android
npx expo run:ios
```

## Type Checking

```bash
pnpm typecheck  # Run TypeScript compiler check
```

## Design Reference

UI designs are in Pencil format: `PetFile.pen`

Screens:

1. **Diario (Diary)** - Activity timeline for pet
2. **Salud (Health)** - Weight tracking, vaccines, appointments
3. **Perfil (Profile)** - Pet ID card, emergency contacts

## Code Conventions

- Use functional components with hooks
- Prefer `const` arrow functions for components
- Use NativeWind classes over inline styles when possible
- Keep components small and focused
- Co-locate related files

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/) with Linear issue references.

### Format

```
<type>(<scope>): <description>

[optional body]

[Linear issue ID]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, semicolons, etc.) |
| `refactor` | Code change that neither fixes nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, or tooling |

### Linear Issue Reference

Always reference the Linear issue ID in commits when applicable:

```bash
# In commit message footer
feat(diary): add activity timeline component

Implements the main timeline view with activity cards.

PET-123

# Or inline for simple commits
fix(tabs): correct icon alignment PET-45
```

### Examples

```bash
# Feature with scope
feat(health): add weight tracking chart PET-12

# Bug fix
fix(navigation): resolve tab bar overlap on Android PET-78

# Chore (no issue needed)
chore(deps): update expo to 54.0.32

# Docs
docs: add commit conventions to AGENTS.md
```

## Common Tasks

### Add a new tab screen

1. Create file in `app/(tabs)/newscreen.tsx`
2. Add `<Tabs.Screen>` in `app/(tabs)/_layout.tsx`
3. Import icon from `lucide-react-native`

### Add a new color

1. Add to `tailwind.config.js` under `theme.extend.colors`
2. Use as `className="bg-{color-name}"` or `text-{color-name}`

### Add a new component

1. Create in `components/ComponentName.tsx`
2. Export as default
3. Use NativeWind for styling
