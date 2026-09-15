# Setup Guide — DEFCON-X: AI Defence Readiness & Threat Intelligence Copilot

> **This file is read by the automated evaluation pipeline. Be precise and complete.**

## Prerequisites

Before you begin, ensure you have the following installed:

- [ ] **Node.js 18+** (or compatible runtime)
- [ ] **Bun 1.0+** (package manager and runtime — download from https://bun.sh)
- [ ] **Git** (for cloning the repository)
- [ ] **A code editor** (VS Code recommended)

Optional (for backend/AI features):
- [ ] **Python 3.11+** (for future watsonx.ai integration)
- [ ] **PostgreSQL 14+** (for future database integration)
- [ ] **IBM Cloud account** (for watsonx.ai API access)

## Environment Variables

Copy `src/.env.example` to `src/.env` and fill in the values:

```bash
cp src/.env.example src/.env
```

| Variable | Description | Required | Example |
|---|---|---|---|
| `VITE_API_URL` | Backend API endpoint | No | `http://localhost:3000` |
| `VITE_WATSONX_API_KEY` | IBM watsonx.ai API key | No (future) | `your-api-key-here` |
| `VITE_WATSONX_PROJECT_ID` | watsonx.ai project ID | No (future) | `your-project-id` |

For now, the app runs with mock data and requires no external API keys.

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/niyati-trivedi/bob-ai-hackathon-Tech-Titans.git
cd bob-ai-hackathon-Tech-Titans
```

### Step 2: Install Dependencies
```bash
bun install
```

This will install all required packages:
- React 19.2 + React DOM
- TanStack Start, Router, Query
- Radix UI + shadcn/ui components
- Tailwind CSS
- Recharts for data visualization
- And all other dependencies listed in `package.json`

### Step 3: (Optional) Set Up Environment Variables
```bash
cp src/.env.example src/.env
```

Currently not required for development, but prepared for future watsonx.ai integration.

## Running the Application

### Development Mode

```bash
bun run dev
```

The application will start at: **`http://localhost:5173`**

The development server includes:
- Hot module reloading (HMR)
- Fast refresh for React components
- TypeScript type checking
- ESLint and Prettier integration

### Production Build

```bash
bun run build
```

Outputs an optimized build to the `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

Runs the production build locally for testing.

## Code Quality

### Linting
```bash
bun run lint
```

Uses ESLint to check code quality and TypeScript correctness.

### Formatting
```bash
bun run format
```

Uses Prettier to automatically format code.

## Application Structure

After running `bun run dev`, navigate to:

- **Home / Dashboard**: `http://localhost:5173/`
- **Command Center**: `http://localhost:5173/command`
- **Fleet Management**: `http://localhost:5173/fleet`
- **Maintenance**: `http://localhost:5173/maintenance`
- **Incidents**: `http://localhost:5173/incidents`
- **Asset Twin**: `http://localhost:5173/twin/[asset-id]`

All pages are scaffolded with mock data and ready for integration with actual backend APIs and watsonx.ai.

## Project Layout

```
src/
  components/       # Reusable React components (Radix UI based)
  hooks/            # Custom React hooks
  lib/              # Utility functions, error handling
  routes/           # File-based TanStack Start pages
  router.tsx        # Router configuration
  server.ts         # SSR error handler
  start.ts          # Middleware setup
  styles.css        # Tailwind CSS + custom theme
public/             # Static assets
docs/               # Documentation
demo/               # Demo video link, screenshots
presentation/       # Presentation slides
package.json        # Dependencies & scripts
vite.config.ts      # Vite configuration
tsconfig.json       # TypeScript configuration
```

## Future Integration: watsonx.ai

The architecture is prepared for AI integration:

1. **Set up IBM Cloud account** and watsonx.ai project
2. **Add API credentials** to `.env`
3. **Update backend APIs** to call watsonx.ai endpoints for:
   - Anomaly detection in asset health data
   - Threat assessment and prioritization
   - Actionable recommendation generation
4. **Connect to frontend** via existing TanStack Query setup

See `docs/architecture.md` for the full system design.

## Troubleshooting

| Issue | Solution |
|---|---|
| **`command not found: bun`** | Install Bun from https://bun.sh or use `npm install -g bun` |
| **Port 5173 already in use** | Kill the process on that port or specify a different port: `bun run dev -- --port 3000` |
| **Module not found errors** | Run `bun install` again, and ensure all dependencies are installed |
| **TypeScript errors** | Check `tsconfig.json` and run `bun run lint` to identify issues |
| **Hot reload not working** | Restart the dev server: `Ctrl+C`, then `bun run dev` |
| **Tailwind CSS not loading** | Ensure `styles.css` is imported in `src/routes/__root.tsx` |

## Getting Help

- **Official Docs**: [TanStack Start](https://tanstack.com/start/latest), [Tailwind CSS](https://tailwindcss.com/docs)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Data Viz**: [Recharts](https://recharts.org/en-US/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## Quick Demo

To see the application in action:

1. Run `bun run dev`
2. Open `http://localhost:5173` in your browser
3. Navigate through the different pages (Command, Fleet, Maintenance, Incidents)
4. View mock data and AI-ready UI components
5. Check the console for any development notes

The app is fully functional as a prototype with mock data. Real data integration and AI features will be powered by backend APIs and watsonx.ai.
