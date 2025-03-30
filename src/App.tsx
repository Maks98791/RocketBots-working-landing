import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Bot, MessageSquare, Database, ChevronRight, Calendar, Globe2, Mail, Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import { translations } from './translations';
import Home from './pages/Home';
import BookingForm from './pages/BookingForm';
import SolutionDetail from './pages/SolutionDetail';

type Language = 'pl' | 'en';

function App() {
  const [language, setLanguage] = useState<Language>('pl');
  const location = useLocation();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <div className="flex items-center gap-2 bg-gray-800/50 p-2 rounded-lg">
          <Globe2 className="w-4 h-4 text-gray-400" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-transparent text-sm text-gray-300 focus:outline-none cursor-pointer"
          >
            <option value="pl">Polski</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/book" element={<BookingForm language={language} />} />
        <Route path="/solutions/:id" element={<SolutionDetail language={language} />} />
      </Routes>

      {/* Contact Section */}
      <footer className="bg-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">{t.contact.title}</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href="mailto:kontakt@rocketbots.pl" className="text-blue-400 hover:text-blue-300 transition-colors">
                kontakt@rocketbots.pl
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App