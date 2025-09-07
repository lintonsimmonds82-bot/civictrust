# CivicTrust 🏛️

A decentralized application (dApp) for civic transparency and community governance. Built with React and Web3 technologies.

## Features

- 🔗 Web3 wallet integration (MetaMask support)
- 🗳️ Vote on civic proposals
- 🏛️ Participate in local governance
- 📱 Responsive design
- ⚡ Fast Vite-powered development

## Setup

### Prerequisites

- Node.js 16 or later
- npm or yarn
- MetaMask or another Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lintonsimmonds82-bot/civictrust.git
cd civictrust
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://lintonsimmonds82-bot.github.io/civictrust/`

### Manual Deployment

You can deploy the `dist` folder to any static hosting service:

- **Vercel**: `npm i -g vercel && vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Upload `dist` contents to `gh-pages` branch

## Usage

1. **Connect Wallet**: Click "Connect Wallet" to connect your MetaMask wallet
2. **View Proposals**: Browse active civic proposals
3. **Vote**: Cast your vote on proposals you care about
4. **Participate**: Engage in local governance decisions

## Technology Stack

- **Frontend**: React 18, Vite
- **Web3**: ethers.js, web3.js
- **Styling**: CSS3, Responsive design
- **Deployment**: GitHub Pages, GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
