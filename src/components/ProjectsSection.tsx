'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Componente com fallback para URL
function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        // Fallback para imagem quebrada
        e.currentTarget.src = 'https://via.placeholder.com/400x300/1a1a1a/ff0000?text=Imagem+N%C3%A3o+Encontrada';
      }}
      style={{ background: '#1a1a1a' }} // fundo enquanto carrega
    />
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      name: 'Portfólio',
      description: 'Site pessoal moderno com tema dark red, animações e chat com IA integrado.',
      image: 'https://i.pinimg.com/736x/6c/bb/41/6cbb412f3d19bc91edb5c3a93e014263.jpg', // SUA IMAGEM AQUI
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Vitorvzp/Portifolio',
    },
    {
      name: 'Discord Bot',
      description: 'Bot automatizado para Discord com funcionalidades de moderação e entretenimento.',
      image: 'https://i.pinimg.com/736x/39/34/82/3934827ca354cc7ac43c65bc9c908866.jpg',
      tech: ['Python', 'Discord.py', 'SQLite'],
      github: 'https://github.com/Vitorvzp/DiscordBot',
    },
    {
      name: 'Database API',
      description: 'API RESTful para gerenciamento de dados com autenticação e validação.',
      image: 'https://i.pinimg.com/736x/5f/ca/75/5fca75ab3305ccb95fd57e0f18196494.jpg',
      tech: ['Flask', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Vitorvzp/API',
    },
  ];

  return (
    <section id="projetos" className="relative min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-white mb-16">
            Meus <span className="text-[#FF0000]">Projetos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative bg-black/40 backdrop-blur-md border border-[#B71C1C]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-[0_0_40px_rgba(255,0,0,0.3)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#B71C1C]/20 to-[#0A0A0A]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-white mb-3">{project.name}</h3>
                <p className="text-[#CFCFCF] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#B71C1C]/20 border border-[#B71C1C]/30 rounded-full text-xs text-[#CFCFCF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#B71C1C]/20 border border-[#B71C1C]/50 rounded-lg text-white text-sm transition-all duration-300 hover:bg-[#B71C1C]/40 hover:shadow-[0_0_15px_rgba(183,28,28,0.5)]"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white text-sm transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/0 via-[#FF0000]/0 to-[#FF0000]/0 group-hover:from-[#FF0000]/10 group-hover:via-[#FF0000]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
