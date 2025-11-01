# LJA Power Limited Co. - Generator Solutions Platform

## Overview

LJA Power Limited Co. is a professional generator solutions company providing industrial and commercial power generation systems. This is a full-stack web application built with React and Express, featuring a product catalog, service descriptions, project showcases, and contact capabilities. The application uses a modern industrial design system with a dark blue color scheme and yellow accents, following enterprise tech company aesthetics similar to Siemens and Caterpillar.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite for fast development and optimized production builds
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack React Query for server state
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **Styling:** Tailwind CSS with custom design system

**Design System:**
The application implements a comprehensive design system defined in `design_guidelines.md`:
- **Color Palette:** Dark industrial theme with primary (#0c2430), secondary panels (#145d77), and yellow accent (#f5ec19)
- **Typography:** Inter/Poppins for headings, Inter/Open Sans for body text, Roboto Mono for technical specifications
- **Component Library:** Custom components including Hero sections, feature cards, product cards, project cards, and service cards
- **Layout System:** Tailwind spacing primitives with responsive grid layouts

**Page Structure:**
- Home: Hero with features, featured products, and testimonials
- About: Company overview with mission/vision/values
- Products: Filterable product catalog with detail pages
- Services: Service cards with installation, maintenance, and support information
- Projects: Project showcase with case studies and testimonials
- Contact: Contact form with company information

**Key Design Decisions:**
- Component-based architecture with reusable UI elements
- Responsive design with mobile-first approach
- Accessible components using Radix UI primitives
- Type-safe development with TypeScript throughout

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Language:** TypeScript with ESM modules
- **Database ORM:** Drizzle ORM
- **Session Management:** connect-pg-simple for PostgreSQL-based sessions

**Server Structure:**
- Minimal Express server setup with middleware for JSON parsing and request logging
- Vite integration for development with HMR (Hot Module Replacement)
- Route registration system in `server/routes.ts` (currently minimal with placeholder structure)
- Storage abstraction layer with in-memory implementation

**Current Implementation:**
The backend is currently scaffolded with:
- Basic user schema (username/password) in PostgreSQL
- Storage interface with CRUD methods for users
- In-memory storage implementation (`MemStorage`) as fallback
- API route structure ready for expansion under `/api` prefix

**Rationale:**
The backend is intentionally minimal, focusing on serving the React frontend. The storage abstraction allows for easy switching between in-memory and database implementations. The application appears to be primarily content-driven with potential for future e-commerce or lead generation features.

### Data Architecture

**Database:**
- **Database Type:** PostgreSQL (configured via Drizzle ORM)
- **Schema Location:** `shared/schema.ts`
- **Migration Tool:** Drizzle Kit for schema migrations

**Current Schema:**
- Users table with ID (UUID), username, and password fields
- Schema validation using Zod for type safety

**Design Pattern:**
- Shared schema definitions between frontend and backend
- Type-safe database queries with Drizzle ORM
- Validation schemas derived from database schema using drizzle-zod

**Note:** The application is configured for PostgreSQL but may not have an active database connection yet. The in-memory storage implementation suggests the app can run without a database during development.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI:** Complete set of accessible, unstyled UI primitives (accordion, dialog, dropdown, navigation, etc.)
- **shadcn/ui:** Pre-styled component library built on Radix UI
- **Lucide React:** Icon library for consistent iconography
- **Embla Carousel:** Carousel/slider functionality
- **cmdk:** Command palette component

### Styling and Design
- **Tailwind CSS:** Utility-first CSS framework
- **class-variance-authority:** Variant-based component styling
- **clsx & tailwind-merge:** Conditional class name utilities

### Data and State Management
- **TanStack React Query:** Server state management with caching
- **React Hook Form:** Form state management with validation
- **Zod:** Schema validation library
- **@hookform/resolvers:** React Hook Form integration with Zod

### Database and Backend
- **Drizzle ORM:** Type-safe SQL ORM for PostgreSQL
- **@neondatabase/serverless:** Neon serverless PostgreSQL driver
- **connect-pg-simple:** PostgreSQL session store for Express

### Development Tools
- **Vite:** Build tool and development server
- **Replit Plugins:** Runtime error modal, cartographer (dependency visualization), dev banner
- **TypeScript:** Type system for JavaScript
- **esbuild:** JavaScript bundler for production builds

### Build and Deployment
- **Development:** Vite dev server with HMR
- **Production:** Vite build for frontend, esbuild for backend bundling
- **Static Assets:** Served from `dist/public` after build

### Asset Management
The application uses generated images stored in `attached_assets/generated_images/` for:
- Hero backgrounds (generators in operation)
- Product images (white background product shots)
- Project/installation images
- Office and showroom imagery