# 🚀 GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `portfolio` (or your preferred name)
3. Make sure it's **public** (required for free GitHub Pages)
4. **Don't** initialize with README (since you already have files)

### 2. Update Configuration
Before deploying, update these files with your actual information:

**Update `package.json` homepage:**
```json
"homepage": "https://[YOUR-GITHUB-USERNAME].github.io/portfolio"
```

**Update `vite.config.ts` base path:**
```typescript
base: '/[YOUR-REPO-NAME]/', // e.g., '/portfolio/'
```

### 3. Initialize Git and Push to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace with your actual URL)
git remote add origin https://github.com/[YOUR-USERNAME]/portfolio.git

# Push to main branch
git push -u origin main
```

### 4. Deploy to GitHub Pages

**Option A: Manual Deployment**
```bash
npm run deploy
```

**Option B: Automatic Deployment (Recommended)**
The GitHub Actions workflow will automatically deploy when you push to main branch.

### 5. Configure GitHub Pages Settings
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch and **/ (root)** folder
6. Click **Save**

### 6. Access Your Live Portfolio
Your portfolio will be available at:
```
https://[YOUR-GITHUB-USERNAME].github.io/portfolio
```

## 📝 Pre-Deployment Checklist

- [ ] Update `src/data/personal.json` with your information
- [ ] Update `src/data/projects.json` with your actual projects
- [ ] Update `src/data/skills.json` with your skills
- [ ] Replace placeholder content in `src/data/content.json`
- [ ] Update homepage URL in `package.json`
- [ ] Update base path in `vite.config.ts`
- [ ] Test locally with `npm run build && npm run preview`

## 🔄 Future Deployments

After initial setup, deploy updates with:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your changes!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Manual deployment to GitHub Pages
- `npm run lint` - Run ESLint

## 🔧 Troubleshooting

**404 Errors on GitHub Pages:**
- Check that base path in `vite.config.ts` matches your repo name
- Ensure homepage in `package.json` is correct

**Build Failures:**
- Run `npm run build` locally to test
- Check for TypeScript errors with `npm run lint`

**Assets Not Loading:**
- Verify the base path configuration
- Check browser console for 404 errors
