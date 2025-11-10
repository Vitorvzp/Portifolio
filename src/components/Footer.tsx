import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSGLPqRfGtZVTpFkcdtJZZbQGRtRBJLrXWGdrXBVhRMTHmQZNSdgZlLMpFSNlGSFVsjGnjvd',
      color: '#B71C1C',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/vitorvzp',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vitorvzp',
      color: '#CFCFCF',
    },
  ];

  return (
    <footer className="relative bg-black/60 border-t border-[#B71C1C]/30 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-[#CFCFCF]"
          >
            <div className="w-10 h-10 bg-[#B71C1C]/20 border border-[#B71C1C]/50 rounded-lg flex items-center justify-center">
              <Mail className="text-[#FF0000]" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#CFCFCF]/70">Email</p>
              <p className="text-sm">Vitorvzp722@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 text-[#CFCFCF]"
          >
            <div className="w-10 h-10 bg-[#B71C1C]/20 border border-[#B71C1C]/50 rounded-lg flex items-center justify-center">
              <Phone className="text-[#FF0000]" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#CFCFCF]/70">Telefone</p>
              <p className="text-sm">+55 82 98756-5699</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 text-[#CFCFCF]"
          >
            <div className="w-10 h-10 bg-[#B71C1C]/20 border border-[#B71C1C]/50 rounded-lg flex items-center justify-center">
              <MapPin className="text-[#FF0000]" size={20} />
            </div>
            <div>
              <p className="text-xs text-[#CFCFCF]/70">Localização</p>
              <p className="text-sm">Maceió, AL 🇧🇷</p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 bg-[#B71C1C]/20 border border-[#B71C1C]/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
              style={{
                '--hover-glow': social.color,
              } as React.CSSProperties}
            >
              <social.icon className="text-white" size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#B71C1C]/50 to-transparent mb-8" />

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-white">
            ✨ Obrigado por visitar meu portfólio! ✨
          </p>
          <motion.p
            className="text-[#FF0000]"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(255, 0, 0, 0.5)',
                '0 0 20px rgba(255, 0, 0, 0.8)',
                '0 0 10px rgba(255, 0, 0, 0.5)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ansioso Para Primeira Vaga! 🔥
          </motion.p>
          <p className="text-xs text-[#CFCFCF]/50">
            © 2025 Vitor Emanuel Oliveira Rodrigues. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF0000]/20 border border-[#FF0000]/50 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000]/40 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="text-white" size={24} />
        </motion.button>
      )}
    </footer>
  );
}
