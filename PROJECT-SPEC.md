# The Cellar - Project Specification

## Project Overview

**Project Name:** The Cellar
**Type:** Stock Management Web Application for Pubs
**Current Phase:** Prototype/MVP - Testing core computer vision functionality
**End Goal:** Production-ready application

---

## 1. PROJECT GOALS & CONTEXT

### What We're Trying To Do
- **Current Phase:** Prototype and validate that AI-powered shelf scanning works
- **Ultimate Goal:** Build a production-ready stock management system for pubs
- **Approach:** Move fast, focus on core functionality, prove the concept before adding polish

### Why This Matters
- **Current Problem:** Manual stock taking in pubs is slow, error-prone, and tedious (pen & paper)
- **Our Solution:** AI-powered visual scanning that identifies products and counts quantities automatically
- **Impact:** Saves time, improves accuracy, makes stock management easier for pub staff

---

## 2. PRODUCT REQUIREMENTS

### Target Users

**Primary Users - Pub Staff:**
- Bartenders, cellar managers
- Perform stock counts by scanning shelves
- Need quick, easy-to-use interface
- May not be tech-savvy
- Using their own phones or pub tablets

**Secondary Users - Pub Managers:**
- Need to track stock levels
- Review scan history
- Monitor inventory trends
- Make ordering decisions

### Core User Workflow (MVP)

#### Staff Scanning Flow:
1. Open web app on phone/tablet
2. Navigate to "Start Stock Count"
3. Point camera at fridge shelf
4. Tap "Scan" button
5. AI identifies products and counts quantities
6. Review results (product names + quantities)
7. Edit if needed (manual corrections)
8. Save scan results
9. Move to next shelf, repeat

#### Manager Tracking Flow:
1. Open web app
2. View dashboard with current stock levels
3. See latest scan results
4. (Future: View history, trends, alerts)

### Feature Requirements

#### MVP Features (Must Have - Milestone 1):
1. **AI Product Identification & Counting** ⭐ CRITICAL
   - Scan fridge shelves with device camera
   - AI identifies what products are visible
   - AI counts how many of each product
   - Returns structured data: product name + quantity

2. **Basic Data Capture**
   - Log product name
   - Log quantity
   - Timestamp of scan
   - Which staff member did the scan

3. **Simple Review & Edit**
   - Display scan results to user
   - Allow manual corrections (edit product name, adjust count)
   - Save to database

4. **Basic Authentication**
   - Staff login
   - Manager login
   - Simple role distinction

5. **Minimal Manager View**
   - See list of products and current quantities
   - See last scan date

#### Future Features (Post-MVP - Milestone 2+):
- Date tracking (expiry dates, delivery dates)
- Stock alerts (low stock notifications)
- Reports and analytics
- Historical trends
- Stock ordering suggestions
- Barcode scanning fallback
- Multi-location support (different fridges/areas)
- Export to Excel/CSV
- Integration with POS systems
- Offline mode

### What's Out of Scope for MVP
- Advanced reporting
- Complex analytics
- Integration with suppliers
- Automated ordering
- Price tracking
- Waste management
- Staff scheduling
- Production-ready error handling (we can break things while testing!)

---

## 3. TECHNICAL REQUIREMENTS

### Tech Stack

#### Front-End
- **Framework:** Next.js 14+ (React)
  - Server-side rendering for better performance
  - API routes for backend logic
  - Works on all devices via web browser
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Camera Access:** Web browser Camera API (navigator.mediaDevices)
- **PWA:** Progressive Web App capabilities for better mobile experience

#### AI / Computer Vision
- **Primary Option:** GLM-4V Vision API (Zhipu AI via bigmodel.cn) ⭐ **FREE!**
  - **API Key:** Already have free access via bigmodel.cn
  - Can identify products from images without pre-training
  - Native object detection and counting capabilities
  - Excellent at product recognition and comparison
  - OpenAI-compatible API format (easy to use)
  - 128K context window for analyzing multiple images
  - Low/no cost compared to Claude or GPT-4 Vision
