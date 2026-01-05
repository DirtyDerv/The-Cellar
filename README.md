# The Cellar

**AI-Powered Stock Management for Pubs**

## Overview

The Cellar is a web application that helps pub staff speed up stock taking using AI-powered visual recognition. Point your phone at a fridge shelf, and the AI identifies products and counts quantities automatically.

## Current Status

🚧 **Phase: Planning & Prototyping**

Currently in Phase 1 (PLAN) of the PSB system, defining requirements and validating the core AI scanning concept.

## Problem We're Solving

- Manual stock taking in pubs is slow and error-prone (pen & paper)
- Staff spend too much time counting bottles and cans
- Inaccurate counts lead to ordering mistakes

## Our Solution

- **AI Vision Scanning**: Point camera at shelf, AI identifies products and counts them
- **Fast & Accurate**: Complete stock counts in minutes, not hours
- **Easy to Use**: Works on any phone/tablet via web browser

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Shadcn UI
- **AI/Vision**: GLM-4V Vision API (Zhipu AI)
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Auth**: Supabase Auth

## MVP Features

✅ Camera-based shelf scanning
✅ AI product identification
✅ Quantity counting
✅ Manual corrections
✅ Staff/Manager roles
✅ Basic stock tracking

## Project Documents

- [`PROJECT-SPEC.md`](PROJECT-SPEC.md) - Complete project specification
- [`How-I-Start-EVERY-Claude-Code-Project.md`](How-I-Start-EVERY-Claude-Code-Project.md) - PSB methodology reference

## Development

Following the PSB (Plan, Setup, Build) methodology from Claude Code best practices.

### Phase 1: PLAN ✅
- [x] Define project goals
- [x] Create product requirements
- [x] Define technical stack
- [x] Choose AI vision provider (GLM-4V)

### Phase 2: SETUP 🚧
- [ ] GitHub repository setup
- [ ] Supabase project setup
- [ ] Environment variables
- [ ] CLAUDE.md configuration
- [ ] Project documentation structure

### Phase 3: BUILD 📋
- [ ] MVP: AI scanning functionality
- [ ] User authentication
- [ ] Stock management dashboard
- [ ] Testing & iteration

## License

TBD

## Contact

For questions or feedback, please open an issue.
