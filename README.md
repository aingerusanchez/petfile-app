# PetFile

Mobile app for pet health tracking and care management. Built with React Native + Expo.

![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-Proprietary%20(No%20AI%20Training)-red)

## Features

- **Diary** - Track daily activities (walks, meals, medications)
- **Health** - Monitor weight, vaccines, and vet appointments
- **Profile** - Pet ID card and emergency contacts

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Expo](https://expo.dev) | Development platform & build tools |
| [React Native](https://reactnative.dev) | Cross-platform mobile UI |
| [Expo Router](https://docs.expo.dev/router/introduction/) | File-based navigation |
| [NativeWind](https://www.nativewind.dev) | Tailwind CSS for React Native |
| [Lucide Icons](https://lucide.dev) | Icon library |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 8
- [Expo Go](https://expo.dev/go) app on your device (for testing)

## Setup

### 1. Clone the repository

```bash
git clone git@github.com:your-username/petfile.git
cd petfile
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm start
```

### 4. Run on device/simulator

| Platform | Command | Requirements |
|----------|---------|--------------|
| **Expo Go** | Scan QR code | Expo Go app installed |
| **Web** | `pnpm web` | None |
| **Android** | `pnpm android` | Android Studio / Emulator |
| **iOS** | `pnpm ios` | Xcode (macOS only) |

> **Tip:** Use `pnpm start --clear` after changing config files to clear cache.

## Project Structure

```
petfile/
├── app/                      # Routes (Expo Router)
│   ├── _layout.tsx           # Root layout
│   └── (tabs)/               # Tab navigation group
│       ├── _layout.tsx       # Tabs config
│       ├── index.tsx         # Diary screen
│       ├── health.tsx        # Health screen
│       └── profile.tsx       # Profile screen
├── components/               # Reusable components
├── tailwind.config.js        # Design tokens & colors
├── babel.config.js           # Babel + NativeWind
├── AGENTS.md                 # AI agent context
└── README.md
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm start` | Start Expo dev server |
| `pnpm start --clear` | Start with cleared cache |
| `pnpm web` | Run on web browser |
| `pnpm android` | Run on Android |
| `pnpm ios` | Run on iOS |
| `pnpm typecheck` | Run TypeScript checks |
| `pnpm lint` | Run linter |

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ice-blue` | `#A5F2F3` | Primary accent |
| `surface` | `#F8FAFC` | Background |
| `surface-elevated` | `#FFFFFF` | Cards |
| `text-primary` | `#1E293B` | Main text |
| `text-secondary` | `#475569` | Secondary text |
| `text-tertiary` | `#94A3B8` | Muted text |
| `success` | `#22C55E` | Success states |
| `warning` | `#F59E0B` | Warning states |
| `error` | `#EF4444` | Error states |

### Typography

Font: **Outfit** (Google Fonts)

| Weight | Font Family | Usage |
|--------|-------------|-------|
| 400 | `Outfit_400Regular` | Body text |
| 500 | `Outfit_500Medium` | Labels |
| 600 | `Outfit_600SemiBold` | Section titles |
| 700 | `Outfit_700Bold` | Page titles |

### Styling with NativeWind

```tsx
import { View, Text } from "react-native";

export default function Example() {
  return (
    <View className="flex-1 p-4 bg-surface">
      <Text className="text-2xl text-text-primary">Hello</Text>
    </View>
  );
}
```

## Code Conventions

- Functional components with hooks
- Arrow functions for components
- NativeWind classes over inline styles
- Small, focused components
- Co-located related files

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/) with Linear issue references.

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
| `docs` | Documentation |
| `style` | Code formatting |
| `refactor` | Code refactoring |
| `perf` | Performance |
| `test` | Tests |
| `chore` | Tooling/dependencies |

### Examples

```bash
feat(diary): add activity timeline PET-123
fix(tabs): correct icon alignment PET-45
chore(deps): update expo to 54.0.32
```

## Testing

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint
```

## Build & Deployment

```bash
# Production builds via EAS
npx eas build --platform android
npx eas build --platform ios

# Local builds
npx expo run:android
npx expo run:ios
```

## Troubleshooting

### App shows blank screen

- On web: `SafeAreaView` doesn't work properly. Check platform-specific code.
- On device: Run `pnpm start --clear` to clear cache.

### Metro bundler errors

```bash
rm -rf node_modules/.cache .expo
pnpm install
pnpm start --clear
```

### NativeWind styles not applying

- Ensure `tailwindcss@3.3.2` is installed (not 3.4+)
- Check `babel.config.js` has `nativewind/babel` plugin
- Restart Metro with `--clear` flag

## Contributing

1. Create a branch from `main`
2. Make your changes
3. Run `pnpm typecheck` and `pnpm lint`
4. Commit following conventions
5. Open a Pull Request

## License

**Proprietary License with AI Training Restriction**

- ✅ View and learn from source code
- ✅ Run locally for personal use
- ✅ Contribute via pull requests
- ❌ Commercial use prohibited
- ❌ AI/ML training prohibited

See [LICENSE.md](LICENSE.md) for full terms.
