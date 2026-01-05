# Architecture

**Last Updated:** 2026-01-05
**Status:** Phase 2 (SETUP) complete - Project initialized, ready for feature development

## Overview

The Cellar is a web-based stock management application for pubs that uses AI-powered computer vision to identify and count products from shelf photos. Staff point their phone camera at a fridge shelf, the AI (GLM-4V Vision API) identifies products and counts quantities, and results are saved to a Supabase database for tracking.

**Architecture Style:** JAMstack web application with serverless API routes and external AI service

## System Components

### Frontend - Next.js Web Application
- **Purpose:** User interface for camera scanning, results display, and stock dashboard
- **Location:** `/app` (Next.js App Router)
- **Technology:** Next.js 14+, React, Tailwind CSS, Shadcn UI
- **Key Features:**
  - Camera interface using browser Camera API
  - Image capture and upload
  - Scan results display with manual editing
  - Manager dashboard for stock overview
  - Authentication flows
- **Hosting:** Vercel (automatic deployments from GitHub)

### API Layer - Next.js API Routes
- **Purpose:** Backend logic, AI integration, database operations
- **Location:** `/app/api`
- **Technology:** Next.js API routes (serverless functions)
- **Key Endpoints (Planned):**
  - `POST /api/scan` - Process image, call GLM-4V, return product identification
  - `GET/POST /api/products` - CRUD operations for product catalog
  - `GET/POST /api/scans` - Fetch and create scan records
  - `GET /api/users` - User management and role info

### AI Vision Service - GLM-4V API (External)
- **Purpose:** Product identification and quantity counting from images
- **Technology:** Zhipu AI GLM-4V Vision API (OpenAI-compatible format)
- **API Endpoint:** `https://open.bigmodel.cn/api/paas/v4/chat/completions`
- **Model:** `glm-4v` or `glm-4-6v`
- **Integration:** Wrapper service in `/lib` to handle API calls, error handling, retry logic

### Database - Mock Data Services (Development)
- **Purpose:** In-memory storage simulating database operations
- **Technology:** TypeScript classes with in-memory data structures
- **Implementation:** `lib/services/mockDatabase.ts` and `lib/services/mockData.ts`
- **Features:** Full CRUD operations matching planned Supabase interface
- **Status:** ✅ Implemented
- **Future:** Will be replaced with real Supabase when ready for production

### Authentication - Mock Authentication (Development)
- **Purpose:** Simulated user login and role management
- **Technology:** Mock authentication flow returning predefined users
- **Implementation:** Part of mock database service
- **Roles:** `staff` (can scan) and `manager` (can view dashboards)
- **Status:** Basic structure ready, full auth flow to be implemented
- **Future:** Will be replaced with Supabase Auth for production

## Data Flow

### Primary Flow: Staff Scanning Products

1. **User Action:** Staff opens web app on phone/tablet
2. **Camera Access:** Frontend requests camera permission via `navigator.mediaDevices.getUserMedia()`
3. **Image Capture:** User points camera at shelf, taps "Scan" button
4. **Image Processing:** Frontend compresses image to reduce bandwidth
5. **API Call:** Frontend sends image to `POST /api/scan` endpoint
6. **AI Processing:**
   - API route receives image
   - Calls GLM-4V API wrapper in `/lib`
   - Sends image + structured prompt to GLM-4V
   - GLM-4V returns JSON: `{"products": [{"name": "...", "quantity": ...}]}`
7. **Response:** API route returns structured data to frontend
8. **Display:** Frontend shows results to user
9. **Manual Correction:** User can edit product names or quantities
10. **Persistence:**
    - Frontend sends finalized data to `POST /api/scans`
    - API route creates scan record in `scans` table
    - Creates individual `scan_items` entries for each product
11. **Confirmation:** User sees success message, can scan next shelf

### Secondary Flow: Manager Viewing Dashboard

1. **User Action:** Manager opens web app and logs in
2. **Authentication:** Supabase Auth verifies credentials and role
3. **Dashboard Load:** Frontend calls `GET /api/scans` to fetch latest data
4. **Database Query:** API route queries Supabase for recent scans and aggregated stock
5. **Display:** Frontend renders stock levels, last scan date, product quantities

## Database Schema

### Tables

#### `products`
```sql
id: uuid (primary key)
name: text
category: text (optional - e.g., "Beer", "Spirits", "Wine")
created_at: timestamp
updated_at: timestamp
```

