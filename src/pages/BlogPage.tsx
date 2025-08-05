import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, Bitcoin, DollarSign, Search } from 'lucide-react';
import ContactForm from '../components/Forms/ContactForm';

interface BlogPageProps {
  currentLang: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const content = {
    en: {
      title: "Investment & Cryptocurrency Trading Insights",
      subtitle: "Expert guidance on registered investment advisors, crypto exchange platforms, online brokerage accounts, and cryptocurrency trading for beginners",
      categories: [
        { id: 'all', label: 'All Articles' },
        { id: 'investment-advisor', label: 'Investment Advisors' },
        { id: 'crypto-trading', label: 'Crypto Trading' },
        { id: 'online-brokerage', label: 'Online Brokerage' },
        { id: 'crypto-mining', label: 'Crypto Mining' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment-advisor',
          title: "How to Choose the Best Registered Investment Advisor in 2025",
          slug: "best-registered-investment-advisor-2025",
          excerpt: "Complete guide to selecting registered investment advisor and financial advisors. Learn about investment advisors credentials, fees, and what questions to ask when choosing financial advisors for your investment needs.",
          author: "Sarah Johnson, CFA",
          date: "2025-01-15",
          readTime: "12 min read",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["registered investment advisor", "financial advisors", "investment advisors", "financial advisor"],
          featured: true
        },
        {
          id: 2,
          category: 'online-brokerage',
          title: "Top Online Brokerage Accounts for Cryptocurrency Trading in 2025",
          slug: "best-online-brokerage-crypto-trading-2025",
          excerpt: "Comprehensive review of top online brokerage accounts and online investment platforms for crypto exchange trading. Compare trading sites, invest account options, and online trading features for cryptocurrency trading.",
          author: "Michael Chen, CFA",
          date: "2025-01-12",
          readTime: "15 min read",
          image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["top online brokerage accounts", "online investment platforms", "crypto exchange", "trading sites", "invest account"]
        },
        {
          id: 3,
          category: 'crypto-trading',
          title: "How to Trade Cryptocurrency for Beginners: Complete Guide 2025",
          slug: "how-to-trade-cryptocurrency-beginners-guide-2025",
          excerpt: "Ultimate beginner's guide to trading cryptocurrency. Learn how to trade cryptocurrency for beginners, crypto trading for beginners strategies, and crypto trading for dummies essentials for successful cryptocurrency trading.",
          author: "Emily Rodriguez, CFP",
          date: "2025-01-10",
          readTime: "18 min read",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["how to trade cryptocurrency for beginners", "crypto trading for beginners", "beginner's guide to trading cryptocurrency", "crypto trading for dummies", "cryptocurrency trading"]
        },
        {
          id: 4,
          category: 'crypto-mining',
          title: "Cryptocurrency Mining & Bitcoin Mining: Complete Profitability Guide 2025",
          slug: "cryptocurrency-bitcoin-mining-profitability-guide-2025",
          excerpt: "Comprehensive analysis of cryptocurrency mining and bitcoin mining operations. Learn about crypto mining equipment, costs, profitability, and how to start cryptocurrency mining in 2025.",
          author: "David Park, Mining Expert",
          date: "2025-01-08",
          readTime: "20 min read",
          image: "https://images.pexels.com/photos/8358050/pexels-photo-8358050.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["cryptocurrency mining", "bitcoin mining", "crypto mining"]
        },
        {
          id: 5,
          category: 'investment-advisor',
          title: "Top Crypto Index Funds & Bitcoin ETF Investment Guide 2025",
          slug: "top-crypto-index-funds-bitcoin-etf-guide-2025",
          excerpt: "Complete guide to top crypto index funds, most popular crypto index funds, and bitcoin ETF investments. Learn how investment companies and registered investment advisor recommend crypto investments.",
          author: "Lisa Thompson, Portfolio Manager",
          date: "2025-01-05",
          readTime: "14 min read",
          image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["top crypto index funds", "most popular crypto index funds", "bitcoin etf", "investment companies"]
        },
        {
          id: 6,
          category: 'crypto-trading',
          title: "How to Invest in Cryptocurrency for Beginners: 2025 Investment Strategy",
          slug: "how-to-invest-cryptocurrency-beginners-2025",
          excerpt: "Learn how to invest in cryptocurrency for beginners with expert guidance from financial advisors. Complete cryptocurrency investment strategy including online trading and trading online platforms.",
          author: "Robert Kim, Investment Strategist",
          date: "2025-01-03",
          readTime: "16 min read",
          image: "https://images.pexels.com/photos/6771901/pexels-photo-6771901.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["how to invest in cryptocurrency for beginners", "cryptocurrency", "online trading", "trading online"]
        },
        {
          id: 7,
          category: 'online-brokerage',
          title: "Best Trading Sites & Online Investment Platforms Comparison 2025",
          slug: "best-trading-sites-online-investment-platforms-2025",
          excerpt: "Detailed comparison of best trading sites and online investment platforms. Review of top online brokerage accounts, invest account features, and crypto exchange integration for optimal online trading experience.",
          author: "Jennifer Walsh, Trading Analyst",
          date: "2025-01-01",
          readTime: "13 min read",
          image: "https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["trading sites", "online investment platforms", "top online brokerage accounts", "crypto exchange"]
        },
        {
          id: 8,
          category: 'crypto-trading',
          title: "Advanced Cryptocurrency Trading Strategies for 2025",
          slug: "advanced-cryptocurrency-trading-strategies-2025",
          excerpt: "Master advanced cryptocurrency trading techniques beyond crypto trading for beginners. Professional strategies for experienced traders using top crypto exchange platforms and trading sites.",
          author: "Mark Stevens, Senior Trader",
          date: "2024-12-28",
          readTime: "22 min read",
          image: "https://images.pexels.com/photos/8369641/pexels-photo-8369641.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["cryptocurrency trading", "crypto exchange", "trading sites", "how to trade cryptocurrency"]
        }
      ]
    },
    zh: {
      title: "投资与加密货币交易洞察",
      subtitle: "关于投资顾问、加密货币交易平台、在线券商账户和加密货币交易入门的专家指导",
      categories: [
        { id: 'all', label: '所有文章' },
        { id: 'investment-advisor', label: '投资顾问' },
        { id: 'crypto-trading', label: '加密货币交易' },
        { id: 'online-brokerage', label: '在线券商' },
        { id: 'crypto-mining', label: '加密货币挖矿' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment-advisor',
          title: "2025年如何选择最佳投资顾问",
          slug: "best-investment-advisor-china-2025",
          excerpt: "选择投资顾问和财务顾问的完整指南。了解投资顾问资格认证、费用结构以及选择财务顾问时应该询问的问题。",
          author: "王丽华, CFA",
          date: "2025-01-15",
          readTime: "12分钟阅读",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["投资顾问", "财务顾问", "投资咨询"],
          featured: true
        },
        {
          id: 2,
          category: 'crypto-trading',
          title: "加密货币交易入门完整指南",
          slug: "cryptocurrency-trading-beginners-guide-china",
          excerpt: "加密货币交易和虚拟货币交易的完整入门指南。学习如何使用加密货币交易平台和虚拟币交易平台进行加密货币投资。",
          author: "陈志明, CFP",
          date: "2025-01-12",
          readTime: "15分钟阅读",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["加密货币交易", "虚拟货币", "加密货币投资", "虚拟币交易平台"]
        }
      ]
    },
    de: {
      title: "Investment- und Kryptowährungs-Einblicke",
      subtitle: "Expertenberatung zu Investitionsberatern, Kryptowährungs-Handelsplattformen und Online-Brokerage-Konten",
      categories: [
        { id: 'all', label: 'Alle Artikel' },
        { id: 'investment-advisor', label: 'Investitionsberater' },
        { id: 'crypto-trading', label: 'Krypto-Handel' },
        { id: 'online-brokerage', label: 'Online-Brokerage' },
        { id: 'crypto-mining', label: 'Krypto-Mining' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment-advisor',
          title: "Wie man den besten Investitionsberater 2025 wählt",
          slug: "best-investment-advisor-germany-2025",
          excerpt: "Vollständiger Leitfaden zur Auswahl von Investitionsberatern und Finanzberatern. Lernen Sie über Qualifikationen, Gebühren und wichtige Fragen bei der Auswahl von Finanzberatern.",
          author: "Anna Müller, CFA",
          date: "2025-01-15",
          readTime: "12 Min. Lesezeit",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Investitionsberater", "Finanzberater", "Investmentberatung"],
          featured: true
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;
  
  const filteredArticles = selectedCategory === 'all' 
    ? currentContent.articles 
    : currentContent.articles.filter(article => article.category === selectedCategory);

  const searchFilteredArticles = searchTerm
    ? filteredArticles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : filteredArticles;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'investment-advisor': return TrendingUp;
      case 'crypto-trading': return Bitcoin;
      case 'online-brokerage': return DollarSign;
      case 'crypto-mining': return TrendingUp;
      default: return TrendingUp;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {currentContent.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {selectedCategory === 'all' && !searchTerm && currentContent.articles.find(article => article.featured) && (
            <div className="mb-16">
              {(() => {
                const featured = currentContent.articles.find(article => article.featured)!;
                const IconComponent = getCategoryIcon(featured.category);
                
                return (
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12 text-white">
                        <div className="flex items-center mb-4">
                          <IconComponent className="h-6 w-6 mr-2" />
                          <span className="text-blue-200 font-medium uppercase tracking-wide text-sm">Featured Article</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{featured.title}</h3>
                        <p className="text-blue-100 mb-6 text-lg leading-relaxed">{featured.excerpt}</p>
                        
                        <div className="flex items-center mb-6">
                          <User className="h-5 w-5 mr-2 text-blue-200" />
                          <span className="text-blue-200 mr-4">{featured.author}</span>
                          <Calendar className="h-5 w-5 mr-2 text-blue-200" />
                          <span className="text-blue-200 mr-4">{featured.date}</span>
                          <span className="text-blue-200">{featured.readTime}</span>
                        </div>
                        
                        <Link 
                          to={`/blog/${featured.slug}`}
                          className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                        >
                          Read Full Article
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                      </div>
                      
                      <div className="lg:h-full">
                        <img 
                          src={featured.image} 
                          alt={featured.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredArticles.filter(article => !article.featured || selectedCategory !== 'all' || searchTerm).map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              
              return (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors duration-200">
                      <Link to={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* No Results */}
          {searchFilteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {searchFilteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Investment Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles on registered investment advisors, crypto trading, and online brokerage accounts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Ready to Start Your Investment Journey?"
            subtitle="Contact our registered investment advisors for personalized guidance on crypto trading, online brokerage accounts, and investment strategies."
          />
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;