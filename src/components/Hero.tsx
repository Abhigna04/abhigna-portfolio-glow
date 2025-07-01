
import React from 'react';
import { Github, Linkedin, Code, Trophy } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Abhigna04', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vakada-abhigna-a36278259', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/VakadaAbhigna/', label: 'LeetCode' },
    { icon: Trophy, href: 'https://www.hackerrank.com/profile/22A31A4290', label: 'HackerRank' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">VA</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Vakada Abhigna
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 mb-6 animate-fade-in animation-delay-200">
              Developer
            </p>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
              I am a passionate developer with strong problem-solving abilities and a drive for continuous learning. 
              I love transforming innovative ideas into impactful, real-world applications through code.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8 animate-fade-in animation-delay-600">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
          
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-800"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
