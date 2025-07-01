import React from 'react';
import { ExternalLink, Github, Film, CreditCard } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Information Website',
      description: 'Developed a movie search web application using the OMDB API to fetch and display movie details based on user input.',
      technologies: ['Python', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Abhigna04/Movie-Information-Website',
      liveUrl: '',
      icon: Film
    },
    {
      title: 'ATM Machine Simulation',
      description: 'Created a console-based ATM simulation allowing users to check balance, deposit, and withdraw funds using a simple menu-driven interface.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Abhigna04/ATM-Machine',
      liveUrl: '',
      icon: CreditCard
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <project.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
