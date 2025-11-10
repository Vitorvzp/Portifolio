import React from 'react';
import { Download } from 'lucide-react';

interface AnimatedButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      // O código do botão foi mantido o mais fiel possível ao fornecido pelo usuário,
      // mas usando a tag <a> para a funcionalidade de download.
      className={`relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden ${className}`}
    >
      {/* O conteúdo do botão (texto e ícone) é colocado dentro do span z-20 */}
      <span className="relative z-20 flex items-center">
        <Download className="w-5 h-5 mr-2" />
        {children}
      </span>

      {/* Efeito de brilho/passagem */}
      <span
        className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
      />

      {/* Bordas Animadas - Mantendo a cor original #D4EDF9 */}
      <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
      />
      <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
      />
      <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
      />
      <span
        className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
      />
    </a>
  );
};
