# Deploy DealPilot AI to Vercel

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name it "dealpilot" (or your choice)
3. Make it PUBLIC
4. Click "Create repository"

## Step 2: Push Code (run these commands in your terminal)

```bash
cd /home/team/shared/dealpilot

# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Rename branch to main
git branch -m main

# Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push
git push -u origin main
```

## Step 3: Deploy on Vercel
1. Go to https://vercel.com/import
2. Select your new GitHub repo
3. Click "Deploy"

That's it! Your app will be live in ~1 minute.