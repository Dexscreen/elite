import React from 'react';
import { Shield, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import OnboardingForm from '../components/Forms/OnboardingForm';

interface OnboardingPageProps {
  currentLang: string;
}

const OnboardingPage: React.FC<OnboardingPageProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Join Elite Traders Capital",
      subtitle: "Start your journey with the world's most sophisticated investment platform",
      benefits: [
        {
          icon: Shield,
          title: "SEC Registered & Secure",
          description: "Fully regulated investment advisors with institutional-grade security and insurance protection"
        },
        {
          icon: TrendingUp,
          title: "Proven Performance",
          description: "Average client portfolio returns of 12-18% annually with professional risk management"
        },
        {
          icon: Users,
          title: "Dedicated Support",
          description: "Personal investment advisor assigned to every client with 24/7 premium support"
        },
        {
          icon: Award,
          title: "Industry Recognition",
          description: "Award-winning platform trusted by over 50,000 investors worldwide"
        }
      ],
      process: {
        title: "Simple Onboarding Process",
        steps: [
          {
            step: "1",
            title: "Complete Application",
            description: "Fill out our comprehensive investment profile questionnaire"
          },
          {
            step: "2", 
            title: "Account Verification",
            description: "Verify your identity and financial information (1-2 business days)"
          },
          {
            step: "3",
            title: "Strategy Consultation",
            description: "Meet with your assigned investment advisor to discuss your goals"
          },
          {
            step: "4",
            title: "Start Investing",
            description: "Begin your investment journey with our professional guidance"
          }
        ]
      },
      features: [
        "No minimum investment requirements",
        "Commission-free stock and ETF trading",
        "Access to exclusive crypto index funds",
        "Professional portfolio management",
        "Tax-loss harvesting strategies",
        "Estate and retirement planning"
      ]
    },
    zh: {
      title: "加入Elite Traders Capital",
      subtitle: "与世界上最精密的投资平台开始您的旅程",
      benefits: [
        {
          icon: Shield,
          title: "SEC注册和安全",
          description: "完全受监管的投资顾问，具有机构级安全性和保险保护"
        },
        {
          icon: TrendingUp,
          title: "经过验证的表现",
          description: "客户投资组合年均回报率12-18%，配备专业风险管理"
        },
        {
          icon: Users,
          title: "专属支持",
          description: "每位客户都配有个人投资顾问，提供24/7优质支持"
        },
        {
          icon: Award,
          title: "行业认可",
          description: "获奖平台，受到全球超过50,000名投资者的信赖"
        }
      ],
      process: {
        title: "简单的入门流程",
        steps: [
          {
            step: "1",
            title: "完成申请",
            description: "填写我们全面的投资档案问卷"
          },
          {
            step: "2",
            title: "账户验证", 
            description: "验证您的身份和财务信息（1-2个工作日）"
          },
          {
            step: "3",
            title: "策略咨询",
            description: "与您指定的投资顾问会面讨论您的目标"
          },
          {
            step: "4",
            title: "开始投资",
            description: "在我们专业指导下开始您的投资之旅"
          }
        ]
      },
      features: [
        "无最低投资要求",
        "免佣金股票和ETF交易",
        "独家加密货币指数基金",
        "专业投资组合管理",
        "税收损失收获策略",
        "遗产和退休规划"
      ]
    },
    de: {
      title: "Treten Sie Elite Traders Capital bei",
      subtitle: "Beginnen Sie Ihre Reise mit der weltweit anspruchsvollsten Investmentplattform",
      benefits: [
        {
          icon: Shield,
          title: "SEC-registriert und sicher",
          description: "Vollständig regulierte Investmentberater mit institutioneller Sicherheit und Versicherungsschutz"
        },
        {
          icon: TrendingUp,
          title: "Bewährte Leistung",
          description: "Durchschnittliche Kundenportfolio-Renditen von 12-18% jährlich mit professionellem Risikomanagement"
        },
        {
          icon: Users,
          title: "Dedizierte Unterstützung",
          description: "Persönlicher Investmentberater für jeden Kunden mit 24/7 Premium-Support"
        },
        {
          icon: Award,
          title: "Branchenanerkennung",
          description: "Preisgekrönte Plattform, der über 50.000 Investoren weltweit vertrauen"
        }
      ],
      process: {
        title: "Einfacher Onboarding-Prozess",
        steps: [
          {
            step: "1",
            title: "Antrag ausfüllen",
            description: "Füllen Sie unseren umfassenden Investmentprofil-Fragebogen aus"
          },
          {
            step: "2",
            title: "Kontoverifizierung",
            description: "Verifizieren Sie Ihre Identität und Finanzinformationen (1-2 Werktage)"
          },
          {
            step: "3", 
            title: "Strategieberatung",
            description: "Treffen Sie sich mit Ihrem zugewiesenen Investmentberater, um Ihre Ziele zu besprechen"
          },
          {
            step: "4",
            title: "Investieren beginnen",
            description: "Beginnen Sie Ihre Investmentreise mit unserer professionellen Anleitung"
          }
        ]
      },
      features: [
        "Keine Mindestinvestitionsanforderungen",
        "Provisionsfreier Aktien- und ETF-Handel",
        "Zugang zu exklusiven Krypto-Indexfonds",
        "Professionelles Portfoliomanagement",
        "Steuerverlustrealisierungsstrategien",
        "Nachlass- und Ruhestandsplanung"
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by 50,000+ Elite Investors
            <Award className="h-4 w-4 ml-2" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            {currentContent.subtitle}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-blue-200">Assets Under Management</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Process & Features */}
            <div className="space-y-12">
              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {currentContent.process.title}
                </h2>
                
                <div className="space-y-6">
                  {currentContent.process.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {currentLang === 'en' ? 'What You Get' :
                   currentLang === 'zh' ? '您将获得' :
                   'Was Sie erhalten'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLang === 'en' ? 'Regulated & Trusted' :
                   currentLang === 'zh' ? '受监管和信任' :
                   'Reguliert & Vertrauenswürdig'}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SEC Registered
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    FINRA Member
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SIPC Protected
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    BBB A+ Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Onboarding Form */}
            <div className="lg:sticky lg:top-24">
              <OnboardingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentLang === 'en' ? 'What Our Clients Say' :
               currentLang === 'zh' ? '客户评价' :
               'Was unsere Kunden sagen'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: currentLang === 'en' ? 'Sarah Johnson' : currentLang === 'zh' ? '王丽华' : 'Anna Müller',
                role: currentLang === 'en' ? 'Portfolio Manager' : currentLang === 'zh' ? '投资组合经理' : 'Portfolio-Managerin',
                content: currentLang === 'en' ? 
                  "Elite Traders Capital transformed my investment approach. Their registered investment advisors helped me achieve 28% returns last year while managing risk effectively." :
                  currentLang === 'zh' ?
                  "Elite Traders Capital改变了我的投资方法。他们的注册投资顾问帮助我去年实现了28%的回报，同时有效管理风险。" :
                  "Elite Traders Capital hat meinen Investmentansatz transformiert. Ihre registrierten Investmentberater halfen mir, letztes Jahr 28% Rendite zu erzielen."
              },
              {
                name: currentLang === 'en' ? 'Michael Chen' : currentLang === 'zh' ? '陈志明' : 'Michael Schmidt',
                role: currentLang === 'en' ? 'Tech Executive' : currentLang === 'zh' ? '科技高管' : 'Tech-Führungskraft',
                content: currentLang === 'en' ?
                  "The cryptocurrency trading platform is exceptional. Professional tools, institutional security, and the best customer support I've experienced." :
                  currentLang === 'zh' ?
                  "加密货币交易平台非常出色。专业工具、机构级安全性和我体验过的最好的客户支持。" :
                  "Die Kryptowährungs-Handelsplattform ist außergewöhnlich. Professionelle Tools, institutionelle Sicherheit und der beste Kundensupport."
              },
              {
                name: currentLang === 'en' ? 'David Rodriguez' : currentLang === 'zh' ? '李大伟' : 'David Weber',
                role: currentLang === 'en' ? 'Business Owner' : currentLang === 'zh' ? '企业主' : 'Geschäftsinhaber',
                content: currentLang === 'en' ?
                  "Their bitcoin mining operations and investment advisory services have consistently outperformed the market. Highly professional team." :
                  currentLang === 'zh' ?
                  "他们的比特币挖矿业务和投资咨询服务一直跑赢市场。非常专业的团队。" :
                  "Ihre Bitcoin-Mining-Operationen und Investmentberatung haben den Markt konstant übertroffen. Sehr professionelles Team."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <p className="text-white mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-blue-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
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
      `}</style>
    </div>
  );
};

export default OnboardingPage;