import { useState, useEffect } from 'react';
import imgEllipse1 from "figma:asset/75e4acaa2cc144d6abfae176843b981c97439686.png";
import imgGithubMark1 from "figma:asset/f3018b26b7e8d58d254f7494d360a2340fed8789.png";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'chat'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'chat', label: 'Chat' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Profile + Name */}
          <div className="flex items-center gap-3">
            <div className="w-[27px] h-[28px] rounded-full overflow-hidden">
              <img 
                alt="Vitor Emanuel" 
                className="w-full h-full object-cover" 
                src={imgEllipse1} 
              />
            </div>
            <span className="text-[#969da7] tracking-wider">DEV</span>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-white text-sm transition-all duration-300 hover:text-[#FF0000] group"
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#FF0000] transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: GitHub Icon */}
          <div className="hidden md:block">
            <a
              href="https://github.com/vitorvzp"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[30px] h-[30px] transition-transform duration-300 hover:scale-110 hover:brightness-125"
            >
              <img alt="GitHub" className="w-full h-full" src={imgGithubMark1} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-[#FF0000] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#B71C1C]/30">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-[#B71C1C]/20 text-[#FF0000]'
                    : 'text-white hover:bg-[#B71C1C]/10 hover:text-[#FF0000]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/vitoremanuel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#FF0000] transition-colors"
            >
              <img alt="GitHub" className="w-6 h-6" src={imgGithubMark1} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
