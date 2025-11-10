import { motion } from 'motion/react';
import React from 'react';

interface GlassmorphismButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const GlassmorphismButton: React.FC<GlassmorphismButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      className="inline-block"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <a
        {...props}
        className={`inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden group ${className}`}
      >
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-[#B71C1C]/30 rounded-full transition-all duration-300 group-hover:bg-black/60 group-hover:border-[#FF0000]/50 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center">{children}</span>
      </a>
    </motion.div>
  );
};
