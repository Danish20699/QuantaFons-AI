# QuantaFONS - Quantum AI & Healthcare Solutions

## Overview

QuantaFONS is an enterprise technology company website showcasing AI security, biometrics, quantum computing, and healthcare solutions. The application is a full-stack TypeScript project with a React frontend and Express backend, featuring product catalogs, project portfolios, research publications, and contact functionality.

The platform presents four main product lines:
- Q-Secure Intelligence (AI Security)
- Q-ID Biometrics (Identity Management)
- QuantaFONS AI/Eli S1 (Generative AI)
- OncoAI Research Platform (Healthcare)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with shadcn/ui component library
- **Design System**: IBM Design Language inspired (IBM Plex Sans font, sharp corners, clean enterprise aesthetic)
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful JSON API under `/api/*` routes
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Schema Validation**: Zod with drizzle-zod integration

### Data Storage
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts` - contains tables for users, products, product specs/features, projects, project stats, research papers, and team members
- **Migrations**: Managed via `drizzle-kit push` command

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (layout, home sections, shadcn/ui)
│   │   ├── pages/       # Route pages (Home, Products, Projects, Research, Contact)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities, query client, data helpers
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migration files
```

### API Endpoints
- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product with specs and features
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get project with stats
- `GET /api/research` - List research papers
- `GET /api/team` - List team members

### Build System
- Development: `npm run dev` - runs Express server with Vite middleware for HMR
- Production: `npm run build` - bundles client with Vite, server with esbuild
- Database: `npm run db:push` - pushes schema changes to database

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI Framework
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Tailwind CSS v4**: Utility-first CSS framework
- **Lucide React**: Icon library

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **Wouter**: Client-side routing
- **class-variance-authority**: Component variant management

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner

### Fonts
- **IBM Plex Sans**: Loaded from Google Fonts, used for headings and body text