- **API Endpoint:** `https://open.bigmodel.cn/api/paas/v4/chat/completions`
- **Model:** `glm-4v` or `glm-4-6v` (latest)
- **Backup Option:** OpenAI GPT-4 Vision API or Anthropic Claude Vision
  - Only if GLM-4V doesn't perform well enough
- **Image Handling:**
  - Compress images before sending to API (reduce bandwidth)
  - Can send as base64 or image URL
  - Store original images temporarily for debugging
  - Delete images after processing (privacy + storage)

#### Back-End & Database
- **Database:** Supabase (PostgreSQL)
  - User authentication (built-in)
  - Real-time capabilities
  - Row-level security for staff/manager roles
  - Easy API access
- **Storage:** Supabase Storage (for temporary image storage if needed)
- **API Keys:** Environment variables for Anthropic API key

#### Hosting & Deployment
- **Web Hosting:** Vercel
  - Free tier for development
  - Automatic deployments from GitHub
  - Edge functions for API routes
  - Great Next.js integration

#### Authentication
- **Auth Provider:** Supabase Auth
  - Email/password login
  - Simple role management (staff vs manager)
  - Session management

### Database Schema (Initial)

```sql
-- Users table (handled by Supabase Auth)
-- We'll add a role field

-- Products table
products (
  id: uuid (primary key)
  name: text
  category: text (optional - e.g., "Beer", "Spirits", "Wine")
  created_at: timestamp
  updated_at: timestamp
)

-- Scans table
scans (
  id: uuid (primary key)
  user_id: uuid (foreign key to users)
  scanned_at: timestamp
  location: text (optional - e.g., "Main Fridge", "Back Cellar")
  notes: text (optional)
  created_at: timestamp
)

-- Scan items table (many-to-one with scans)
scan_items (
  id: uuid (primary key)
  scan_id: uuid (foreign key to scans)
  product_id: uuid (foreign key to products, nullable)
  product_name: text (AI-identified name)
  quantity: integer
  confidence_score: float (optional - AI confidence)
  manually_edited: boolean (default false)
  created_at: timestamp
)

-- User profiles table (extends Supabase auth)
user_profiles (
  id: uuid (primary key, foreign key to auth.users)
  role: text (enum: 'staff', 'manager')
  full_name: text
  created_at: timestamp
)
```

### Technical Architecture

#### System Components:
1. **Web Client (Next.js)**
   - Camera interface
   - Image capture
   - Results display
   - Dashboard

2. **API Routes (Next.js API)**
   - `/api/scan` - Process image, call AI, return results
   - `/api/products` - CRUD operations for products
   - `/api/scans` - Get scan history
   - `/api/users` - User management

3. **AI Service (Anthropic Claude)**
   - Receives image
   - Identifies products
   - Counts quantities
   - Returns structured JSON

4. **Database (Supabase)**
   - Stores all data
   - Handles auth
   - Real-time subscriptions (future)

#### AI Prompt Strategy:
The key to making this work is a good prompt for Claude Vision. Initial approach:

```
You are an expert at identifying products in pub/bar fridges.
Analyze this image of a fridge shelf and:
1. Identify each distinct product visible (beer brands, bottles, cans)
2. Count how many of each product you see
3. Return results as JSON in this format:
{
  "products": [
    {"name": "Stella Artois Bottle", "quantity": 12},
    {"name": "Guinness Can", "quantity": 6}
  ],
  "confidence": "high/medium/low"
}

Be specific about product names, sizes, and types.
If you're unsure, indicate lower confidence.
```

We can iterate and improve this prompt based on testing.

