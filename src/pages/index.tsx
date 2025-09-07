import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>CivicTrust - Building Trust in Digital Civic Engagement</title>
        <meta
          name="description"
          content="CivicTrust is a revolutionary DApp that transforms civic engagement through blockchain technology, ensuring transparency, security, and trust in democratic processes."
        />
        <meta property="og:title" content="CivicTrust - Building Trust in Digital Civic Engagement" />
        <meta
          property="og:description"
          content="Join the future of civic engagement with CivicTrust DApp. Secure, transparent, and trustworthy digital democracy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CivicTrust - Building Trust in Digital Civic Engagement" />
        <meta name="twitter:description" content="Join the future of civic engagement with CivicTrust DApp." />
        <link rel="canonical" href="https://civictrust.vercel.app" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-civic-50 via-white to-primary-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CT</span>
                  </div>
                  <span className="font-display font-semibold text-xl text-gray-900">CivicTrust</span>
                </Link>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link href="#roadmap" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Roadmap
                </Link>
                <button className="btn-primary">
                  Launch App
                </button>
              </div>

              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Features
                </Link>
                <Link href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  How It Works
                </Link>
                <Link href="#roadmap" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                  Roadmap
                </Link>
                <div className="px-3 py-2">
                  <button className="btn-primary w-full">
                    Launch App
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 animate-fade-in">
                Building Trust in{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Digital Civic Engagement
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
                CivicTrust revolutionizes democratic participation through blockchain technology, 
                ensuring transparent, secure, and verifiable civic processes for the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <button className="btn-primary text-lg px-8 py-4">
                  Explore the DApp
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                Why Choose CivicTrust?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of civic engagement with cutting-edge blockchain technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Transparent Voting',
                  description: 'Every vote is recorded on the blockchain, ensuring complete transparency and auditability.',
                  icon: '🗳️',
                },
                {
                  title: 'Secure Identity',
                  description: 'Advanced cryptographic protocols protect voter identity while maintaining privacy.',
                  icon: '🔐',
                },
                {
                  title: 'Real-time Results',
                  description: 'Get instant, verifiable results as votes are cast and recorded immutably.',
                  icon: '⚡',
                },
                {
                  title: 'Decentralized Governance',
                  description: 'Participate in decision-making processes without centralized control.',
                  icon: '🏛️',
                },
                {
                  title: 'Global Accessibility',
                  description: 'Engage in civic processes from anywhere in the world, 24/7.',
                  icon: '🌍',
                },
                {
                  title: 'Immutable Records',
                  description: 'All civic actions are permanently recorded and cannot be altered or deleted.',
                  icon: '📜',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                How CivicTrust Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple, secure, and transparent - here's how we're transforming civic engagement
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Connect Wallet',
                  description: 'Securely connect your Web3 wallet to authenticate your identity and participate in governance.',
                },
                {
                  step: '02',
                  title: 'Verify Eligibility',
                  description: 'Our smart contracts verify your eligibility to participate in specific civic processes.',
                },
                {
                  step: '03',
                  title: 'Cast Your Vote',
                  description: 'Make your voice heard by casting votes on proposals, elections, and civic initiatives.',
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-xl rounded-full mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Ready to Shape the Future of Democracy?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of citizens already using CivicTrust to make their voices heard in the digital age.
            </p>
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Launch CivicTrust DApp
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CT</span>
                  </div>
                  <span className="font-display font-semibold text-xl">CivicTrust</span>
                </div>
                <p className="text-gray-400">
                  Building trust in digital civic engagement through blockchain technology.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">How It Works</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Roadmap</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Whitepaper</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Community</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">GitHub</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 CivicTrust. All rights reserved. Built with ❤️ for a better democracy.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}