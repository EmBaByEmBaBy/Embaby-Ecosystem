# Deployment Guide

This file provides a simple deployment checklist for Embabi Platform.

## 1. Connect the repository to Vercel

1. Push the project to GitHub.
2. Open Vercel and click "Add New Project".
3. Import the GitHub repository.
4. Select the project root folder.
5. Vercel will detect Next.js automatically.
6. Click "Deploy".

## 2. Environment Variables

Add the following values in the Vercel dashboard under Settings > Environment Variables:

- NEXT_PUBLIC_APP_NAME
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_API_BASE_URL
- API_SECRET_KEY

Use the values from the example file:

- [.env.example](.env.example)

## 3. If the first deployment fails

If the first deployment fails, check the following:

1. Build logs in Vercel.
2. Whether the repository root is correct.
3. Whether the environment variables are set.
4. Whether the project uses the correct Node.js version.
5. Whether the standalone build is enabled via next.config.js.

### Recommended recovery steps

- Re-run the build locally:
  ```bash
  npm run build
  ```
- Confirm that the app runs locally:
  ```bash
  npm run start
  ```
- Re-deploy from Vercel after fixing the issue.

## 4. Final note

The project is prepared for production deployment with Vercel and uses standalone output mode for efficient hosting.
