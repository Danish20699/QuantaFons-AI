# Deploying QuantaFons-AI to Vercel

This guide will help you deploy your QuantaFons-AI application to Vercel.

## Prerequisites

- GitHub account with your code pushed to a repository
- Vercel account (sign up at [vercel.com](https://vercel.com))
- PostgreSQL database (Vercel Postgres, Supabase, or Neon)

## Step 1: Set Up Database

Your application uses PostgreSQL. You'll need a hosted database:

### Option A: Vercel Postgres (Recommended)
1. Go to your Vercel dashboard
2. Click "Storage" → "Create Database" → "Postgres"
3. Follow the setup wizard
4. Copy the `DATABASE_URL` connection string

### Option B: Supabase
1. Go to [supabase.com](https://supabase.com) and create a project
2. Go to Settings → Database
3. Copy the connection string (use "Session mode" for Vercel)

### Option C: Neon
1. Go to [neon.tech](https://neon.tech) and create a project
2. Copy the connection string from the dashboard

## Step 2: Deploy to Vercel

### Via Vercel Dashboard (Easiest)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/new](https://vercel.com/new)

2. **Import Your Repository**
   - Click "Import Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository: `Danish20699/QuantaFons-AI`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Select "Other"
   - **Root Directory**: Leave as `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   DATABASE_URL=<your-postgresql-connection-string>
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-5 minutes)

### Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd /c/Users/Danish/Downloads/QuantaFons-AI-main/QuantaFons-AI-main

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? QuantaFons-AI
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add DATABASE_URL
# Paste your database URL when prompted

# Deploy to production
vercel --prod
```

## Step 3: Verify Deployment

After deployment completes:

1. **Check the URL**: Vercel will provide a URL like `https://quantafons-ai.vercel.app`
2. **Test the frontend**: Visit the URL to ensure the site loads
3. **Test the API**: Visit `https://your-url.vercel.app/api/products` to check if the API works
4. **Check logs**: Go to Vercel Dashboard → Your Project → Deployments → View Logs

## Environment Variables

Make sure to add these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NODE_ENV` | Environment mode | `production` |

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify the build command runs locally: `npm run build`

### API Not Working
- Check that `DATABASE_URL` is set correctly
- Verify the database is accessible from Vercel
- Check function logs in Vercel dashboard

### Database Connection Issues
- Ensure your database allows connections from Vercel's IP ranges
- Use connection pooling for better performance
- Check that the connection string format is correct

### 404 Errors
- Verify `vercel.json` is in the root directory
- Check that rewrites are configured correctly
- Ensure `dist/public` contains your built files

## Updating Your Deployment

To update your deployment after making changes:

```bash
# Push changes to GitHub
git add .
git commit -m "Your update message"
git push

# Vercel will automatically redeploy
```

Or manually redeploy:
```bash
vercel --prod
```

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- Check deployment logs for specific errors
