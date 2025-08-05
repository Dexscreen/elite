import React, { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Bitcoin, DollarSign } from 'lucide-react';

interface BlogSectionProps {
  currentLang: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = {
    en: {
      title: "Investment & Crypto Insights",
      subtitle: "Stay informed with the latest trends, strategies, and expert analysis",
      categories: [
        { id: 'all', label: 'All Articles' },
        { id: 'investment', label: 'Investment Advisory' },
        { id: 'crypto', label: 'Cryptocurrency' },
        { id: 'trading', label: 'Trading Strategies' },
        { id: 'mining', label: 'Crypto Mining' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment',
          title: "How to Choose a Registered Investment Advisor in 2025",
          excerpt: "Essential guide to selecting the right investment advisor for your financial goals. Learn about credentials, fees, and what questions to ask.",
          author: "Sarah Johnson",
          date: "2025-01-15",
          readTime: "8 min read",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["investment advisor", "financial planning", "portfolio management"],
          featured: true
        },
        {
          id: 2,
          category: 'crypto',
          title: "Top Online Brokerage Accounts for Cryptocurrency Trading",
          excerpt: "Compare the best online investment platforms and brokerage accounts for crypto trading. Features, fees, and security analysis.",
          author: "Michael Chen",
          date: "2025-01-12",
          readTime: "10 min read",
          image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["online brokerage", "crypto exchange", "trading platforms"]
        },
        {
          id: 3,
          category: 'trading',
          title: "Cryptocurrency Trading for Beginners: Complete Guide",
          excerpt: "Step-by-step guide on how to trade cryptocurrency for beginners. Learn trading basics, risk management, and platform selection.",
          author: "Emily Rodriguez",
          date: "2025-01-10",
          readTime: "12 min read",
          image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["crypto trading for beginners", "trading education", "risk management"]
        },
        {
          id: 4,
          category: 'mining',
          title: "Bitcoin Mining in 2025: Equipment, Costs, and Profitability",
          excerpt: "Comprehensive analysis of cryptocurrency mining, including bitcoin mining equipment, electricity costs, and profit calculations.",
          author: "David Park",
          date: "2025-01-08",
          readTime: "15 min read",
          image: "https://images.pexels.com/photos/8358050/pexels-photo-8358050.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["bitcoin mining", "cryptocurrency mining", "mining profitability"]
        },
        {
          id: 5,
          category: 'investment',
          title: "Best Crypto Index Funds and Bitcoin ETFs for 2025",
          excerpt: "Review of the most popular crypto index funds and bitcoin ETFs. Analysis of performance, fees, and investment strategies.",
          author: "Lisa Thompson",
          date: "2025-01-05",
          readTime: "11 min read",
          image: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["crypto index funds", "bitcoin etf", "investment companies"]
        },
        {
          id: 6,
          category: 'crypto',
          title: "How to Invest in Cryptocurrency for Beginners: 2025 Edition",
          excerpt: "Complete beginner's guide to cryptocurrency investment. Learn about different cryptocurrencies, wallets, and investment strategies.",
          author: "Robert Kim",
          date: "2025-01-03",
          readTime: "14 min read",
          image: "https://images.pexels.com/photos/6771901/pexels-photo-6771901.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["cryptocurrency investment", "beginner guide", "crypto portfolio"]
        }
      ]
    },
    zh: {
      title: "投资与加密货币洞察",
      subtitle: "了解最新趋势、策略和专家分析，保持信息更新",
      categories: [
        { id: 'all', label: '所有文章' },
        { id: 'investment', label: '投资咨询' },
        { id: 'crypto', label: '加密货币' },
        { id: 'trading', label: '交易策略' },
        { id: 'mining', label: '加密货币挖矿' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment',
          title: "2025年如何选择注册投资顾问",
          excerpt: "选择合适投资顾问的基本指南。了解资格认证、费用结构以及应该询问的问题。",
          author: "王丽华",
          date: "2025-01-15",
          readTime: "8分钟阅读",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["投资顾问", "财务规划", "投资组合管理"],
          featured: true
        },
        {
          id: 2,
          category: 'crypto',
          title: "加密货币交易最佳在线券商账户",
          excerpt: "比较加密货币交易的最佳在线投资平台和券商账户。功能、费用和安全性分析。",
          author: "陈志明",
          date: "2025-01-12",
          readTime: "10分钟阅读",
          image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["在线券商", "加密货币交易所", "交易平台"]
        }
      ]
    },
    de: {
      title: "Investment- und Krypto-Einblicke",
      subtitle: "Bleiben Sie mit den neuesten Trends, Strategien und Expertenanalysen informiert",
      categories: [
        { id: 'all', label: 'Alle Artikel' },
        { id: 'investment', label: 'Investmentberatung' },
        { id: 'crypto', label: 'Kryptowährung' },
        { id: 'trading', label: 'Handelsstrategien' },
        { id: 'mining', label: 'Krypto-Mining' }
      ],
      articles: [
        {
          id: 1,
          category: 'investment',
          title: "Wie man 2025 einen registrierten Investmentberater wählt",
          excerpt: "Wesentlicher Leitfaden zur Auswahl des richtigen Investmentberaters für Ihre finanziellen Ziele.",
          author: "Anna Müller",
          date: "2025-01-15",
          readTime: "8 Min. Lesezeit",
          image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Investmentberater", "Finanzplanung", "Portfoliomanagement"],
          featured: true
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;
  
  const filteredArticles = selectedCategory === 'all' 
    ? currentContent.articles 
    : currentContent.articles.filter(article => article.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'investment': return TrendingUp;
      case 'crypto': return Bitcoin;
      case 'trading': return DollarSign;
      case 'mining': return TrendingUp;
      default: return TrendingUp;
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {currentContent.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {selectedCategory === 'all' && currentContent.articles.find(article => article.featured) && (
          <div className="mb-16">
            {(() => {
              const featured = currentContent.articles.find(article => article.featured)!;
              const IconComponent = getCategoryIcon(featured.category);
              
              return (
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl">
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
                      
                      <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                        Read Full Article
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </button>
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
          {filteredArticles.filter(article => !article.featured || selectedCategory !== 'all').map((article) => {
            const IconComponent = getCategoryIcon(article.category);
            
            return (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
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
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;