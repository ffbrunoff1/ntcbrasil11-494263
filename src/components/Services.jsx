import React from 'react';
import { motion } from 'framer-motion';
import { Target, Building, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Planejamento e Inovação',
      description:
        'Cada projeto começa com um planejamento meticuloso, integrando soluções inovadoras para otimizar recursos e garantir resultados superiores.',
    },
    {
      icon: Building,
      title: 'Execução de Excelência',
      description:
        'Nossa equipe altamente qualificada gerencia cada fase da obra com precisão, garantindo a execução fiel ao projeto e o mais alto padrão de qualidade.',
    },
    {
      icon: ShieldCheck,
      title: 'Segurança e Confiança',
      description:
        'A segurança é nossa prioridade. Seguimos rigorosas normas e práticas para garantir um ambiente de trabalho seguro e um resultado final duradouro e confiável.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-accent">
            Vamos além da construção. Oferecemos um serviço completo baseado em
            três pilares fundamentais que garantem o sucesso do seu
            empreendimento.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex-shrink-0">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-accent">{service.description}</p>
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-bold text-primary hover:text-blue-400 transition-colors duration-300"
                >
                  Saiba Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
