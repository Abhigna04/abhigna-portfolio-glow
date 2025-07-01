
import React from 'react';
import { Award, Cloud, BarChart, Database } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Salesforce AI Associate Certification',
      issuer: 'Salesforce',
      icon: Award,
      color: 'cyan'
    },
    {
      title: 'Google Cloud Career Launchpad – Cloud Engineer',
      issuer: 'Google Cloud',
      icon: Cloud,
      color: 'purple'
    },
    {
      title: 'Accenture Data Analytics and Visualization',
      issuer: 'Accenture',
      icon: BarChart,
      color: 'pink'
    },
    {
      title: 'SQL and Relational Databases',
      issuer: 'IBM',
      icon: Database,
      color: 'cyan'
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
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl bg-slate-900/50 border ${getColorClasses(cert.color)} transition-all duration-300 hover:transform hover:scale-105 group`}
              >
                <div className="flex items-start space-x-4">
                  <cert.icon className={`w-8 h-8 mt-1 ${cert.color === 'cyan' ? 'text-cyan-400' : cert.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
