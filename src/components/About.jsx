import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    'Compromisso com prazos e orçamentos.',
    'Equipe qualificada e experiente.',
    'Uso de materiais de alta qualidade.',
    'Inovação em cada etapa do projeto.',
  ];

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 h-4/5 border-4 border-white/50 rounded-lg transform rotate-3"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-4xl font-bold text-center p-8">
                Mais de 10 anos de experiência
              </h3>
            </div>
          </motion.div>
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-secondary mb-6"
            >
              Solidez, Confiança e Compromisso em Cada Projeto
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-accent mb-8 text-lg"
            >
              Na NTC Brasil, acreditamos que cada construção é a materialização
              de um sonho. Com uma base sólida de experiência e um olhar
              constante para o futuro, dedicamo-nos a entregar projetos que não
              apenas atendem, mas superam as expectativas em qualidade,
              segurança e design.
            </motion.p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-accent">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
