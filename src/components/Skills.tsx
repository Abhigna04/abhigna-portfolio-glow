
import React from 'react';
import { Code, Users, Globe, Clock } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: Code,
      skills: ['Python', 'HTML', 'CSS', 'SQL'],
      color: 'cyan'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Communication', 'Listening', 'Teamwork', 'Time Management'],
      color: 'purple'
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: ['English', 'Telugu'],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'border-cyan-400/50 hover:border-cyan-400 text-cyan-400';
      case 'purple':
        return 'border-purple-400/50 hover:border-purple-400 text-purple-400';
      case 'pink':
        return 'border-pink-400/50 hover:border-pink-400 text-pink-400';
      default:
        return 'border-slate-400/50 hover:border-slate-400 text-slate-400';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-slate-900/50 border ${getColorClasses(category.color)} transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-center mb-6">
                  <category.icon className={`w-8 h-8 mr-3 ${category.color === 'cyan' ? 'text-cyan-400' : category.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
