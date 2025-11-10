import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import CV from '../assets/CV.pdf';
import { AnimatedButton } from './AnimatedButton';
import imgEllipse1 from "figma:asset/75e4acaa2cc144d6abfae176843b981c97439686.png";
import { Code, Database, Cpu, Bot } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const interests = [
    { icon: Code, label: 'Machine Learning' },
    { icon: Cpu, label: 'Redes Neurais' },
    { icon: Bot, label: 'Automação de Bots' },
    { icon: Database, label: 'APIs e Banco de Dados' },
  ];

  return (
    <section id="sobre" className="relative min-h-screen flex items-center justify-center px-4 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-white mb-16">
            Sobre <span className="text-[#FF0000]">Mim</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#FF0000] shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                <img 
                  alt="Vitor Emanuel" 
                  className="w-full h-full object-cover" 
                  src={imgEllipse1} 
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF0000]/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Bio and Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-md border border-[#B71C1C]/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(183,28,28,0.2)]">
              <p className="text-[#CFCFCF] mb-6 leading-relaxed">
                Sou um programador apaixonado por tecnologia, dados e IA. Estudo programação há mais de 7 anos e adoro criar soluções práticas e visuais.
              </p>
              <p className="text-[#CFCFCF] mb-8 leading-relaxed">
                Com 15 anos e baseado em Maceió, Alagoas, Brasil 🇧🇷, tenho dedicado minha vida ao aprendizado contínuo em Python, Data Science e Inteligência Artificial.
              </p>

              <div className="space-y-4">
                <div className="mb-8">
                  <AnimatedButton href={CV} download="Vitor_Emanuel_CV.pdf">
                    Download CV
                  </AnimatedButton>
                </div>
                <h3 className="text-white mb-4">Áreas de Interesse:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 bg-[#B71C1C]/10 border border-[#B71C1C]/20 rounded-lg p-3 transition-all duration-300 hover:bg-[#B71C1C]/20 hover:border-[#FF0000]/50 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]"
                    >
                      <interest.icon className="text-[#FF0000]" size={20} />
                      <span className="text-[#CFCFCF] text-sm">{interest.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
