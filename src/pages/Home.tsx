import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, MessageSquare, Database, ChevronRight, Calendar, Mail, Phone, Share2, Globe, Star } from 'lucide-react';
import { translations } from '../translations';

type Language = 'pl' | 'en';

interface HomeProps {
  language: Language;
}

function Home({ language }: HomeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 'ai-chat-agents',
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: t.solutions.aiChatAgents.title,
      description: t.solutions.aiChatAgents.description
    },
    {
      id: 'lead-generation',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      title: t.solutions.leadGeneration.title,
      description: t.solutions.leadGeneration.description
    },
    {
      id: 'crm-integration',
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: t.solutions.crmIntegration.title,
      description: t.solutions.crmIntegration.description
    },
    {
      id: 'email-campaigns',
      icon: <Mail className="w-8 h-8 text-yellow-400" />,
      title: t.solutions.emailCampaigns.title,
      description: t.solutions.emailCampaigns.description
    },
    {
      id: 'ai-phone-calls',
      icon: <Phone className="w-8 h-8 text-red-400" />,
      title: t.solutions.aiPhoneCalls.title,
      description: t.solutions.aiPhoneCalls.description
    },
    {
      id: 'social-media',
      icon: <Share2 className="w-8 h-8 text-pink-400" />,
      title: t.solutions.socialMedia.title,
      description: t.solutions.socialMedia.description
    },
    {
      id: 'web-pages',
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      title: t.solutions.webPages.title,
      description: t.solutions.webPages.description
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.hero.title}
            </h1>
            <p className="text-2xl text-gray-300 max-w-2xl">
              {t.hero.description}
            </p>
            <Link
              to="/book"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 items-center gap-2"
            >
              {t.hero.cta} <Calendar className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">{t.solutions.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={`/solutions/${solution.id}`}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{t.reviews.title}</h2>
            <div className="inline-flex items-center gap-4 bg-gray-800/50 px-6 py-3 rounded-full">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg">
                <span className="font-semibold">4.8</span> {t.reviews.outOf} 5
              </span>
              <span className="text-gray-400">
                (128 {t.reviews.totalReviews})
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.reviews.reviews.map((review, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{review.author}</div>
                    <div className="text-gray-400 text-sm">{review.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://g.co/kgs/nr3Acwy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              {t.reviews.viewMore} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link
            to="/book"
            className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 items-center gap-2"
          >
            {t.cta.button} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;