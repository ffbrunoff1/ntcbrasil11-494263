import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Loader,
  Check,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao enviar a mensagem.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Vamos Construir Juntos
          </h2>
          <p className="text-lg text-accent">
            Tem uma ideia ou projeto em mente? Entre em contato conosco. Estamos
            prontos para transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">E-mail</h4>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="text-accent hover:text-primary transition-colors"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Telefone</h4>
                  <a
                    href="tel:+5544991040774"
                    className="text-accent hover:text-primary transition-colors"
                  >
                    +55 44 99104-0774
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Endereço</h4>
                  <p className="text-accent">Padre Lebret 801, G05 Bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-primary text-light px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg">
                  <Check className="mr-2" /> Mensagem enviada com sucesso!
                  Entraremos em contato em breve.
                </div>
              )}
              {submitError && (
                <div className="flex items-center p-4 bg-red-100 text-red-800 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
