
import React from 'react';
import { Github, Linkedin, Code, Trophy, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abhigna04', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vakada-abhigna-a36278259', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/VakadaAbhigna/', label: 'LeetCode' },
    { icon: Trophy, href: 'https://www.hackerrank.com/profile/22A31A4290', label: 'HackerRank' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-slate-800">
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
