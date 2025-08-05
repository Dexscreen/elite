import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTawkTo } from './hooks/useTawkTo';
import Header from './components/Layout/Header';
import Footer from './components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import OnboardingPage from './pages/OnboardingPage';

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  
  // Initialize Tawk.to
  useTawkTo();

  // Update page title and meta based on language and route
  useEffect(() => {
    const titles = {
      en: 'Elite Traders Capital - Registered Investment Advisor | Top Online Brokerage Accounts',
      zh: 'Elite Traders Capital - 投资顾问 | 加密货币交易 | 比特币挖矿',
      de: 'Elite Traders Capital - Investitionsberater | Kryptowährungshandel | Online-Brokerage'
    };
    
    document.title = titles[currentLang as keyof typeof titles] || titles.en;
    
    // Set meta description
    const descriptions = {
      en: 'Top registered investment advisor offering crypto exchange, online brokerage accounts, cryptocurrency mining, and trading sites. Learn how to trade cryptocurrency for beginners with our financial advisors and investment advisors.',
      zh: 'Elite投资顾问提供加密货币交易、比特币挖矿、虚拟货币交易平台和加密货币投资服务。专业财务顾问指导加密货币交易入门。',
      de: 'Elite Investitionsberater bietet Kryptowährungshandel, Bitcoin-Mining, virtuelle Währungsplattformen und Kryptowährungsinvestitionen. Professionelle Finanzberater für Kryptowährungshandel.'
    };
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[currentLang as keyof typeof descriptions] || descriptions.en);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptions[currentLang as keyof typeof descriptions] || descriptions.en;
      document.head.appendChild(meta);
    }

    // Set language attribute
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header currentLang={currentLang} setCurrentLang={setCurrentLang} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage currentLang={currentLang} />} />
            <Route path="/services" element={<ServicesPage currentLang={currentLang} />} />
            <Route path="/blog" element={<BlogPage currentLang={currentLang} />} />
            <Route path="/blog/:slug" element={<BlogPostPage currentLang={currentLang} />} />
            <Route path="/contact" element={<ContactPage currentLang={currentLang} />} />
            <Route path="/onboarding" element={<OnboardingPage currentLang={currentLang} />} />
            
            {/* Service-specific pages */}
            <Route path="/investment-advisor" element={<ServicesPage currentLang={currentLang} />} />
            <Route path="/crypto-trading" element={<ServicesPage currentLang={currentLang} />} />
            <Route path="/bitcoin-mining" element={<ServicesPage currentLang={currentLang} />} />
            <Route path="/online-brokerage" element={<ServicesPage currentLang={currentLang} />} />
          </Routes>
        </main>
        
        <Footer currentLang={currentLang} />
      </div>
    </Router>
  );
}

export default App;