# TODO

**Last Updated:** 2026-01-05

## High Priority - Phase 3: BUILD (Core MVP Features)

- [ ] Implement camera interface component (browser Camera API)
  - [ ] Request camera permission
  - [ ] Display camera preview
  - [ ] Capture button functionality
- [ ] Create image capture and compression functionality
- [ ] Build scan results display component
  - [ ] Show identified products with quantities
  - [ ] Display confidence scores
  - [ ] Manual edit interface (adjust quantities, product names)
- [ ] Implement `/api/scan` endpoint
  - [ ] Receive image from frontend
  - [ ] Call GLM-4V Vision API
  - [ ] Parse and validate API response
  - [ ] Return structured results
- [ ] Create basic landing page with navigation
- [ ] Build simple scan history view
- [ ] Add loading states and error handling for camera/API operations
- [ ] Test with real fridge photos (iterate on AI prompts for accuracy)

## Medium Priority - Phase 3: BUILD (Additional MVP Features)

- [ ] Create manager dashboard page
  - [ ] Display latest scan results
  - [ ] Show product inventory summary
  - [ ] Filter/search functionality
- [ ] Implement mock authentication flow
  - [ ] Login page
  - [ ] Role selection (staff/manager)
  - [ ] Protected routes
- [ ] Build product catalog management
  - [ ] View all products
  - [ ] Add new products manually
  - [ ] Edit existing products
- [ ] Add persistence layer for scans (save to mock database)
- [ ] Implement scan history view (list of past scans)
- [ ] Create settings/configuration page

## Low Priority - MVP Polish & Future Features

- [ ] Improve mobile UI/UX (touch targets, responsive design)
- [ ] Add keyboard shortcuts for common actions
- [ ] Implement dark mode toggle
- [ ] Add export functionality (CSV/Excel)
- [ ] Create onboarding/tutorial for first-time users
- [ ] Add data validation and error messages
- [ ] Implement offline mode support
- [ ] Add analytics/telemetry

## Deferred - Post-MVP (When Supabase Ready)

- [ ] Set up Supabase project on Supabase.com
- [ ] Create database tables (products, scans, scan_items, user_profiles)
- [ ] Configure Row Level Security (RLS) policies
- [ ] Implement real Supabase client in `/lib/services/supabaseDatabase.ts`
- [ ] Migrate from mock data services to real Supabase
- [ ] Implement real authentication (Supabase Auth)
- [ ] Test with production-like data

## Completed (Recent)

### Phase 2 (SETUP) - 2026-01-05
- [x] Initialized Next.js 15.5.9 project with TypeScript and App Router
- [x] Installed and configured Tailwind CSS
- [x] Installed and configured Shadcn UI framework
- [x] Created mock database service layer (`lib/services/mockDatabase.ts`)
- [x] Created mock data store with sample data (`lib/services/mockData.ts`)
- [x] Implemented GLM-4V Vision API client (`lib/services/visionApi.ts`)
- [x] Created TypeScript type definitions (`types/index.ts`)
- [x] Built helper utilities (`lib/helpers.ts`)
- [x] Set up environment variables template (`.env.example`, `.env.local`)
- [x] Created project directory structure (/app, /components, /lib, /types)
- [x] Verified build succeeds with no errors
- [x] **Phase 2 (SETUP) complete**

### Phase 1 (PLAN) - 2026-01-05
- [x] Created CLAUDE.md with development guidance
- [x] Established auto-docs workflow requirement
- [x] Set up core documentation files (CHANGELOG, PROJECT_STATUS, TODO, DECISIONS)
- [x] Completed PROJECT-SPEC.md with full technical requirements
- [x] Created README.md with project overview
- [x] Initialized Git repository
- [x] Pushed repository to GitHub
- [x] **Phase 1 (PLAN) complete**

## Blocked

None currently.

## Ideas / Backlog (Post-MVP)

- Multi-location support (different fridges/areas)
- Historical tracking and trend analysis
- Stock alerts (low stock notifications)
- Export to Excel/CSV functionality
- Barcode scanning fallback option
- Offline mode support
- Integration with POS systems
- Automated ordering suggestions based on trends
- Date tracking (expiry dates, delivery dates)
- Waste management features
