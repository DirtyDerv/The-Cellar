# Architecture Decisions

## ADR-001: Use GLM-4V Vision API over Claude/GPT-4 Vision

**Date:** 2026-01-05
**Status:** Accepted

### Context

The core feature of The Cellar requires AI-powered computer vision to identify products and count quantities from shelf photos. Multiple vision API providers are available (OpenAI GPT-4V, Anthropic Claude Vision, Zhipu AI GLM-4V).

### Decision

Use GLM-4V Vision API (Zhipu AI) as the primary vision provider.

### Consequences

**Good:**
- Free tier available via bigmodel.cn (API key already obtained)
- Significantly cheaper than GPT-4V or Claude Vision (~$0.01-0.05 per scan vs higher costs)
- OpenAI-compatible API format makes it easy to use
- Native object detection and counting capabilities
- 128K context window for analyzing multiple images
- Excellent at product recognition and comparison

**Bad:**
- Less battle-tested than OpenAI/Anthropic offerings
- Potential language/documentation barriers (Chinese company)
- Unknown reliability/uptime compared to major providers

**Neutral:**
- Can switch to GPT-4V or Claude Vision if GLM-4V doesn't perform well enough
- API format compatibility means switching would be relatively straightforward

### Alternatives Considered

- **OpenAI GPT-4 Vision:** More expensive, well-tested, but cost could be prohibitive for frequent scans
- **Anthropic Claude Vision:** Good quality but higher cost, overkill for product identification
- **Custom ML model:** Would require training data and infrastructure, too complex for MVP

---

## ADR-002: Use Supabase over Custom Backend

**Date:** 2026-01-05
**Status:** Accepted

### Context

The application needs database storage, authentication, and API access. Options include building a custom backend or using a Backend-as-a-Service (BaaS) solution.

### Decision

Use Supabase (PostgreSQL + built-in auth) as the backend.

### Consequences

**Good:**
- Built-in authentication system (no need to build from scratch)
- PostgreSQL provides relational data model perfect for products/scans/items
- Row-level security (RLS) for staff/manager role separation
- Free tier suitable for prototype/MVP
- Real-time capabilities available for future features
- Easy integration with Next.js and Vercel

**Bad:**
- Vendor lock-in to Supabase
- Less control over backend architecture
- Potential scaling costs if usage grows significantly

**Neutral:**
- PostgreSQL is standard and well-understood
- Can migrate to custom backend later if needed

### Alternatives Considered

- **Custom Node.js/Express backend:** More control but slower to build, more maintenance
- **Firebase:** Good option but less SQL-friendly, different data model paradigm
- **Direct PostgreSQL + Auth0:** More pieces to manage, higher complexity

---

## ADR-003: Mandatory Auto-Documentation Workflow

**Date:** 2026-01-05
**Status:** Accepted

### Context

Projects often suffer from outdated documentation. Future Claude Code instances need accurate, current information about project state. Without enforced documentation updates, docs become stale and misleading.

### Decision

Mandate that every Claude Code execution must run the auto-docs skill upon completion to update CHANGELOG.md, PROJECT_STATUS.md, and other relevant documentation files.

### Consequences

**Good:**
- Documentation stays current and accurate
- Future Claude instances have reliable context
- Project state is always visible and up-to-date
- Changes are tracked systematically in CHANGELOG
- Reduces confusion and repeated work

**Bad:**
- Adds slight overhead to every task execution
- Requires discipline to actually run the skill

**Neutral:**
- Auto-docs skill is already available in this project
- Takes minimal time compared to value provided

### Alternatives Considered

- **Manual documentation updates:** Unreliable, often forgotten, leads to stale docs
- **No documentation:** Faster short-term but creates confusion and context loss
- **Weekly batch updates:** Less overhead but allows docs to drift out of sync

---

## ADR-005: Mock Data Services for Initial Development

**Date:** 2026-01-05
**Status:** Accepted

### Context

The project requires database operations for products, scans, and user management. While Supabase was chosen as the production database, setting up Supabase immediately adds external dependencies and complexity during initial development. The developer expressed preference to avoid installing database services on the development machine.

### Decision

Implement mock data services (`lib/services/mockDatabase.ts` and `lib/services/mockData.ts`) to simulate Supabase operations during initial development. These services provide the same interface as the real database client but use in-memory data structures.

### Consequences

**Good:**
- No external dependencies required for development
- Faster development iteration without network calls
- Can develop and test offline
- Easy to switch to real Supabase later (same interface)
- Predictable test data for consistent development
- No need to manage database credentials during prototyping

**Bad:**
- Data doesn't persist between server restarts
- Mock services must be maintained alongside real implementation
- Testing won't catch Supabase-specific issues (RLS policies, query performance)
- Requires migration work to switch to real database

**Neutral:**
- Services designed with identical interfaces to minimize switching friction
- Mock data includes realistic sample products and scans
- Can run real and mock services side-by-side during transition

### Migration Path

When ready to integrate Supabase:
1. Set up Supabase project and database tables
2. Implement real database client in `lib/services/supabaseDatabase.ts`
3. Update imports to use real client instead of mock
4. Test thoroughly with Supabase RLS policies
5. Remove or archive mock services

### Alternatives Considered

- **Immediate Supabase setup:** More realistic but adds setup complexity and external dependencies
- **SQLite local database:** Closer to production but still requires setup and differs from PostgreSQL
- **No database layer:** Would require significant refactoring later

---

## ADR-004: Next.js App Router over Pages Router

**Date:** 2026-01-05
**Status:** Accepted

### Context

Next.js 14+ offers two routing paradigms: the older Pages Router and the newer App Router. The project needs to choose one for consistency.

### Decision

Use Next.js App Router for this project.

### Consequences

**Good:**
- Modern React features (Server Components, Suspense, etc.)
- Better performance characteristics
- Improved data fetching patterns
- Future-proof (Pages Router is legacy)
- Better suited for mobile-first PWA approach

**Bad:**
- Newer API means fewer Stack Overflow answers
- Some libraries may have better Pages Router examples
- Learning curve for developers unfamiliar with Server Components

**Neutral:**
- Both routers are fully supported by Next.js
- Can mix patterns if absolutely necessary

### Alternatives Considered

- **Pages Router:** More examples available, but legacy approach
- **Different framework (Remix, SvelteKit):** Would require relearning, Next.js + Vercel integration is excellent