#### `scans`
```sql
id: uuid (primary key)
user_id: uuid (foreign key to auth.users)
scanned_at: timestamp
location: text (optional - e.g., "Main Fridge", "Back Cellar")
notes: text (optional)
created_at: timestamp
```

#### `scan_items`
```sql
id: uuid (primary key)
scan_id: uuid (foreign key to scans)
product_id: uuid (foreign key to products, nullable)
product_name: text (AI-identified name)
quantity: integer
confidence_score: float (optional - AI confidence)
manually_edited: boolean (default false)
created_at: timestamp
```

#### `user_profiles`
```sql
id: uuid (primary key, foreign key to auth.users)
role: text (enum: 'staff', 'manager')
full_name: text
created_at: timestamp
```

## External Dependencies

| Dependency | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ | Frontend framework and API routes |
| React | 18+ | UI library |
| Tailwind CSS | 3.x | Styling framework |
| Shadcn UI | Latest | Component library |
| Supabase JS Client | Latest | Database and auth client |
| GLM-4V API | Latest | AI vision service |

## Infrastructure

- **Frontend Hosting:** Vercel (serverless edge functions)
- **Database:** Supabase (managed PostgreSQL)
- **Storage:** Supabase Storage (temporary image storage if needed)
- **CDN:** Vercel Edge Network
- **Environment Variables:** Managed in Vercel project settings

## Security Considerations

- **API Keys:** GLM API key stored in environment variables, never exposed to client
- **Authentication:** Supabase handles secure session management
- **Row-Level Security:** Supabase RLS ensures staff can only see their own scans
- **Image Privacy:** Images deleted after processing, not permanently stored
- **Input Validation:** All user inputs sanitized before database operations

## Performance Considerations

- **Image Compression:** Compress images client-side before upload (reduce latency and cost)
- **API Caching:** Cache product catalog to reduce database queries
- **Lazy Loading:** Components lazy-loaded to improve initial page load
- **Server Components:** Use React Server Components where possible for better performance
- **Edge Functions:** Deploy API routes to Vercel Edge for low latency

## Scalability Notes

This architecture is designed for prototype/MVP with small-to-medium usage:
- GLM-4V API: Pay-per-use, scales automatically
- Supabase: Free tier → Pro tier as needed
- Vercel: Serverless scales automatically

**Future Scaling Considerations:**
- Add Redis for caching if database queries become bottleneck
- Consider CDN for product images if added
- Implement rate limiting on API routes
- Add monitoring (Sentry, LogRocket, etc.)

## Code Organization (Current Implementation)

```
/app
  /api (to be created)
    /scan (planned)
    /products (planned)
    /scans (planned)
  layout.tsx ✅
  page.tsx ✅
  globals.css ✅

/components
  /ui (Shadcn components - to be added as needed)
  README.md ✅

/lib
  /services
    mockDatabase.ts ✅ (database operations simulator)
    mockData.ts ✅ (sample data)
    visionApi.ts ✅ (GLM-4V client)
  utils.ts ✅ (Shadcn utility)
  helpers.ts ✅ (image compression, formatting, etc.)

/types
  index.ts ✅ (Product, Scan, ScanItem, UserProfile, GLM types)

/public
  (static assets - as needed)

Configuration Files:
- package.json ✅
- tsconfig.json ✅
- next.config.ts ✅
- tailwind.config.ts ✅
- postcss.config.mjs ✅
- components.json ✅ (Shadcn config)
- .env.example ✅
- .env.local ✅
```

## Implementation Status

### ✅ Completed (Phase 2: SETUP)
- Next.js 15.5.9 project initialized
- TypeScript configuration working
- Tailwind CSS and Shadcn UI integrated
- Mock database service layer created
- GLM-4V Vision API client implemented
- Type definitions for all domain models
- Helper utilities for image processing
- Environment variables configured
- Build verified successfully

### 🚧 In Progress (Phase 3: BUILD)
- Camera interface component
- Scan results display
- API routes implementation
- Landing page and navigation

### 📋 Planned
- Authentication flow (using mock services initially)
- Manager dashboard
- Product catalog management
- Real Supabase integration (deferred)

## Open Questions / To Be Decided

- Image storage strategy: in-memory processing only for MVP (no storage)
- Product catalog: build dynamically from scan results initially, allow manual additions
- Offline mode: defer to post-MVP
- Multiple concurrent scans: handle per-user session, scans isolated by user_id
