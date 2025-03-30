import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bot, MessageSquare, Database, ArrowLeft, Mail, Phone, Share2, Globe, ExternalLink } from 'lucide-react';
import { translations } from '../translations';

type Language = 'pl' | 'en';

interface SolutionDetailProps {
  language: Language;
}

function SolutionDetail({ language }: SolutionDetailProps) {
  const { id } = useParams();
  const t = translations[language];

  const solutions = {
    'ai-chat-agents': {
      icon: <Bot className="w-12 h-12 text-blue-400" />,
      title: t.solutions.aiChatAgents.title,
      description: t.solutions.aiChatAgents.description,
      features: t.solutions.aiChatAgents.features,
      benefits: t.solutions.aiChatAgents.benefits,
      examples: t.solutions.aiChatAgents.examples,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'lead-generation': {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: t.solutions.leadGeneration.title,
      description: t.solutions.leadGeneration.description,
      features: t.solutions.leadGeneration.features,
      benefits: t.solutions.leadGeneration.benefits,
      examples: t.solutions.leadGeneration.examples,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'crm-integration': {
      icon: <Database className="w-12 h-12 text-green-400" />,
      title: t.solutions.crmIntegration.title,
      description: t.solutions.crmIntegration.description,
      features: t.solutions.crmIntegration.features,
      benefits: t.solutions.crmIntegration.benefits,
      examples: t.solutions.crmIntegration.examples,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'email-campaigns': {
      icon: <Mail className="w-12 h-12 text-yellow-400" />,
      title: t.solutions.emailCampaigns.title,
      description: t.solutions.emailCampaigns.description,
      features: t.solutions.emailCampaigns.features,
      benefits: t.solutions.emailCampaigns.benefits,
      examples: t.solutions.emailCampaigns.examples,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'ai-phone-calls': {
      icon: <Phone className="w-12 h-12 text-red-400" />,
      title: t.solutions.aiPhoneCalls.title,
      description: t.solutions.aiPhoneCalls.description,
      features: t.solutions.aiPhoneCalls.features,
      benefits: t.solutions.aiPhoneCalls.benefits,
      examples: t.solutions.aiPhoneCalls.examples,
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'social-media': {
      icon: <Share2 className="w-12 h-12 text-pink-400" />,
      title: t.solutions.socialMedia.title,
      description: t.solutions.socialMedia.description,
      features: t.solutions.socialMedia.features,
      benefits: t.solutions.socialMedia.benefits,
      examples: t.solutions.socialMedia.examples,
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    },
    'web-pages': {
      icon: <Globe className="w-12 h-12 text-indigo-400" />,
      title: t.solutions.webPages.title,
      description: t.solutions.webPages.description,
      features: t.solutions.webPages.features,
      benefits: t.solutions.webPages.benefits,
      examples: t.solutions.webPages.examples,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
    }
  };

  const solution = solutions[id as keyof typeof solutions];

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t.notFound.title}</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            {t.notFound.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.solutions.back}
        </Link>
        
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img src={solution.image} alt={solution.title} className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex items-center gap-4 mb-4">
              {solution.icon}
              <h1 className="text-4xl font-bold">{solution.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">{solution.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">{t.solutions.featuresTitle}</h2>
            <ul className="space-y-4">
              {solution.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">{t.solutions.benefitsTitle}</h2>
            <ul className="space-y-4">
              {solution.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Example Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solution.examples.map((example: any, index: number) => (
              <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300">
                <img src={example.image} alt={example.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-gray-300 mb-4">{example.description}</p>
                  {example.url && (
                    <a
                      href={example.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {example.buttonText} <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/book"
            className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            {t.solutions.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SolutionDetail;