import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Vitor Emanuel';

  useEffect(() => {
    // Ensure page is at top during loading
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          document.body.style.overflow = 'unset';
          onComplete();
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#B71C1C]/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#9E1B1B]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Typing Text */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-white mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayText}
          <motion.span
            className="text-[#FF0000]"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-[#B71C1C]/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B71C1C] via-[#FF0000] to-[#B71C1C]"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
