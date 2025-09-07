#!/bin/bash

# CivicTrust Development Setup Script
# This script sets up the development environment for new contributors

set -e

echo "🚀 Setting up CivicTrust development environment..."

# Check Node.js version
NODE_VERSION=$(node --version)
echo "Node.js version: $NODE_VERSION"

if [[ ! "$NODE_VERSION" =~ ^v1[8-9]\.|^v[2-9][0-9]\.  ]]; then
    echo "❌ Node.js version 18.0.0 or higher is required"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment variables
if [ ! -f .env.local ]; then
    echo "📋 Creating .env.local from template..."
    cp .env.example .env.local
    echo "✅ Please edit .env.local with your actual values"
else
    echo "✅ .env.local already exists"
fi

# Run initial build
echo "🔨 Running initial build..."
npm run build

# Run linting
echo "🔍 Running code quality checks..."
npm run lint
npm run type-check

# Create .vercel directory if it doesn't exist
if [ ! -d .vercel ]; then
    mkdir .vercel
    echo "📁 Created .vercel directory"
fi

echo ""
echo "✅ Development environment setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your environment variables"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo "4. Start coding! 🎉"
echo ""
echo "Useful commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run lint     - Run ESLint"
echo "  npm run format   - Format code with Prettier"
echo ""