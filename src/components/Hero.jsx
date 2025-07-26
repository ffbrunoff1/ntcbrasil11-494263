import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-gray-200/50 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4 leading-tight"
          >
            Construindo o futuro com{' '}
            <span className="gradient-text">solidez e inovação.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-8"
          >
            Transforme seus sonhos em realidade com a NTC Brasil. Soluções
            completas em construção com a confiança e o compromisso que seu
            projeto merece.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-light px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-glow"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-light to-transparent"></div>
    </section>
  );
}