#### Key Technical Considerations:
- **API Costs:** ~$0.01-0.05 per image scan (manageable for weekly scans)
- **Image Quality:** Need good lighting, clear product labels
- **Consistency:** Products in same positions helps AI learn patterns
- **Error Handling:** Allow staff to manually correct AI mistakes
- **Performance:** Image compression to reduce API latency
- **Privacy:** Don't store personal data, delete images after processing

### Infrastructure Setup Required

**Before Building:**
1. ✅ Create GitHub repository
2. ✅ Set up Supabase project
   - Create database
   - Enable authentication
   - Set up tables
3. ✅ GLM API key (already have: b80024d3a44042d8870f817cd887c15c.jJmOxfUpOjwRtgLl)
4. ✅ Create Vercel account and connect to GitHub
5. ✅ Set up environment variables (.env.local)

**Environment Variables Needed:**
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GLM_API_KEY=b80024d3a44042d8870f817cd887c15c.jJmOxfUpOjwRtgLl
```

---

## 4. MILESTONES & SUCCESS CRITERIA

### Milestone 1: MVP - Prove AI Scanning Works ⭐
**Goal:** Validate that AI can identify products and count quantities from shelf photos

**Success Criteria:**
- Staff can open web app and access camera
- Staff can take photo of fridge shelf
- AI correctly identifies at least 70% of products
- AI counts quantities with reasonable accuracy
- Results are displayed clearly
- Staff can manually correct any errors
- Data is saved to database
- Manager can view latest scan results

**Timeline:** Prototype phase - iterate until it works well

### Milestone 2: Polish & Real-World Testing
**Goal:** Make MVP production-ready for initial pub testing

**Features to Add:**
- Improved AI accuracy (better prompts, error handling)
- Better UX/UI (loading states, error messages)
- Data validation
- Multiple fridge/location support
- Basic stock alerts

**Success Criteria:**
- Can complete full stock count in under 10 minutes
- AI accuracy above 85%
- Zero critical bugs
- Positive feedback from test users

### Milestone 3: Production Features
**Goal:** Add features that make it a complete stock management system

**Features to Add:**
- Historical tracking
- Reports and analytics
- Date tracking (expiry, delivery)
- Export functionality
- Mobile optimizations
- Offline support

---

## 5. OPEN QUESTIONS & DECISIONS NEEDED

### Questions to Answer During Development:
1. **AI Performance:**
   - Does Claude Vision work well enough, or do we need GPT-4 Vision?
   - What prompt engineering is needed for best results?
   - How do we handle low-light or blurry images?

2. **Product Recognition:**
   - Should we build a "product library" over time?
   - Do we need to let users "teach" the AI about new products?
   - How do we handle similar-looking products?

3. **User Experience:**
   - Do we need a "guided" scanning flow (step-by-step)?
   - Should we show AI confidence scores to users?
   - What's the best way to display results?

4. **Data Management:**
   - How long do we keep scan history?
   - Do we need product categories/organization?
   - Should we track which staff member did which scan?

### Technical Risks:
- **AI accuracy may not be good enough** - Mitigation: Allow manual corrections, iterate on prompts
- **API costs could be higher than expected** - Mitigation: Image compression, only scan when needed
- **Camera access issues on some devices** - Mitigation: Test on multiple devices, provide clear instructions
- **Lighting in fridges may be poor** - Mitigation: Prompt users to ensure good lighting, test in real conditions

---

## 6. NEXT STEPS

1. ✅ Complete this project spec (DONE!)
2. ⏭️ Set up development environment (Phase 2: Setup)
3. ⏭️ Build MVP scanning functionality (Phase 3: Build)
4. ⏭️ Test with real fridge photos
5. ⏭️ Iterate based on results

---

## Notes & Assumptions

- Assuming pubs have decent Wi-Fi/mobile data for API calls
- Assuming products are visible and not obscured
- Assuming staff are willing to use phones/tablets for scanning
- Focusing on fridges first, can expand to shelves/kegs later
- English language product names initially
- Single-pub focus initially (multi-tenant later)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-05
**Status:** Planning Complete ✅
