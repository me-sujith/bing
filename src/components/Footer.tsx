import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Footer: React.FC = () => {
  const { personal } = usePortfolioData();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {new Date().getFullYear()} {personal?.name || 'Portfolio'}. Made with{' '}
              <Heart size={16} className="text-red-500" />
              {' '}and React
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
