import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753491223714_0.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Diferenciais', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-light shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-primary text-light px-6 py-3 rounded-lg font-bold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
        >
          Solicitar Orçamento
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-light shadow-lg"
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-secondary hover:text-primary transition-colors duration-300 font-semibold text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-primary text-light px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
