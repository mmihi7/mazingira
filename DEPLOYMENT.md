# Deployment Guide: GitHub + Vercel

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" button in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `mazingira`
   - **Description**: `Mobile-responsive governor's planning platform for Nairobi County`
   - **Visibility**: Public (or Private if you prefer)
   - **Don't initialize with README** (we already have one)
5. Click "Create repository"

## Step 2: Push Code to GitHub

1. Copy the repository URL from GitHub (e.g., `https://github.com/yourusername/mazingira.git`)
2. In your terminal, run:

```bash
# Add the remote repository
git remote add origin https://github.com/yourusername/mazingira.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click "Add New..." and select "Project"
3. Import your `mazingira` repository from GitHub
4. Vercel will automatically detect the static site configuration
5. Click "Deploy"

### Option B: Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Step 5: Automatic Updates

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the main branch
- Create preview deployments for pull requests
- Roll back automatically if deployment fails

## File Structure After Deployment

```
mazingira.vercel.app/
?? mazingira-v4.html     # Main application
?? package.json          # Project metadata
?? vercel.json          # Deployment config
?? README.md            # Documentation
```

## Environment Variables

No environment variables are needed for this static site.

## Performance Optimization

Vercel automatically:
- Enables gzip compression
- Sets up CDN globally
- Optimizes caching headers
- Provides SSL certificates

## Troubleshooting

### Common Issues

1. **404 Error**: Check that `mazingira-v4.html` is in the root directory
2. **Build Failures**: Verify `vercel.json` configuration
3. **Routing Issues**: Ensure routes in `vercel.json` point to correct file

### Debug Commands

```bash
# Check deployment logs
vercel logs

# Redeploy manually
vercel --prod

# Check build configuration
vercel inspect
```

## Next Steps

1. Share the deployed URL with stakeholders
2. Test on mobile devices
3. Set up analytics (Google Analytics, etc.)
4. Configure custom domain if needed
5. Set up monitoring and alerts

## Support

- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com
- For issues, open a GitHub issue in your repository
