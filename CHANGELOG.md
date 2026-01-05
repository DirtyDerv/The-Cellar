# Changelog

All notable changes to this project.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [Unreleased]

### Added
- Next.js 15.5.9 project with TypeScript, Tailwind CSS, and App Router
- Shadcn UI framework integration with theme system and CSS variables
- Mock database service layer (`lib/services/mockDatabase.ts`) as Supabase placeholder
- Mock data store (`lib/services/mockData.ts`) with sample products, scans, and users
- GLM-4V Vision API client (`lib/services/visionApi.ts`) for product recognition
- TypeScript type definitions (`types/index.ts`) for Product, Scan, ScanItem, UserProfile
- Helper utilities (`lib/helpers.ts`) for image compression, date formatting, and ID generation
- Environment variable templates (`.env.example`, `.env.local`)
- Project directory structure: `/app`, `/components`, `/lib`, `/types`, `/public`
- Build configuration: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.mjs`
- ESLint configuration for Next.js code quality

### Changed
- CLAUDE.md - Comprehensive guidance for Claude Code instances working in this repository
  - Project context and tech stack overview
  - Database schema and core user flow documentation
  - Development setup instructions and environment variables
  - Project priorities, success criteria, and MVP scope
  - Technical considerations for image handling and API costs
  - Code organization guidelines for Next.js structure
  - Development philosophy emphasizing prototype-first approach
- Mandatory workflow requirement to run auto-docs skill after every execution
- Core documentation structure (CHANGELOG.md, PROJECT_STATUS.md, TODO.md, DECISIONS.md)

## [0.2.0] - 2026-01-05

### Added
- Phase 2 (SETUP) completed - Next.js project initialized and ready for development
- Next.js 15.5.9 with App Router, TypeScript, Tailwind CSS, and ESLint
- Shadcn UI framework with theme system and utility components
- Mock database service layer to simulate Supabase operations (for development without external dependencies)
- GLM-4V Vision API client with structured prompts for product identification
- TypeScript type system covering all domain models (Products, Scans, Users)
- Helper utilities for image compression, date formatting, and data manipulation
- Environment variable configuration with API key placeholders
- Complete project directory structure following Next.js best practices
- Verified build succeeds with no TypeScript errors

### Changed
- Development approach: Using mock data services instead of immediate Supabase setup
- Project ready for Phase 3 (BUILD) - core feature implementation

## [0.1.0] - 2026-01-05

### Added
- Initial project planning and specification (Phase 1: PLAN)
- PROJECT-SPEC.md with complete requirements, user workflows, database schema
- README.md with project overview and PSB methodology tracking
- .gitignore configured for Next.js project
- PSB methodology reference document
- Git repository initialization and first commit
