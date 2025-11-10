import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Flame, Container, FileCode2, Palette, Zap, GitBranch, Database, Brain } from 'lucide-react';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      name: 'Python',
      icon: Code2,
      color: '#3776AB',
    },
    {
      name: 'Flask',
      icon: Flame,
      color: '#000000',
    },
    {
      name: 'Docker',
      icon: Container,
      color: '#2496ED',
    },
    {
      name: 'HTML',
      icon: FileCode2,
      color: '#E34F26',
    },
    {
      name: 'CSS',
      icon: Palette,
      color: '#1572B6',
    },
    {
      name: 'JavaScript',
      icon: Zap,
      color: '#F7DF1E',
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: '#F05032',
    },
    {
      name: 'SQL',
      icon: Database,
      color: '#4479A1',
    },
    {
      name: 'AI/ML',
      icon: Brain,
      color: '#FF0000',
    },
  ];

  return (
    <section id="habilidades" className="relative min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-white mb-16">
            Minhas <span className="text-[#FF0000]">Habilidades</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="group relative bg-black/40 backdrop-blur-md border border-[#B71C1C]/30 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 flex items-center justify-center"
                >
                  <skill.icon className="text-white" size={48} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-white text-center">{skill.name}</h3>
              </div>

              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                }}
              />

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#B71C1C] text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {skill.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#B71C1C]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
