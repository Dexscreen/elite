import React from 'react';
import { TrendingUp, Shield, Globe, Zap, Users, BarChart3 } from 'lucide-react';
import ContactForm from '../Forms/ContactForm';

interface ServicesSectionProps {
  currentLang: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Professional Investment Services",
      subtitle: "Comprehensive financial solutions tailored to your investment goals",
      services: [
        {
          icon: TrendingUp,
          title: "Registered Investment Advisor",
          description: "Professional investment advisory services with SEC-registered advisors providing personalized portfolio management and financial planning.",
          keywords: ["investment advisor", "financial advisor", "portfolio management"]
        },
        {
          icon: Globe,
          title: "Online Investment Platforms",
          description: "Access top-rated online brokerage accounts and investment platforms with advanced trading tools and competitive fees.",
          keywords: ["online brokerage", "investment platforms", "trading platforms"]
        },
        {
          icon: Shield,
          title: "Crypto Exchange Services",
          description: "Secure cryptocurrency trading on leading exchanges with institutional-grade security and professional support.",
          keywords: ["crypto exchange", "cryptocurrency trading", "bitcoin trading"]
        },
        {
          icon: Zap,
          title: "Bitcoin Mining Solutions",
          description: "Professional cryptocurrency mining services with cutting-edge hardware and optimized mining strategies.",
          keywords: ["bitcoin mining", "crypto mining", "cryptocurrency mining"]
        },
        {
          icon: BarChart3,
          title: "Trading Education",
          description: "Learn how to trade cryptocurrency for beginners with our comprehensive trading courses and expert guidance.",
          keywords: ["crypto trading for beginners", "trading education", "investment education"]
        },
        {
          icon: Users,
          title: "Investment Companies",
          description: "Partner with top investment companies and access exclusive crypto index funds and bitcoin ETFs.",
          keywords: ["investment companies", "crypto index funds", "bitcoin etf"]
        }
      ]
    },
    zh: {
      title: "专业投资服务",
      subtitle: "量身定制的综合金融解决方案，助您实现投资目标",
      services: [
        {
          icon: TrendingUp,
          title: "投资顾问",
          description: "由SEC注册顾问提供专业投资咨询服务，包括个性化投资组合管理和财务规划。",
          keywords: ["投资顾问", "财务顾问", "投资组合管理"]
        },
        {
          icon: Globe,
          title: "在线投资平台",
          description: "访问顶级在线经纪账户和投资平台，配备先进交易工具和竞争性费用。",
          keywords: ["在线经纪", "投资平台", "交易平台"]
        },
        {
          icon: Shield,
          title: "加密货币交易",
          description: "在领先交易所进行安全的加密货币交易，享有机构级安全性和专业支持。",
          keywords: ["加密货币交易", "虚拟货币交易", "比特币交易"]
        },
        {
          icon: Zap,
          title: "比特币挖矿",
          description: "提供专业的加密货币挖矿服务，配备尖端硬件和优化挖矿策略。",
          keywords: ["比特币挖矿", "加密货币挖矿", "虚拟货币挖矿"]
        },
        {
          icon: BarChart3,
          title: "交易教育",
          description: "为初学者提供加密货币交易学习课程，配备全面的交易课程和专家指导。",
          keywords: ["加密货币交易入门", "交易教育", "投资教育"]
        },
        {
          icon: Users,
          title: "投资公司合作",
          description: "与顶级投资公司合作，获得独家加密货币指数基金和比特币ETF。",
          keywords: ["投资公司", "加密货币指数基金", "比特币ETF"]
        }
      ]
    },
    de: {
      title: "Professionelle Investment-Services",
      subtitle: "Umfassende Finanzlösungen, maßgeschneidert für Ihre Anlageziele",
      services: [
        {
          icon: TrendingUp,
          title: "Investitionsberater",
          description: "Professionelle Anlageberatung durch SEC-registrierte Berater mit personalisiertem Portfoliomanagement und Finanzplanung.",
          keywords: ["Investitionsberater", "Finanzberater", "Portfoliomanagement"]
        },
        {
          icon: Globe,
          title: "Online-Investmentplattformen",
          description: "Zugang zu erstklassigen Online-Brokerage-Konten und Investmentplattformen mit fortschrittlichen Handelstools.",
          keywords: ["Online-Brokerage", "Investmentplattformen", "Handelsplattformen"]
        },
        {
          icon: Shield,
          title: "Kryptowährungshandel",
          description: "Sicherer Kryptowährungshandel auf führenden Börsen mit institutioneller Sicherheit und professionellem Support.",
          keywords: ["Kryptowährungshandel", "Bitcoin-Handel", "Digitaler Währungshandel"]
        },
        {
          icon: Zap,
          title: "Bitcoin-Mining",
          description: "Professionelle Kryptowährungs-Mining-Services mit modernster Hardware und optimierten Mining-Strategien.",
          keywords: ["Bitcoin-Mining", "Kryptowährungs-Mining", "Digitales Mining"]
        },
        {
          icon: BarChart3,
          title: "Trading-Ausbildung",
          description: "Lernen Sie Kryptowährungshandel für Anfänger mit unseren umfassenden Handelskursen und Expertenberatung.",
          keywords: ["Krypto-Trading für Anfänger", "Handelsausbildung", "Investmentausbildung"]
        },
        {
          icon: Users,
          title: "Investmentgesellschaften",
          description: "Partnerschaft mit Top-Investmentgesellschaften und Zugang zu exklusiven Krypto-Indexfonds und Bitcoin-ETFs.",
          keywords: ["Investmentgesellschaften", "Krypto-Indexfonds", "Bitcoin-ETF"]
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentContent.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, keyIndex) => (
                      <span key={keyIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Form Section */}
        <div className="mt-20">
          <ContactForm 
            title={currentLang === 'en' ? "Ready to Get Started?" : currentLang === 'zh' ? "准备开始了吗？" : "Bereit zu starten?"}
            subtitle={currentLang === 'en' ? "Contact our investment experts for a free consultation" : currentLang === 'zh' ? "联系我们的投资专家进行免费咨询" : "Kontaktieren Sie unsere Investmentexperten für eine kostenlose Beratung"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;