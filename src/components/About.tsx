
import React from 'react';
import { GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Career Objective</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Looking for a challenging role where I can utilize my skills and learn new ones to contribute to the company's growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="font-semibold text-cyan-400">B.Tech - AI & Machine Learning</h4>
                    <p className="text-slate-300">Pragati Engineering College</p>
                    <p className="text-sm text-slate-400">CGPA: 8.4 (Expected 2026)</p>
                  </div>
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-400">Intermediate - MPC</h4>
                    <p className="text-slate-300">Tirumala Junior College</p>
                    <p className="text-sm text-slate-400">CGPA: 9.6 (2020–2022)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
