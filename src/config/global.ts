// Global configuration for forms, Tawk.to, and other integrations
export const globalConfig = {
  // Site Configuration
  site: {
    name: 'Elite Traders Capital',
    domain: 'elitetraderscapital.com',
    email: 'contact@elitetraderscapital.com',
    phone: '+1-888-ELITE-TC',
    address: '123 Financial District, New York, NY 10005'
  },
  
  // Tawk.to Configuration
  tawkTo: {
    propertyId: 'YOUR_TAWK_TO_PROPERTY_ID', // Replace with your actual Tawk.to property ID
    widgetId: 'YOUR_TAWK_TO_WIDGET_ID', // Replace with your actual Tawk.to widget ID
    enabled: true
  },
  
  // Form Configuration
  forms: {
    contactApiEndpoint: 'https://api.elitetraderscapital.com/contact', // Replace with your form handler
    onboardingApiEndpoint: 'https://api.elitetraderscapital.com/onboarding', // Replace with your onboarding handler
    enabled: true
  },
  
  // SEO Configuration
  seo: {
    defaultTitle: 'Elite Traders Capital - Premier Investment & Cryptocurrency Services',
    defaultDescription: 'Elite registered investment advisors, cryptocurrency trading, bitcoin mining, and online brokerage solutions. Start your elite investment journey today.',
    keywords: [
      'registered investment advisor',
      'crypto',
      'crypto exchange',
      'online investment platforms',
      'cryptocurrency trading',
      'bitcoin mining',
      'financial advisor',
      'investment advisor',
      'online brokerage accounts',
      'crypto trading for beginners'
    ]
  }
};