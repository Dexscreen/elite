import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp, Globe, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, setCurrentLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigationItems = {
    en: [
      { href: '/', label: 'Home' },
      { 
        href: '/services', 
        label: 'Services',
        dropdown: [
          { href: '/investment-advisor', label: 'Investment Advisor' },
          { href: '/crypto-trading', label: 'Crypto Trading' },
          { href: '/bitcoin-mining', label: 'Bitcoin Mining' },
          { href: '/online-brokerage', label: 'Online Brokerage' }
        ]
      },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' }
    ],
    zh: [
      { href: '/', label: '首页' },
      { 
        href: '/services', 
        label: '服务',
        dropdown: [
          { href: '/investment-advisor', label: '投资顾问' },
          { href: '/crypto-trading', label: '加密货币交易' },
          { href: '/bitcoin-mining', label: '比特币挖矿' },
          { href: '/online-brokerage', label: '在线券商' }
        ]
      },
      { href: '/blog', label: '博客' },
      { href: '/about', label: '关于我们' },
      { href: '/contact', label: '联系我们' }
    ],
    de: [
      { href: '/', label: 'Startseite' },
      { 
        href: '/services', 
        label: 'Dienstleistungen',
        dropdown: [
          { href: '/investment-advisor', label: 'Investitionsberater' },
          { href: '/crypto-trading', label: 'Krypto-Handel' },
          { href: '/bitcoin-mining', label: 'Bitcoin-Mining' },
          { href: '/online-brokerage', label: 'Online-Brokerage' }
        ]
      },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'Über uns' },
      { href: '/contact', label: 'Kontakt' }
    ]
  };

  const currentNav = navigationItems[currentLang as keyof typeof navigationItems] || navigationItems.en;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <TrendingUp className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Elite Traders Capital
              </span>
              <div className="text-xs text-gray-500 font-medium tracking-wide">PREMIUM INVESTMENT SERVICES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {currentNav.map((item) => (
              <div key={item.href} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        location.pathname.startsWith('/services') ? 'text-blue-600' : ''
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            to={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 relative ${
                      location.pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.href && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="zh">中文</option>
                <option value="de">DE</option>
              </select>
            </div>
            <Link 
              to="/onboarding"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-sm"
            >
              Start Trading
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
              {currentNav.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-gray-700 block px-3 py-2 text-base font-semibold">
                        {item.label}
                      </div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="text-gray-600 block px-6 py-2 text-sm hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex items-center px-3 py-2 space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <select
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="bg-transparent border-none text-base font-medium text-gray-700 focus:outline-none"
                >
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <Link 
                to="/onboarding"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 mx-3 block text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Trading
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;