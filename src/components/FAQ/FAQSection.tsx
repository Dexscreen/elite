import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  currentLang: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ currentLang }) => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Get answers to common questions about our investment and cryptocurrency services",
      categories: [
        {
          title: "Investment Advisory",
          faqs: [
            {
              question: "What is a registered investment advisor and why do I need one?",
              answer: "A registered investment advisor (RIA) is a professional who provides investment advice and is regulated by the SEC or state regulators. They have a fiduciary duty to act in your best interests. You need an RIA if you want personalized investment strategies, professional portfolio management, and expert guidance on complex financial decisions."
            },
            {
              question: "How do I choose the right financial advisor for my needs?",
              answer: "Look for advisors with proper credentials (CFP, CFA, CRC), fee transparency, a fiduciary standard, and experience in your specific financial situation. Ask about their investment philosophy, client communication style, and minimum investment requirements. Always verify their registration and check for any disciplinary actions."
            },
            {
              question: "What are the typical fees for investment advisory services?",
              answer: "Investment advisor fees typically range from 0.5% to 2% of assets under management annually. Some advisors charge hourly rates ($150-$400/hour) or flat fees for specific services. Our fee structure is transparent and competitive, with no hidden charges. We offer different service levels to match various investment amounts and needs."
            }
          ]
        },
        {
          title: "Cryptocurrency Trading",
          faqs: [
            {
              question: "How do I start trading cryptocurrency as a beginner?",
              answer: "Start by educating yourself about blockchain technology and different cryptocurrencies. Choose a reputable exchange, complete identity verification, and start with small amounts. Learn about wallet security, understand market volatility, and never invest more than you can afford to lose. Consider our beginner-friendly trading courses and guided onboarding process."
            },
            {
              question: "Which online brokerage accounts are best for crypto trading?",
              answer: "The best platforms combine security, low fees, user-friendly interfaces, and regulatory compliance. Look for exchanges with insurance coverage, cold storage for funds, advanced trading tools, and 24/7 customer support. We partner with top-rated platforms that meet institutional security standards while remaining accessible to retail investors."
            },
            {
              question: "What are crypto index funds and Bitcoin ETFs?",
              answer: "Crypto index funds diversify your investment across multiple cryptocurrencies, reducing risk compared to individual coin purchases. Bitcoin ETFs trade on traditional stock exchanges, making crypto accessible through regular brokerage accounts. Both offer professional management and regulatory oversight, making them suitable for conservative investors wanting crypto exposure."
            }
          ]
        },
        {
          title: "Crypto Mining",
          faqs: [
            {
              question: "Is Bitcoin mining still profitable in 2025?",
              answer: "Bitcoin mining profitability depends on electricity costs, hardware efficiency, Bitcoin price, and network difficulty. While competition has increased, mining remains profitable with the right setup and low electricity costs. Our mining solutions include profitability analysis, equipment sourcing, and ongoing optimization to maximize returns."
            },
            {
              question: "What equipment do I need for cryptocurrency mining?",
              answer: "Modern mining requires ASIC miners for Bitcoin or GPU rigs for altcoins. You'll also need reliable internet, cooling systems, and access to cheap electricity. We provide complete mining setups including hardware selection, installation, monitoring software, and maintenance services to ensure optimal performance."
            },
            {
              question: "How much can I earn from crypto mining?",
              answer: "Mining earnings vary based on cryptocurrency prices, network difficulty, electricity costs, and equipment efficiency. Typical returns range from 10-30% annually after expenses, but can be higher or lower depending on market conditions. We provide detailed profitability calculators and regular performance reports for our mining clients."
            }
          ]
        }
      ]
    },
    zh: {
      title: "常见问题",
      subtitle: "获取有关我们投资和加密货币服务的常见问题答案",
      categories: [
        {
          title: "投资咨询",
          faqs: [
            {
              question: "什么是注册投资顾问，为什么我需要一个？",
              answer: "注册投资顾问（RIA）是提供投资建议并受SEC或州监管机构监管的专业人士。他们有受托责任为您的最佳利益行事。如果您想要个性化投资策略、专业投资组合管理和复杂财务决策的专家指导，您需要一个RIA。"
            },
            {
              question: "如何选择适合我需求的财务顾问？",
              answer: "寻找具有适当资格认证（CFP、CFA、CRC）、费用透明、受托标准和在您特定财务状况方面有经验的顾问。询问他们的投资理念、客户沟通风格和最低投资要求。始终验证他们的注册并检查任何纪律处分。"
            }
          ]
        },
        {
          title: "加密货币交易",
          faqs: [
            {
              question: "作为初学者如何开始交易加密货币？",
              answer: "首先了解区块链技术和不同的加密货币。选择信誉良好的交易所，完成身份验证，从小额开始。了解钱包安全，理解市场波动性，永远不要投资超过您能承受的损失。考虑我们的初学者友好交易课程和引导入门流程。"
            }
          ]
        }
      ]
    },
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Erhalten Sie Antworten auf häufige Fragen zu unseren Investment- und Kryptowährungs-Services",
      categories: [
        {
          title: "Investmentberatung",
          faqs: [
            {
              question: "Was ist ein registrierter Investmentberater und warum brauche ich einen?",
              answer: "Ein registrierter Investmentberater (RIA) ist ein Fachmann, der Anlageberatung anbietet und von der SEC oder staatlichen Regulierungsbehörden reguliert wird. Sie haben eine treuhänderische Pflicht, in Ihrem besten Interesse zu handeln."
            }
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {currentContent.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={faqIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg p-2 -m-2"
                      >
                        <h4 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h4>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="mt-4 prose prose-blue max-w-none">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {currentLang === 'en' ? "Still have questions?" : 
             currentLang === 'zh' ? "还有疑问？" : 
             "Haben Sie noch Fragen?"}
          </h3>
          <p className="text-gray-600 mb-6">
            {currentLang === 'en' ? "Our team of experts is here to help. Get personalized answers to your investment questions." :
             currentLang === 'zh' ? "我们的专家团队随时为您提供帮助。获得投资问题的个性化答案。" :
             "Unser Expertenteam ist hier, um zu helfen. Erhalten Sie personalisierte Antworten auf Ihre Investmentfragen."}
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            {currentLang === 'en' ? "Contact Our Experts" :
             currentLang === 'zh' ? "联系我们的专家" :
             "Kontaktieren Sie unsere Experten"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;