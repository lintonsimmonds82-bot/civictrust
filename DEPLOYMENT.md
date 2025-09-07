# 🚀 CivicTrust Deployment Guide

Complete step-by-step guide to deploy CivicTrust to production on Vercel with zero manual intervention.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Account Setup](#account-setup)
3. [Local Development Verification](#local-development-verification)
4. [Environment Configuration](#environment-configuration)
5. [GitHub Repository Setup](#github-repository-setup)
6. [Vercel Project Setup](#vercel-project-setup)
7. [Automated Deployment Pipeline](#automated-deployment-pipeline)
8. [Domain and SSL Configuration](#domain-and-ssl-configuration)
9. [Post-Deployment Verification](#post-deployment-verification)
10. [Monitoring and Maintenance](#monitoring-and-maintenance)
11. [Troubleshooting](#troubleshooting)

## ✅ Prerequisites

### Required Software
- [ ] **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- [ ] **npm** >= 8.0.0 (comes with Node.js)
- [ ] **Git** ([Download](https://git-scm.com/))
- [ ] **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

### Required Accounts
- [ ] **GitHub Account** ([Sign up](https://github.com/))
- [ ] **Vercel Account** ([Sign up](https://vercel.com/))
- [ ] **Domain Registrar** (optional, for custom domain)

### Verify Prerequisites
```bash
# Check Node.js version
node --version  # Should be >= 18.0.0

# Check npm version
npm --version   # Should be >= 8.0.0

# Check Git version
git --version   # Any recent version

# Verify internet connection
ping google.com
```

## 🔧 Account Setup

### 1. GitHub Account Setup

1. **Create GitHub Account**
   - Go to [github.com](https://github.com/)
   - Sign up with email and password
   - Verify email address

2. **Generate Personal Access Token**
   ```
   GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   → Generate new token (classic)
   ```
   
   **Required Scopes:**
   - [ ] `repo` (Full control of private repositories)
   - [ ] `workflow` (Update GitHub Actions workflows)
   - [ ] `write:packages` (Upload packages)

3. **Configure Git Locally**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### 2. Vercel Account Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com/)
   - Sign up with GitHub (recommended)
   - Complete account verification

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel@latest
   ```

3. **Login to Vercel CLI**
   ```bash
   vercel login
   # Follow prompts to authenticate
   ```

4. **Get Vercel Tokens**
   ```
   Vercel Dashboard → Settings → Tokens → Create Token
   ```
   
   **Token Scopes:** Full access (for CI/CD)

## 🧪 Local Development Verification

### 1. Clone and Setup Repository

```bash
# Clone the repository
git clone https://github.com/lintonsimmonds82-bot/civictrust.git
cd civictrust

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
```

### 2. Configure Local Environment

Edit `.env.local`:
```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Add any additional local configurations
```

### 3. Run Development Server

```bash
# Start development server
npm run dev

# Should start on http://localhost:3000
```

### 4. Verify Local Build

```bash
# Test production build
npm run build

# Start production server
npm run start

# Verify health check
curl http://localhost:3000/healthz
```

**Expected Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123,
  "version": "1.0.0",
  "environment": "development"
}
```

### 5. Run Quality Checks

```bash
# Run linting
npm run lint

# Check code formatting
npm run format:check

# Run type checking
npm run type-check
```

## 🌍 Environment Configuration

### 1. Production Environment Variables

Create these variables in Vercel dashboard:

#### Core Application Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

#### Optional: Blockchain Integration
```bash
NEXT_PUBLIC_ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
NEXT_PUBLIC_POLYGON_RPC_URL=https://polygon-mainnet.infura.io/v3/YOUR_PROJECT_ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

#### Optional: Analytics and Monitoring
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=https://your_sentry_dsn@sentry.io/project_id
NEXT_PUBLIC_SENTRY_DSN=https://your_sentry_dsn@sentry.io/project_id
```

#### Optional: External Services
```bash
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@civictrust.app
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET_API_KEY=your_pinata_secret_key
```

### 2. Environment Variable Security

**Security Best Practices:**
- [ ] Never commit `.env.local` to git
- [ ] Use `NEXT_PUBLIC_` prefix only for client-side variables
- [ ] Rotate API keys regularly
- [ ] Use different keys for staging and production
- [ ] Enable Vercel's environment variable encryption

## 📦 GitHub Repository Setup

### 1. Repository Configuration

1. **Enable Branch Protection**
   ```
   GitHub Repository → Settings → Branches → Add rule
   ```
   
   **Protection Rules:**
   - [ ] Require pull request reviews
   - [ ] Require status checks to pass
   - [ ] Require branches to be up to date
   - [ ] Include administrators

2. **Add Repository Secrets**
   ```
   GitHub Repository → Settings → Secrets and variables → Actions
   ```
   
   **Required Secrets:**
   ```bash
   VERCEL_TOKEN=your_vercel_token
   VERCEL_ORG_ID=your_org_id
   VERCEL_PROJECT_ID=your_project_id
   ```

### 2. Get Vercel IDs

```bash
# In your local project directory
vercel link

# This will create .vercel/project.json with IDs
cat .vercel/project.json
```

Copy the `orgId` and `projectId` to GitHub secrets.

## 🔗 Vercel Project Setup

### 1. Create Vercel Project

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

**Option B: Using Vercel CLI**
```bash
# In your project directory
vercel

# Follow prompts:
# - Link to existing project? N
# - Project name: civictrust
# - Directory: ./
# - Want to modify settings? N
```

### 2. Configure Vercel Project

1. **Environment Variables**
   - Add all production environment variables
   - Set different values for Preview and Production

2. **Domains**
   - Configure production domain
   - Set up custom domain (if applicable)

3. **Git Integration**
   - Ensure GitHub integration is enabled
   - Configure branch deployments:
     - `main` → Production
     - `develop` → Preview
     - Pull requests → Preview

## 🤖 Automated Deployment Pipeline

### 1. GitHub Actions Configuration

The project includes a comprehensive CI/CD pipeline in `.github/workflows/ci-cd.yml`:

**Pipeline Stages:**
1. **Code Quality** - Linting, formatting, type checking
2. **Security Audit** - Dependency vulnerability scan
3. **Build & Test** - Production build and health checks
4. **Deploy Preview** - Automatic PR previews
5. **Deploy Staging** - Deploy develop branch
6. **Deploy Production** - Deploy main branch
7. **Performance Testing** - Lighthouse CI

### 2. Deployment Triggers

**Automatic Deployments:**
- **Push to `main`** → Production deployment
- **Push to `develop`** → Staging deployment
- **Open Pull Request** → Preview deployment
- **Update Pull Request** → Updated preview deployment

### 3. Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# Deploy specific branch
git checkout feature-branch
vercel
```

## 🌐 Domain and SSL Configuration

### 1. Custom Domain Setup

1. **Purchase Domain** (optional)
   - Choose a domain registrar
   - Purchase your desired domain

2. **Configure DNS**
   ```
   Vercel Dashboard → Project → Settings → Domains
   → Add Domain → your-domain.com
   ```

3. **Update DNS Records**
   Point your domain to Vercel:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### 2. SSL Certificate

- **Automatic**: Vercel provides free SSL certificates
- **Custom**: Upload custom SSL certificate if needed
- **HTTPS Redirect**: Automatically enabled

### 3. Domain Verification

```bash
# Test domain configuration
dig your-domain.com
nslookup your-domain.com

# Test SSL certificate
curl -I https://your-domain.com
```

## ✅ Post-Deployment Verification

### 1. Automated Verification

The CI/CD pipeline includes automated verification:
- [ ] Build successful
- [ ] Health check responds
- [ ] All tests pass
- [ ] Performance metrics acceptable

### 2. Manual Verification Checklist

#### Functionality Testing
- [ ] **Homepage loads**: Visit production URL
- [ ] **Navigation works**: Test all menu items
- [ ] **Mobile responsive**: Test on mobile devices
- [ ] **Health check**: Visit `/healthz` endpoint
- [ ] **Performance**: Check page load times

#### Security Testing
- [ ] **HTTPS enabled**: URL shows secure connection
- [ ] **Security headers**: Check with [securityheaders.com](https://securityheaders.com/)
- [ ] **No console errors**: Check browser developer tools
- [ ] **API endpoints secure**: Test with tools like Postman

#### SEO and Accessibility
- [ ] **Meta tags present**: Check page source
- [ ] **Lighthouse score**: Run Lighthouse audit
- [ ] **Accessibility**: Test with screen reader
- [ ] **Social sharing**: Test Open Graph tags

### 3. Performance Verification

```bash
# Run Lighthouse CI locally
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage

# Test with curl
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com

# Load testing (optional)
npx artillery quick --count 10 --num 2 https://your-domain.com
```

### 4. Error Testing

Test error scenarios:
- [ ] **404 pages**: Visit non-existent URLs
- [ ] **API errors**: Test API endpoints with invalid data
- [ ] **Network issues**: Test with slow connections
- [ ] **JavaScript disabled**: Test core functionality

## 📊 Monitoring and Maintenance

### 1. Setup Monitoring

#### Vercel Analytics
```
Vercel Dashboard → Project → Analytics
```
- **Real User Monitoring**: Enabled automatically
- **Core Web Vitals**: Performance metrics
- **Function Metrics**: API endpoint performance

#### External Monitoring (Optional)
- **Uptime Robot**: [uptimerobot.com](https://uptimerobot.com/)
- **Pingdom**: [pingdom.com](https://pingdom.com/)
- **StatusPage**: [statuspage.io](https://statuspage.io/)

### 2. Error Tracking

#### Sentry Setup (Optional)
```bash
npm install @sentry/nextjs

# Add to next.config.js
const { withSentryConfig } = require('@sentry/nextjs');
```

### 3. Maintenance Schedule

#### Daily
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Review security alerts

#### Weekly
- [ ] Update dependencies
- [ ] Review analytics
- [ ] Check backup status

#### Monthly
- [ ] Security audit
- [ ] Performance optimization
- [ ] Domain renewal check
- [ ] SSL certificate status

### 4. Backup Strategy

#### Automated Backups
- **Code**: GitHub repository (automatic)
- **Configuration**: Vercel project settings
- **Environment**: Document all environment variables

#### Manual Backups
```bash
# Export environment variables
vercel env ls > environment-backup.txt

# Backup project configuration
vercel project ls > project-backup.txt
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Build Failures

**Issue**: Build fails during deployment
```
Error: Module not found
```

**Solutions**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for missing dependencies
npm audit fix

# Verify Node.js version
node --version
```

#### 2. Environment Variables Not Working

**Issue**: Environment variables undefined in production

**Solutions**:
- [ ] Check variable names (use `NEXT_PUBLIC_` for client-side)
- [ ] Verify variables in Vercel dashboard
- [ ] Redeploy after adding variables
- [ ] Check for typos in variable names

#### 3. Domain Not Working

**Issue**: Custom domain shows Vercel's 404 page

**Solutions**:
- [ ] Check DNS propagation: [whatsmydns.net](https://whatsmydns.net/)
- [ ] Verify CNAME/A records
- [ ] Check Vercel domain configuration
- [ ] Wait for DNS propagation (up to 48 hours)

#### 4. Performance Issues

**Issue**: Slow page load times

**Solutions**:
```bash
# Analyze bundle size
npm run analyze

# Optimize images
# Use next/image component

# Enable caching
# Check next.config.js headers
```

#### 5. API Endpoint Errors

**Issue**: API endpoints returning 500 errors

**Solutions**:
- [ ] Check function logs in Vercel dashboard
- [ ] Verify environment variables
- [ ] Test locally first
- [ ] Check function timeout limits

### Emergency Procedures

#### 1. Rollback Deployment

```bash
# Using Vercel CLI
vercel rollback [deployment-url]

# Using GitHub
# Revert commit and push to main branch
git revert HEAD
git push origin main
```

#### 2. Emergency Hotfix

```bash
# Create hotfix branch
git checkout -b hotfix/critical-fix main

# Make necessary changes
# ... edit files ...

# Commit and push
git commit -m "Emergency fix: describe issue"
git push origin hotfix/critical-fix

# Create emergency PR
# Merge immediately to main
```

#### 3. Service Status

Check service status:
- **Vercel Status**: [vercel-status.com](https://vercel-status.com/)
- **GitHub Status**: [githubstatus.com](https://githubstatus.com/)
- **DNS Status**: Use DNS lookup tools

## 📞 Support and Resources

### Documentation
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Community Support
- **GitHub Issues**: Project-specific issues
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Next.js Discord**: [nextjs.org/discord](https://nextjs.org/discord)

### Professional Support
- **Vercel Pro**: Enhanced support and features
- **Consulting**: Available for complex deployments

---

## 🎉 Deployment Complete!

Congratulations! Your CivicTrust application is now live and ready to serve users. The automated deployment pipeline will handle future updates, and monitoring is in place to ensure optimal performance.

**Next Steps:**
1. Share your deployment URL with stakeholders
2. Set up monitoring alerts
3. Plan your first feature release
4. Gather user feedback and iterate

**Your deployment is now production-ready with zero manual intervention required! 🚀**