# Embabi Platform

Embabi Platform is a premium, modular digital experience for education, creativity, and knowledge-driven interaction. The project is built with Next.js App Router, Tailwind CSS, and a modular architecture designed for future expansion.

## Overview

The platform currently includes:
- Authentication flow (login, sign-up, recovery, confirmation)
- Protected dashboard
- Kids Hub for educational content
- Media Studio for creative showcases
- Knowledge Engine for structured knowledge and interest portals
- Debate Arena for guided discussion experiences
- About and Terms & Privacy pages for public information

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the app at:
   - http://localhost:3000

## Production Build

```bash
npm run build
```

## Environment Variables

Copy the example file and configure values as needed:

```bash
cp .env.example .env.local
```

### Example variables
- NEXT_PUBLIC_APP_NAME
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_API_BASE_URL
- API_SECRET_KEY

## Deployment Notes

This project is prepared for deployment on Vercel. The repository is compatible with the standard Vercel build flow using:

```bash
npm run build
```

## Project Structure

- src/app - route-level pages
- src/modules - modular feature areas
- src/services - mock service layer ready for backend integration
- src/lib - shared utilities and security helpers

## Notes

The current implementation uses mock services and a temporary authentication cookie for the protected dashboard experience. These can be replaced with real backend/API integration in the next phase.
