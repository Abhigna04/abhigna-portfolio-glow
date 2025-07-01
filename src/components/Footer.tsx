
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pt-8">
            <p className="text-slate-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Vakada Abhigna. Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>and React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
