import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { globalConfig } from '../../config/global';

interface FooterProps {
  currentLang: string;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const content = {
    en: {
      company: "InvestCrypto Pro",
      tagline: "Your trusted partner in investment and cryptocurrency services",
      quickLinks: {
        title: "Quick Links",
        links: ["Investment Advisory", "Crypto Trading", "Bitcoin Mining", "Portfolio Management", "Free Consultation"]
      },
      services: {
        title: "Services",
        links: ["Registered Investment Advisor", "Online Brokerage", "Crypto Exchange", "Trading Education", "Financial Planning"]
      },
      resources: {
        title: "Resources",
        links: ["Blog", "Market Analysis", "Trading Guides", "FAQ", "Support Center"]
      },
      contact: {
        title: "Contact Info",
        email: globalConfig.site.email,
        phone: globalConfig.site.phone,
        address: "123 Financial District, New York, NY 10005"
      },
      legal: {
        copyright: "© 2025 InvestCrypto Pro. All rights reserved.",
        links: ["Privacy Policy", "Terms of Service", "Risk Disclosure", "Regulatory Information"]
      },
      social: {
        title: "Follow Us"
      }
    },
    zh: {
      company: "InvestCrypto Pro",
      tagline: "您值得信赖的投资和加密货币服务合作伙伴",
      quickLinks: {
        title: "快速链接",
        links: ["投资咨询", "加密货币交易", "比特币挖矿", "投资组合管理", "免费咨询"]
      },
      services: {
        title: "服务",
        links: ["注册投资顾问", "在线券商", "加密货币交易所", "交易教育", "财务规划"]
      },
      resources: {
        title: "资源",
        links: ["博客", "市场分析", "交易指南", "常见问题", "支持中心"]
      },
      contact: {
        title: "联系信息",
        email: globalConfig.site.email,
        phone: globalConfig.site.phone,
        address: "123 Financial District, New York, NY 10005"
      },
      legal: {
        copyright: "© 2025 InvestCrypto Pro. 版权所有。",
        links: ["隐私政策", "服务条款", "风险披露", "监管信息"]
      },
      social: {
        title: "关注我们"
      }
    },
    de: {
      company: "InvestCrypto Pro",
      tagline: "Ihr vertrauensvoller Partner für Investment- und Kryptowährungs-Services",
      quickLinks: {
        title: "Quick Links",
        links: ["Investmentberatung", "Krypto-Trading", "Bitcoin-Mining", "Portfoliomanagement", "Kostenlose Beratung"]
      },
      services: {
        title: "Services",
        links: ["Registrierter Investmentberater", "Online-Brokerage", "Krypto-Börse", "Trading-Ausbildung", "Finanzplanung"]
      },
      resources: {
        title: "Ressourcen",
        links: ["Blog", "Marktanalyse", "Trading-Leitfäden", "FAQ", "Support-Center"]
      },
      contact: {
        title: "Kontaktinfo",
        email: globalConfig.site.email,
        phone: globalConfig.site.phone,
        address: "123 Financial District, New York, NY 10005"
      },
      legal: {
        copyright: "© 2025 InvestCrypto Pro. Alle Rechte vorbehalten.",
        links: ["Datenschutzrichtlinie", "Nutzungsbedingungen", "Risikohinweis", "Regulatorische Informationen"]
      },
      social: {
        title: "Folgen Sie uns"
      }
    }
  };

  const currentContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">{currentContent.company}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {currentContent.tagline}
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href={`mailto:${currentContent.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {currentContent.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href={`tel:${currentContent.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {currentContent.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">{currentContent.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentContent.quickLinks.title}</h3>
            <ul className="space-y-2">
              {currentContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentContent.services.title}</h3>
            <ul className="space-y-2">
              {currentContent.services.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentContent.resources.title}</h3>
            <ul className="space-y-2">
              {currentContent.resources.links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">{currentContent.social.title}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">
                {currentLang === 'en' ? 'Stay Updated' : 
                 currentLang === 'zh' ? '保持更新' : 
                 'Bleiben Sie informiert'}
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder={currentLang === 'en' ? 'Enter your email' : 
                             currentLang === 'zh' ? '输入您的邮箱' : 
                             'E-Mail eingeben'}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                  {currentLang === 'en' ? 'Subscribe' : 
                   currentLang === 'zh' ? '订阅' : 
                   'Abonnieren'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">{currentContent.legal.copyright}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              {currentContent.legal.links.map((link, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400 text-xs leading-relaxed">
              {currentLang === 'en' ? 
                "Investment involves risk including potential loss of principal. Past performance does not guarantee future results. Cryptocurrency investments are highly volatile and speculative. This is not investment advice. Please consult with a qualified financial advisor before making investment decisions." :
                currentLang === 'zh' ?
                "投资涉及风险，包括本金的潜在损失。过往表现不能保证未来结果。加密货币投资具有高度波动性和投机性。这不是投资建议。在做出投资决定之前，请咨询合格的财务顾问。" :
                "Investitionen beinhalten Risiken einschließlich des potenziellen Verlusts des Kapitals. Die Wertentwicklung der Vergangenheit ist kein Indikator für zukünftige Ergebnisse. Kryptowährungs-Investitionen sind hochvolatil und spekulativ. Dies ist keine Anlageberatung. Bitte konsultieren Sie einen qualifizierten Finanzberater vor Investitionsentscheidungen."
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;