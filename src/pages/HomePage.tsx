import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Globe, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

interface HomePageProps {
  currentLang: string;
}

const HomePage: React.FC<HomePageProps> = ({ currentLang }) => {
  const content = {
    en: {
      hero: {
        title: "Registered Investment Advisor | Top Online Brokerage Accounts",
        subtitle: "Elite registered investment advisor offering crypto exchange, online investment platforms, cryptocurrency mining, and trading sites. Expert financial advisors guide you through crypto trading for beginners to advanced cryptocurrency trading strategies.",
        cta1: "Start Trading Now",
        cta2: "Free Consultation",
        features: [
          "Registered Investment Advisor (SEC)",
          "Top Online Brokerage Accounts",
          "Crypto Exchange & Trading Sites",
          "Cryptocurrency Mining Solutions"
        ]
      },
      stats: [
        { number: "$2.5B+", label: "Assets Under Management" },
        { number: "50,000+", label: "Active Traders" },
        { number: "99.9%", label: "Platform Uptime" },
        { number: "15+", label: "Years Experience" }
      ],
      services: {
        title: "Premium Investment Services",
        subtitle: "Comprehensive financial solutions for sophisticated investors",
        items: [
          {
            icon: TrendingUp,
            title: "Registered Investment Advisor & Financial Advisors",
            description: "Elite registered investment advisor with certified financial advisors providing personalized investment strategies. Our investment advisors specialize in online investment platforms and top online brokerage accounts for optimal portfolio management.",
            link: "/investment-advisor"
          },
          {
            icon: Globe,
            title: "Crypto Exchange & Online Trading Platforms",
            description: "Premier crypto exchange and trading sites offering cryptocurrency trading, online trading, and trading online solutions. Perfect for crypto trading for beginners with our beginner's guide to trading cryptocurrency and crypto trading for dummies resources.",
            link: "/crypto-trading"
          },
          {
            icon: Zap,
            title: "Cryptocurrency Mining & Bitcoin Mining",
            description: "Professional cryptocurrency mining and bitcoin mining operations with crypto mining solutions. State-of-the-art hardware and optimized mining strategies for maximum cryptocurrency profitability.",
            link: "/bitcoin-mining"
          },
          {
            icon: Shield,
            title: "Top Online Brokerage Accounts & Investment Platforms",
            description: "Top online brokerage accounts and online investment platforms with invest account options. Access to stocks, bonds, ETFs, top crypto index funds, most popular crypto index funds, and bitcoin ETF investments.",
            link: "/online-brokerage"
          }
        ]
      },
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "Portfolio Manager",
          content: "Elite Traders Capital transformed my investment strategy. Their registered investment advisors helped me achieve 28% returns last year.",
          rating: 5
        },
        {
          name: "Michael Chen",
          role: "Crypto Investor",
          content: "The best cryptocurrency trading platform I've used. Professional tools, excellent security, and outstanding customer support.",
          rating: 5
        },
        {
          name: "David Rodriguez",
          role: "High Net Worth Individual",
          content: "Their bitcoin mining operations and investment advisory services have consistently outperformed the market. Highly recommended.",
          rating: 5
        }
      ]
    },
    zh: {
      hero: {
        title: "精英投资与加密货币交易平台",
        subtitle: "与世界上最精明的投资者一起，通过我们的注册投资顾问、先进的加密货币交易平台和机构级比特币挖矿解决方案。",
        cta1: "立即开始交易",
        cta2: "免费咨询",
        features: [
          "SEC注册投资顾问",
          "先进的加密货币交易所",
          "专业比特币挖矿",
          "24/7精英支持"
        ]
      },
      stats: [
        { number: "$25亿+", label: "管理资产" },
        { number: "50,000+", label: "活跃交易者" },
        { number: "99.9%", label: "平台正常运行时间" },
        { number: "15+", label: "年经验" }
      ],
      services: {
        title: "优质投资服务",
        subtitle: "为精明投资者提供全面的金融解决方案",
        items: [
          {
            icon: TrendingUp,
            title: "注册投资顾问",
            description: "SEC注册的财务顾问，为高净值个人提供个性化投资策略、投资组合管理和财富规划。",
            link: "/investment-advisor"
          },
          {
            icon: Globe,
            title: "加密货币交易平台",
            description: "具有机构级安全性、深度流动性和专业交易工具的先进加密货币交易所，用于比特币和山寨币交易。",
            link: "/crypto-trading"
          },
          {
            icon: Zap,
            title: "比特币挖矿业务",
            description: "专业的加密货币挖矿服务，配备最先进的硬件、优化的矿池和最大盈利策略。",
            link: "/bitcoin-mining"
          },
          {
            icon: Shield,
            title: "在线券商账户",
            description: "优质在线投资平台，可访问股票、债券、ETF和独家加密货币指数基金，交易费用具有竞争力。",
            link: "/online-brokerage"
          }
        ]
      },
      testimonials: [
        {
          name: "王丽华",
          role: "投资组合经理",
          content: "Elite Traders Capital改变了我的投资策略。他们的注册投资顾问帮助我去年实现了28%的回报。",
          rating: 5
        },
        {
          name: "陈志明",
          role: "加密货币投资者",
          content: "我使用过的最好的加密货币交易平台。专业工具、出色的安全性和卓越的客户支持。",
          rating: 5
        },
        {
          name: "李大伟",
          role: "高净值个人",
          content: "他们的比特币挖矿业务和投资咨询服务一直跑赢市场。强烈推荐。",
          rating: 5
        }
      ]
    },
    de: {
      hero: {
        title: "Elite Investment & Kryptowährungs-Handelsplattform",
        subtitle: "Schließen Sie sich den weltweit anspruchsvollsten Investoren an mit unseren registrierten Investmentberatern, fortschrittlichen Krypto-Handelsplattformen und institutionellen Bitcoin-Mining-Lösungen.",
        cta1: "Jetzt Handeln",
        cta2: "Kostenlose Beratung",
        features: [
          "SEC-Registrierte Investmentberater",
          "Fortschrittliche Kryptowährungsbörse",
          "Professionelles Bitcoin-Mining",
          "24/7 Elite-Support"
        ]
      },
      stats: [
        { number: "$2,5Mrd+", label: "Verwaltetes Vermögen" },
        { number: "50.000+", label: "Aktive Händler" },
        { number: "99,9%", label: "Plattform-Verfügbarkeit" },
        { number: "15+", label: "Jahre Erfahrung" }
      ],
      services: {
        title: "Premium-Investment-Services",
        subtitle: "Umfassende Finanzlösungen für anspruchsvolle Investoren",
        items: [
          {
            icon: TrendingUp,
            title: "Registrierter Investmentberater",
            description: "SEC-registrierte Finanzberater bieten personalisierte Investmentstrategien, Portfoliomanagement und Vermögensplanung für vermögende Privatpersonen.",
            link: "/investment-advisor"
          },
          {
            icon: Globe,
            title: "Kryptowährungs-Handelsplattform",
            description: "Fortschrittliche Krypto-Börse mit institutioneller Sicherheit, tiefer Liquidität und professionellen Handelstools für Bitcoin- und Altcoin-Handel.",
            link: "/crypto-trading"
          },
          {
            icon: Zap,
            title: "Bitcoin-Mining-Operationen",
            description: "Professionelle Kryptowährungs-Mining-Services mit modernster Hardware, optimierten Mining-Pools und maximalen Rentabilitätsstrategien.",
            link: "/bitcoin-mining"
          },
          {
            icon: Shield,
            title: "Online-Brokerage-Konten",
            description: "Premium-Online-Investmentplattformen mit Zugang zu Aktien, Anleihen, ETFs und exklusiven Krypto-Indexfonds mit wettbewerbsfähigen Handelsgebühren.",
            link: "/online-brokerage"
          }
        ]
      },
      testimonials: [
        {
          name: "Anna Müller",
          role: "Portfolio-Managerin",
          content: "Elite Traders Capital hat meine Investmentstrategie transformiert. Ihre registrierten Investmentberater halfen mir, letztes Jahr 28% Rendite zu erzielen.",
          rating: 5
        },
        {
          name: "Michael Schmidt",
          role: "Krypto-Investor",
          content: "Die beste Kryptowährungs-Handelsplattform, die ich verwendet habe. Professionelle Tools, ausgezeichnete Sicherheit und hervorragender Kundensupport.",
          rating: 5
        },
        {
          name: "David Weber",
          role: "Vermögende Privatperson",
          content: "Ihre Bitcoin-Mining-Operationen und Investmentberatung haben den Markt konstant übertroffen. Sehr empfehlenswert.",
          rating: 5
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
                <Shield className="h-4 w-4 mr-2" />
                Trusted by 50,000+ Elite Investors Worldwide
                <Award className="h-4 w-4 ml-2" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
                  {currentContent.hero.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
                {currentContent.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/onboarding"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <TrendingUp className="h-6 w-6 mr-3" />
                {currentContent.hero.cta1}
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20 text-lg"
              >
                <Globe className="h-6 w-6 mr-3" />
                {currentContent.hero.cta2}
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {currentContent.hero.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-sm font-semibold">{feature}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ArrowRight className="h-8 w-8 text-white rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentContent.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.services.items.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-lg"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentLang === 'en' ? 'What Our Clients Say' : 
               currentLang === 'zh' ? '客户评价' : 
               'Was unsere Kunden sagen'}
            </h2>
            <p className="text-xl text-gray-600">
              {currentLang === 'en' ? 'Trusted by thousands of successful investors worldwide' :
               currentLang === 'zh' ? '受到全球数千名成功投资者的信赖' :
               'Vertraut von Tausenden erfolgreicher Investoren weltweit'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {currentLang === 'en' ? 'Ready to Join the Elite?' :
             currentLang === 'zh' ? '准备加入精英行列？' :
             'Bereit, der Elite beizutreten?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {currentLang === 'en' ? 'Start your journey with our registered investment advisors and advanced trading platforms' :
             currentLang === 'zh' ? '与我们的注册投资顾问和先进交易平台开始您的旅程' :
             'Beginnen Sie Ihre Reise mit unseren registrierten Investmentberatern und fortschrittlichen Handelsplattformen'}
          </p>
          <Link 
            to="/onboarding"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            <Users className="h-6 w-6 mr-3" />
            {currentLang === 'en' ? 'Get Started Today' :
             currentLang === 'zh' ? '今天就开始' :
             'Heute beginnen'}
          </Link>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;