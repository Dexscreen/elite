import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Globe, Zap, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../components/Forms/ContactForm';

interface ServicesPageProps {
  currentLang: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Professional Investment Services",
      subtitle: "Comprehensive financial solutions designed for sophisticated investors and institutions",
      services: [
        {
          icon: TrendingUp,
          title: "Registered Investment Advisor",
          description: "SEC-registered financial advisors providing personalized investment strategies, portfolio management, and wealth planning for high-net-worth individuals and institutions.",
          features: [
            "Fiduciary responsibility and transparency",
            "Personalized investment strategies",
            "Portfolio management and rebalancing",
            "Tax-efficient investment planning",
            "Estate and retirement planning",
            "Risk assessment and management"
          ],
          link: "/investment-advisor",
          price: "Starting at 0.75% AUM"
        },
        {
          icon: Globe,
          title: "Cryptocurrency Trading Platform",
          description: "Advanced crypto exchange with institutional-grade security, deep liquidity, and professional trading tools for bitcoin and altcoin trading.",
          features: [
            "Institutional-grade security measures",
            "Advanced trading tools and analytics",
            "Deep liquidity and tight spreads",
            "24/7 trading and support",
            "Multi-currency support",
            "API access for algorithmic trading"
          ],
          link: "/crypto-trading",
          price: "0.1% - 0.5% trading fees"
        },
        {
          icon: Zap,
          title: "Bitcoin Mining Operations",
          description: "Professional cryptocurrency mining services with state-of-the-art hardware, optimized mining pools, and maximum profitability strategies.",
          features: [
            "Latest ASIC mining hardware",
            "Optimized mining pool selection",
            "Professional facility management",
            "Real-time monitoring and reporting",
            "Maintenance and support services",
            "Profit optimization strategies"
          ],
          link: "/bitcoin-mining",
          price: "Custom pricing available"
        },
        {
          icon: Shield,
          title: "Online Brokerage Accounts",
          description: "Premium online investment platforms with access to stocks, bonds, ETFs, and exclusive crypto index funds with competitive trading fees.",
          features: [
            "Commission-free stock trading",
            "Access to global markets",
            "Advanced research and analysis",
            "Portfolio management tools",
            "Retirement account options",
            "Professional advisory services"
          ],
          link: "/online-brokerage",
          price: "No account minimums"
        }
      ],
      whyChooseUs: {
        title: "Why Choose Elite Traders Capital?",
        subtitle: "We combine decades of investment expertise with cutting-edge technology",
        reasons: [
          {
            icon: Shield,
            title: "SEC Registered & Regulated",
            description: "Fully compliant with all federal and state regulations, providing you with maximum protection and transparency."
          },
          {
            icon: Users,
            title: "Experienced Team",
            description: "Our team of CFAs, CFPs, and investment professionals have over 100 years of combined experience."
          },
          {
            icon: BarChart3,
            title: "Proven Track Record",
            description: "Consistent outperformance with average client portfolio returns of 12-18% annually over the past decade."
          }
        ]
      }
    },
    zh: {
      title: "专业投资服务",
      subtitle: "为精明投资者和机构设计的综合金融解决方案",
      services: [
        {
          icon: TrendingUp,
          title: "注册投资顾问",
          description: "SEC注册的财务顾问，为高净值个人和机构提供个性化投资策略、投资组合管理和财富规划。",
          features: [
            "受托责任和透明度",
            "个性化投资策略",
            "投资组合管理和再平衡",
            "税收优化投资规划",
            "遗产和退休规划",
            "风险评估和管理"
          ],
          link: "/investment-advisor",
          price: "管理费从0.75%起"
        },
        {
          icon: Globe,
          title: "加密货币交易平台",
          description: "具有机构级安全性、深度流动性和专业交易工具的先进加密货币交易所，用于比特币和山寨币交易。",
          features: [
            "机构级安全措施",
            "先进的交易工具和分析",
            "深度流动性和紧密价差",
            "24/7交易和支持",
            "多币种支持",
            "算法交易API访问"
          ],
          link: "/crypto-trading",
          price: "0.1% - 0.5% 交易费"
        },
        {
          icon: Zap,
          title: "比特币挖矿业务",
          description: "专业的加密货币挖矿服务，配备最先进的硬件、优化的矿池和最大盈利策略。",
          features: [
            "最新ASIC挖矿硬件",
            "优化矿池选择",
            "专业设施管理",
            "实时监控和报告",
            "维护和支持服务",
            "利润优化策略"
          ],
          link: "/bitcoin-mining",
          price: "提供定制定价"
        },
        {
          icon: Shield,
          title: "在线券商账户",
          description: "优质在线投资平台，可访问股票、债券、ETF和独家加密货币指数基金，交易费用具有竞争力。",
          features: [
            "免佣金股票交易",
            "全球市场准入",
            "先进的研究和分析",
            "投资组合管理工具",
            "退休账户选项",
            "专业咨询服务"
          ],
          link: "/online-brokerage",
          price: "无账户最低要求"
        }
      ],
      whyChooseUs: {
        title: "为什么选择Elite Traders Capital？",
        subtitle: "我们将数十年的投资专业知识与尖端技术相结合",
        reasons: [
          {
            icon: Shield,
            title: "SEC注册和监管",
            description: "完全符合所有联邦和州法规，为您提供最大的保护和透明度。"
          },
          {
            icon: Users,
            title: "经验丰富的团队",
            description: "我们的CFA、CFP和投资专业人士团队拥有超过100年的综合经验。"
          },
          {
            icon: BarChart3,
            title: "经过验证的业绩记录",
            description: "持续跑赢市场，过去十年客户投资组合平均年回报率为12-18%。"
          }
        ]
      }
    },
    de: {
      title: "Professionelle Investment-Services",
      subtitle: "Umfassende Finanzlösungen für anspruchsvolle Investoren und Institutionen",
      services: [
        {
          icon: TrendingUp,
          title: "Registrierter Investmentberater",
          description: "SEC-registrierte Finanzberater bieten personalisierte Investmentstrategien, Portfoliomanagement und Vermögensplanung für vermögende Privatpersonen und Institutionen.",
          features: [
            "Treuhandverantwortung und Transparenz",
            "Personalisierte Investmentstrategien",
            "Portfoliomanagement und Neugewichtung",
            "Steuereffiziente Investmentplanung",
            "Nachlass- und Ruhestandsplanung",
            "Risikobewertung und -management"
          ],
          link: "/investment-advisor",
          price: "Ab 0,75% AUM"
        }
      ],
      whyChooseUs: {
        title: "Warum Elite Traders Capital wählen?",
        subtitle: "Wir kombinieren jahrzehntelange Investmenterfahrung mit modernster Technologie",
        reasons: [
          {
            icon: Shield,
            title: "SEC-registriert und reguliert",
            description: "Vollständig konform mit allen Bundes- und Landesvorschriften, bietet Ihnen maximalen Schutz und Transparenz."
          }
        ]
      }
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
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-blue-200">Satisfied Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {currentContent.services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-blue-600 font-semibold">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentContent.whyChooseUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.whyChooseUs.reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentLang === 'en' ? 'Our Process' :
               currentLang === 'zh' ? '我们的流程' :
               'Unser Prozess'}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLang === 'en' ? 'Simple, transparent, and designed for your success' :
               currentLang === 'zh' ? '简单、透明，专为您的成功而设计' :
               'Einfach, transparent und für Ihren Erfolg konzipiert'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: currentLang === 'en' ? 'Consultation' : currentLang === 'zh' ? '咨询' : 'Beratung',
                description: currentLang === 'en' ? 'Free initial consultation to understand your goals' : 
                           currentLang === 'zh' ? '免费初步咨询，了解您的目标' : 
                           'Kostenlose Erstberatung zum Verständnis Ihrer Ziele'
              },
              {
                step: "02", 
                title: currentLang === 'en' ? 'Strategy' : currentLang === 'zh' ? '策略' : 'Strategie',
                description: currentLang === 'en' ? 'Develop customized investment strategy' :
                           currentLang === 'zh' ? '制定定制投资策略' :
                           'Entwicklung einer maßgeschneiderten Investmentstrategie'
              },
              {
                step: "03",
                title: currentLang === 'en' ? 'Implementation' : currentLang === 'zh' ? '实施' : 'Umsetzung', 
                description: currentLang === 'en' ? 'Execute your investment plan with precision' :
                           currentLang === 'zh' ? '精确执行您的投资计划' :
                           'Präzise Umsetzung Ihres Investmentplans'
              },
              {
                step: "04",
                title: currentLang === 'en' ? 'Monitoring' : currentLang === 'zh' ? '监控' : 'Überwachung',
                description: currentLang === 'en' ? 'Ongoing monitoring and optimization' :
                           currentLang === 'zh' ? '持续监控和优化' :
                           'Kontinuierliche Überwachung und Optimierung'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title={currentLang === 'en' ? "Ready to Get Started?" : 
                   currentLang === 'zh' ? "准备开始了吗？" : 
                   "Bereit zu starten?"}
            subtitle={currentLang === 'en' ? "Contact our investment experts for a personalized consultation" :
                     currentLang === 'zh' ? "联系我们的投资专家进行个性化咨询" :
                     "Kontaktieren Sie unsere Investmentexperten für eine persönliche Beratung"}
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

export default ServicesPage;