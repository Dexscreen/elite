import React from 'react';
import { TrendingUp, Shield, Globe, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  currentLang: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Professional Investment & Cryptocurrency Services",
      subtitle: "Expert guidance for registered investment advisors, crypto trading, and online investment platforms. Start your journey to financial success today.",
      cta1: "Get Started Now",
      cta2: "Free Consultation",
      features: [
        "Registered Investment Advisors",
        "Cryptocurrency Trading Platform",
        "Bitcoin Mining Solutions",
        "24/7 Expert Support"
      ]
    },
    zh: {
      title: "专业投资与加密货币服务",
      subtitle: "为投资顾问、加密货币交易和在线投资平台提供专业指导。立即开始您的财务成功之旅。",
      cta1: "立即开始",
      cta2: "免费咨询",
      features: [
        "注册投资顾问",
        "加密货币交易平台",
        "比特币挖矿解决方案",
        "24/7专家支持"
      ]
    },
    de: {
      title: "Professionelle Investment- und Kryptowährungsdienste",
      subtitle: "Expertenberatung für registrierte Anlageberater, Krypto-Handel und Online-Investmentplattformen. Starten Sie noch heute Ihren Weg zum finanziellen Erfolg.",
      cta1: "Jetzt Starten",
      cta2: "Kostenlose Beratung",
      features: [
        "Registrierte Anlageberater",
        "Kryptowährungshandelsplattform",
        "Bitcoin-Mining-Lösungen",
        "24/7 Expertenunterstützung"
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Investors Worldwide
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {currentContent.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
              <TrendingUp className="h-5 w-5 mr-2" />
              {currentContent.cta1}
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-200 border border-white/20">
              <Globe className="h-5 w-5 mr-2" />
              {currentContent.cta2}
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-sm font-medium">{feature}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="h-6 w-6 text-white rotate-90" />
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default HeroSection;