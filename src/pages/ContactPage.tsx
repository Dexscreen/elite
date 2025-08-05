import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';
import ContactForm from '../components/Forms/ContactForm';

interface ContactPageProps {
  currentLang: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ currentLang }) => {
  const content = {
    en: {
      title: "Get in Touch with Our Investment Experts",
      subtitle: "Ready to start your investment journey? Our registered investment advisors are here to help you achieve your financial goals.",
      contactInfo: {
        title: "Contact Information",
        email: "contact@elitetraderscapital.com",
        phone: "+1-888-ELITE-TC",
        address: "123 Financial District, New York, NY 10005",
        hours: "Monday - Friday: 8:00 AM - 6:00 PM EST"
      },
      services: {
        title: "How We Can Help",
        items: [
          {
            icon: Users,
            title: "Investment Advisory",
            description: "Personalized investment strategies from SEC-registered advisors"
          },
          {
            icon: MessageSquare,
            title: "Cryptocurrency Trading",
            description: "Professional crypto trading platforms and guidance"
          },
          {
            icon: Phone,
            title: "Portfolio Management",
            description: "Comprehensive portfolio management and optimization"
          }
        ]
      }
    },
    zh: {
      title: "联系我们的投资专家",
      subtitle: "准备开始您的投资之旅？我们的注册投资顾问随时为您提供帮助，助您实现财务目标。",
      contactInfo: {
        title: "联系信息",
        email: "contact@elitetraderscapital.com",
        phone: "+1-888-ELITE-TC",
        address: "123 Financial District, New York, NY 10005",
        hours: "周一至周五：东部时间上午8:00 - 下午6:00"
      },
      services: {
        title: "我们如何帮助您",
        items: [
          {
            icon: Users,
            title: "投资咨询",
            description: "来自SEC注册顾问的个性化投资策略"
          },
          {
            icon: MessageSquare,
            title: "加密货币交易",
            description: "专业的加密货币交易平台和指导"
          },
          {
            icon: Phone,
            title: "投资组合管理",
            description: "全面的投资组合管理和优化"
          }
        ]
      }
    },
    de: {
      title: "Kontaktieren Sie unsere Investmentexperten",
      subtitle: "Bereit, Ihre Investmentreise zu beginnen? Unsere registrierten Investmentberater helfen Ihnen dabei, Ihre finanziellen Ziele zu erreichen.",
      contactInfo: {
        title: "Kontaktinformationen",
        email: "contact@elitetraderscapital.com",
        phone: "+1-888-ELITE-TC",
        address: "123 Financial District, New York, NY 10005",
        hours: "Montag - Freitag: 8:00 - 18:00 EST"
      },
      services: {
        title: "Wie wir helfen können",
        items: [
          {
            icon: Users,
            title: "Investmentberatung",
            description: "Personalisierte Investmentstrategien von SEC-registrierten Beratern"
          },
          {
            icon: MessageSquare,
            title: "Kryptowährungshandel",
            description: "Professionelle Krypto-Handelsplattformen und Beratung"
          },
          {
            icon: Phone,
            title: "Portfoliomanagement",
            description: "Umfassendes Portfoliomanagement und -optimierung"
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {currentContent.contactInfo.title}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <a href={`mailto:${currentContent.contactInfo.email}`} className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        {currentContent.contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href={`tel:${currentContent.contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        {currentContent.contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">{currentContent.contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">{currentContent.contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {currentContent.services.title}
                </h2>
                
                <div className="space-y-6">
                  {currentContent.services.items.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm 
                title={currentLang === 'en' ? "Send Us a Message" : 
                       currentLang === 'zh' ? "给我们留言" : 
                       "Senden Sie uns eine Nachricht"}
                subtitle={currentLang === 'en' ? "Fill out the form below and we'll get back to you within 24 hours" :
                         currentLang === 'zh' ? "填写下面的表格，我们将在24小时内回复您" :
                         "Füllen Sie das untenstehende Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLang === 'en' ? 'Visit Our Office' :
               currentLang === 'zh' ? '访问我们的办公室' :
               'Besuchen Sie unser Büro'}
            </h2>
            <p className="text-gray-600">
              {currentLang === 'en' ? 'Located in the heart of New York\'s Financial District' :
               currentLang === 'zh' ? '位于纽约金融区的中心' :
               'Im Herzen des Financial District von New York gelegen'}
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500 mt-2">123 Financial District, New York, NY 10005</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentLang === 'en' ? 'Frequently Asked Questions' :
               currentLang === 'zh' ? '常见问题' :
               'Häufig gestellte Fragen'}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: currentLang === 'en' ? 'How do I get started with Elite Traders Capital?' :
                         currentLang === 'zh' ? '如何开始使用Elite Traders Capital？' :
                         'Wie fange ich mit Elite Traders Capital an?',
                answer: currentLang === 'en' ? 'Simply contact us for a free consultation. We\'ll discuss your investment goals and create a personalized strategy.' :
                       currentLang === 'zh' ? '只需联系我们进行免费咨询。我们将讨论您的投资目标并制定个性化策略。' :
                       'Kontaktieren Sie uns einfach für eine kostenlose Beratung. Wir besprechen Ihre Investmentziele und erstellen eine personalisierte Strategie.'
              },
              {
                question: currentLang === 'en' ? 'What is the minimum investment amount?' :
                         currentLang === 'zh' ? '最低投资金额是多少？' :
                         'Wie hoch ist der Mindestinvestitionsbetrag?',
                answer: currentLang === 'en' ? 'Our minimum investment varies by service. Contact us to discuss options that fit your budget and goals.' :
                       currentLang === 'zh' ? '我们的最低投资因服务而异。请联系我们讨论适合您预算和目标的选项。' :
                       'Unsere Mindestinvestition variiert je nach Service. Kontaktieren Sie uns, um Optionen zu besprechen, die zu Ihrem Budget und Ihren Zielen passen.'
              },
              {
                question: currentLang === 'en' ? 'Are you SEC registered?' :
                         currentLang === 'zh' ? '您是否已在SEC注册？' :
                         'Sind Sie bei der SEC registriert?',
                answer: currentLang === 'en' ? 'Yes, we are fully SEC registered and regulated, ensuring the highest standards of fiduciary responsibility.' :
                       currentLang === 'zh' ? '是的，我们完全在SEC注册并受监管，确保最高标准的受托责任。' :
                       'Ja, wir sind vollständig bei der SEC registriert und reguliert, was die höchsten Standards der Treuhandverantwortung gewährleistet.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
      `}</style>
    </div>
  );
};

export default ContactPage;