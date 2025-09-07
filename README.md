# CivicTrust - Digital Civic Engagement Platform

A revolutionary DApp promotional site built with Next.js that transforms civic engagement through blockchain technology, ensuring transparency, security, and trust in democratic processes.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0
- **Git**: Latest version

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lintonsimmonds82-bot/civictrust.git
   cd civictrust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check Prettier formatting |

## 🏗️ Project Structure

```
civictrust/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions CI/CD pipeline
├── public/
│   ├── favicon.ico            # Favicon
│   └── favicon.svg            # SVG favicon
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── health.ts      # Health check endpoint
│   │   ├── _app.tsx           # App component
│   │   ├── _document.tsx      # Document component
│   │   └── index.tsx          # Home page
│   └── styles/
│       └── globals.css        # Global styles
├── .env.example               # Environment variables template
├── .env.local                 # Local environment variables
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── lighthouserc.js           # Lighthouse CI configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment configuration
```

## 🔧 Technology Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.13
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions
- **Code Quality**: ESLint + Prettier
- **Fonts**: Inter + Poppins (Google Fonts)

## 🌐 Deployment

### Vercel Deployment (Recommended)

#### Prerequisites
1. [Vercel account](https://vercel.com)
2. [Vercel CLI](https://vercel.com/docs/cli) installed globally

#### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

#### Automatic Deployment
- **Production**: Automatically deploys from `main` branch
- **Preview**: Automatically deploys from pull requests
- **Staging**: Automatically deploys from `develop` branch

### Environment Variables Setup

#### Required Environment Variables for Production:

Create these in your Vercel dashboard or local .env.local:

```bash
# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

# Blockchain (Optional - for future Web3 integration)
NEXT_PUBLIC_ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Monitoring (Optional)
SENTRY_DSN=https://your_sentry_dsn@sentry.io/project_id
```

## 🔐 Security Features

- **Security Headers**: X-Frame-Options, X-Content-Type-Options, CSP
- **CORS Configuration**: Properly configured for API endpoints
- **Environment Variables**: Secure handling of sensitive data
- **TypeScript**: Type safety throughout the application
- **Input Validation**: Proper validation on all inputs

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Optimization**: Tree shaking and code splitting
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers
- **Lighthouse Scores**: Automated performance monitoring

## 🧪 Testing & Quality Assurance

### Automated Testing in CI/CD:
- **Linting**: ESLint with Next.js rules
- **Type Checking**: TypeScript compilation
- **Security Audit**: npm audit
- **Build Testing**: Production build verification
- **Performance Testing**: Lighthouse CI

### Manual Testing Checklist:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Mobile responsiveness
- [ ] Health check endpoint (`/healthz`)
- [ ] Performance metrics meet standards

## 📈 Monitoring & Health Checks

### Health Check Endpoint
- **URL**: `/healthz` or `/api/health`
- **Method**: GET
- **Response**: JSON with system status

### Monitoring Setup:
1. **Vercel Analytics**: Built-in performance monitoring
2. **Health Check**: Automated endpoint monitoring
3. **Build Status**: GitHub Actions status badges
4. **Performance**: Lighthouse CI reports

## 🚢 Production Deployment Checklist

### Pre-Deployment
- [ ] All environment variables configured
- [ ] Security headers reviewed
- [ ] Performance optimization applied
- [ ] Error handling implemented
- [ ] Health checks working

### Deployment
- [ ] Branch protection rules enabled
- [ ] Automatic deployments configured
- [ ] Domain and SSL certificates setup
- [ ] CDN configuration verified
- [ ] Database connections tested (if applicable)

### Post-Deployment
- [ ] Smoke tests passed
- [ ] Performance metrics verified
- [ ] Error tracking enabled
- [ ] Monitoring alerts configured
- [ ] Backup procedures documented

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### TypeScript Errors
```bash
# Run type checking
npm run type-check
```

#### Environment Variables Not Loading
1. Check `.env.local` file exists
2. Verify variable names start with `NEXT_PUBLIC_` for client-side
3. Restart development server

#### Deployment Issues
1. Check Vercel build logs
2. Verify environment variables in Vercel dashboard
3. Ensure all dependencies are in `package.json`

## 📱 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions

## 🔮 Roadmap

- [ ] Web3 wallet integration
- [ ] Smart contract interaction
- [ ] User dashboard
- [ ] Voting mechanisms
- [ ] Governance features
- [ ] Multi-language support
- [ ] Mobile app development

---

**Built with ❤️ for a better democracy**
