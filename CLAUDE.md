# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Mandatory Workflow

**IMPORTANT:** After completing any execution or task, you MUST run the auto-docs skill to update project documentation. This ensures CHANGELOG.md, PROJECT_STATUS.md, and other documentation files stay current.

Use: `/auto-docs-skill` or invoke the Skill tool with `skill: "auto-docs-skill"`

## Project Context

**The Cellar** is an AI-powered stock management web application for pubs. The core feature is using computer vision to scan fridge shelves with a phone camera - the AI identifies products and counts quantities automatically, replacing slow manual stock counts.

**Current Phase:** Planning complete, beginning setup and initial build.

## Tech Stack

- **Frontend:** Next.js 14+ with App Router, React, Tailwind CSS, Shadcn UI
- **AI Vision:** GLM-4V Vision API (Zhipu AI) - primary choice (free tier available)
  - API Endpoint: `https://open.bigmodel.cn/api/paas/v4/chat/completions`
  - Model: `glm-4v` or `glm-4-6v`
  - OpenAI-compatible API format
- **Database & Auth:** Supabase (PostgreSQL + Supabase Auth)
- **Hosting:** Vercel
- **Camera Access:** Web browser Camera API (navigator.mediaDevices)

## Key Architecture Points

### Database Schema
The database has four main tables:
- `products` - Product catalog (name, category)
- `scans` - Each stock count session (user_id, timestamp, location)
- `scan_items` - Individual items within a scan (product_id, quantity, confidence_score, manually_edited flag)
- `user_profiles` - Extends Supabase auth with roles ('staff' or 'manager')

### Core User Flow
1. Staff opens web app → Camera interface
2. Point camera at fridge shelf → Tap "Scan"
3. Image sent to GLM-4V API with structured prompt
4. AI returns JSON: `{"products": [{"name": "...", "quantity": ...}]}`
5. Results displayed → Staff can manually edit
6. Save to database → Manager can view dashboard

### AI Prompt Strategy
The GLM-4V API receives images with a prompt asking it to:
- Identify each distinct product (beer brands, bottles, cans)
- Count quantities of each
- Return structured JSON with product names and quantities
- Indicate confidence level

The prompt engineering is critical to accuracy. Start with clear, specific instructions and iterate based on real-world testing.

## Development Setup

### Environment Variables Required
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GLM_API_KEY=your_glm_api_key
```

### Initial Setup Tasks (Phase 2: SETUP)
1. Initialize Next.js project with TypeScript
2. Install dependencies: Tailwind, Shadcn UI, Supabase client
3. Configure Supabase project (database tables, auth, RLS policies)
4. Set up environment variables
5. Create basic project structure

### Common Commands
When the project is initialized, typical commands will be:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npx supabase` - Supabase CLI commands (migrations, etc.)

## Project Priorities

### MVP Must-Haves (Milestone 1)
- Camera interface working on mobile browsers
- Image capture and upload
- GLM-4V API integration with proper error handling
- Basic results display with manual edit capability
- Supabase authentication (staff/manager roles)
- Simple manager dashboard showing latest stock

### Success Criteria
- AI correctly identifies ≥70% of products (target 85%+ later)
- Staff can complete stock count in <10 minutes
- Manual correction workflow is intuitive
- Data persists correctly in Supabase

### Out of Scope for MVP
- Advanced reporting/analytics
- Historical trends and charts
- Automated ordering
- Multi-location support
- Offline mode
- Barcode scanning fallback
- Integration with POS/suppliers

## Important Technical Considerations

### Image Handling
- Compress images before sending to API (reduce bandwidth and costs)
- Can send as base64 or image URL to GLM-4V
- Store original images temporarily for debugging only
- Delete images after processing (privacy + storage management)

### API Cost Management
- Each scan costs ~$0.01-0.05 via GLM-4V (much cheaper than GPT-4V or Claude Vision)
- Implement image compression to reduce payload size
- Only make API calls when user explicitly taps "Scan"

### Error Handling Strategy
- Allow staff to manually correct AI mistakes (critical for trust)
- Show confidence scores if helpful for UX
- Handle poor lighting, blurry images gracefully
- Provide clear error messages for camera access issues

### Testing Approach
- This is a prototype - focus on core functionality first
- Test with real fridge photos in various lighting conditions
- Iterate on AI prompts based on accuracy results
- Get feedback from actual pub staff as soon as possible

## Code Organization

When building the Next.js app, follow this structure:
- `/app` - Next.js App Router pages and layouts
- `/app/api` - API routes (`/api/scan`, `/api/products`, `/api/scans`)
- `/components` - React components (separate UI from business logic)
- `/lib` - Utilities (Supabase client, AI service wrapper, helpers)
- `/types` - TypeScript type definitions
- `/public` - Static assets

## Development Philosophy

**Move Fast, Prove the Concept**
- This is a prototype validating if AI vision works for stock counting
- Prioritize getting the scanning feature working over polish
- It's okay to break things and iterate quickly
- Focus on the 70% accuracy threshold first, optimize later

**Simplicity First**
- Don't over-engineer for future requirements
- Start with simple solutions and add complexity only when needed
- Hard-code reasonable defaults rather than premature configuration

**User-Centric**
- Design for pub staff who may not be tech-savvy
- Mobile-first design (most scans will be on phones)
- Clear visual feedback during camera/scanning operations
- Make manual corrections easy and obvious

## Key Files Reference

- `PROJECT-SPEC.md` - Complete technical specification, user workflows, database schema
- `README.md` - Project overview and current status
- `How-I-Start-EVERY-Claude-Code-Project.md` - PSB (Plan, Setup, Build) methodology reference
