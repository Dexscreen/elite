import React from 'react';
import { UserPlus, Shield, TrendingUp } from 'lucide-react';
import OnboardingForm from '../Forms/OnboardingForm';

interface OnboardingSectionProps {
  currentLang: string;
}

const OnboardingSection: React.FC<OnboardingSectionProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Start Your Investment Journey",
      subtitle: "Join thousands of satisfied clients who trust us with their financial future",
      benefits: [
        {
          icon: Shield,
          title: "Secure & Regulated",
          description: "SEC-registered advisors with institutional-grade security"
        },
        {
          icon: TrendingUp,
          title: "Proven Results",
          description: "Average client portfolio growth of 12-18% annually"
        },
        {
          icon: UserPlus,
          title: "Personal Service",
          description: "Dedicated advisor assigned to every client account"
        }
      ]
    },
    zh: {
      title: "开始您的投资之旅",
      subtitle: "加入数千名信任我们管理其财务未来的满意客户",
      benefits: [
        {
          icon: Shield,
          title: "安全与合规",
          description: "SEC注册顾问，机构级安全保障"
        },
        {
          icon: TrendingUp,
          title: "经验证的结果",
          description: "客户投资组合年均增长12-18%"
        },
        {
          icon: UserPlus,
          title: "个人服务",
          description: "每个客户账户都有专属顾问"
        }
      ]
    },
    de: {
      title: "Starten Sie Ihre Investment-Reise",
      subtitle: "Schließen Sie sich Tausenden zufriedener Kunden an, die uns ihre finanzielle Zukunft anvertrauen",
      benefits: [
        {
          icon: Shield,
          title: "Sicher & Reguliert",
          description: "SEC-registrierte Berater mit institutioneller Sicherheit"
        },
        {
          icon: TrendingUp,
          title: "Bewährte Ergebnisse",
          description: "Durchschnittliches Portfoliowachstum von 12-18% jährlich"
        },
        {
          icon: UserPlus,
          title: "Persönlicher Service",
          description: "Jeder Kunde erhält einen dedizierten Berater"
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <section id="onboarding" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {currentLang === 'en' ? "Why Choose Us?" : 
                 currentLang === 'zh' ? "为什么选择我们？" : 
                 "Warum uns wählen?"}
              </h3>
            </div>
            
            {currentContent.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Statistics */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Clients' : 
                     currentLang === 'zh' ? '客户' : 
                     'Kunden'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">$2.5B+</div>
                  <div className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Assets Managed' : 
                     currentLang === 'zh' ? '管理资产' : 
                     'Verwaltetes Vermögen'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Years Experience' : 
                     currentLang === 'zh' ? '年经验' : 
                     'Jahre Erfahrung'}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                {currentLang === 'en' ? 'Regulated & Trusted By:' : 
                 currentLang === 'zh' ? '受监管并获得信任：' : 
                 'Reguliert & Vertraut von:'}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>• Securities & Exchange Commission (SEC)</div>
                <div>• Financial Industry Regulatory Authority (FINRA)</div>
                <div>• Commodity Futures Trading Commission (CFTC)</div>
                <div>• Better Business Bureau (A+ Rating)</div>
              </div>
            </div>
          </div>

          {/* Onboarding Form */}
          <div>
            <OnboardingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSection;