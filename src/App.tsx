/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Flower2,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  FlaskConical,
  Star,
  MapPin,
  Phone,
  Share2,
  Instagram,
  Menu,
  X,
  ArrowLeft,
  Clock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_INFO, SERVICES, TESTIMONIALS, Service, handleWhatsAppClick } from './constants';

const Navbar = ({
  onNavigate,
  currentPage,
}: {
  onNavigate: (page: string) => void;
  currentPage: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Serviços', id: 'services' },
    { name: 'Sobre Nós', id: 'about' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Contato', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      // Small delay to allow home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-white/80 backdrop-blur-md border-b border-[#bb768d]/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <Flower2 className="text-[#bb768d] w-8 h-8" />
          <h2 className="text-xl font-bold tracking-tight text-slate-900">{CLINIC_INFO.name}</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm font-semibold text-slate-700 hover:text-[#bb768d] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleWhatsAppClick()}
            className="hidden sm:block bg-[#bb768d] hover:bg-[#bb768d]/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#bb768d]/20 transition-all"
          >
            Reserve Agora
          </button>
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#bb768d]/10 p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-lg font-semibold text-slate-700 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleWhatsAppClick()}
                className="w-full bg-[#bb768d] text-white py-3 rounded-xl font-bold"
              >
                Reserve Agora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col gap-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#bb768d]">
              {CLINIC_INFO.tagline}
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              {CLINIC_INFO.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleWhatsAppClick()}
              className="bg-[#bb768d] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#bb768d]/25 hover:translate-y-[-2px] transition-all"
            >
              Agendar um Horário
            </button>
            <button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-[#bb768d]/10 text-[#bb768d] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#bb768d]/20 transition-all"
            >
              Ver Serviços
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2"
        >
          <div className="aspect-[4/5] lg:aspect-square w-full bg-[#bb768d]/5 rounded-[2rem] overflow-hidden relative group shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpZjjMnsCgJXyA-3vCJmqSWzHSzR-6YJvqSlGtEEmQnl2PABglHfZyD8gdYfJxm9Vh66ZKVwTv9oR4l2ipkYO6ykH0I4x5cmHQlG3UqI7JTUq-saC3VSDiIcU5WGGZWmv5WJH6nPW7RoMq5WLCpDBE_n6Zsg5KU18mCqHBh8Ohy-RCoVlNguWEDkKQ__53SU_U61i2L8GmEqUPYOWNJuSuUQZ8gLM5iN8x3GVZnr1ezZl7bnvbJCoo-IKEgGsWqq8Su5YjOF36JyF_"
              alt="Interior of a luxury modern spa room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = ({ onServiceClick }: { onServiceClick: (service: Service) => void }) => {
  return (
    <section id="services" className="bg-[#bb768d]/5 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-[#bb768d] mx-auto rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tratamentos selecionados para proporcionar resultados visíveis e uma experiência
            luxuosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-[#bb768d]/5 hover:shadow-xl transition-all group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <button
                onClick={() => onServiceClick(service)}
                className="text-[#bb768d] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full aspect-square bg-[#bb768d]/10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkZ0AoZX4Ydatj7ez_uDPDmR8pWZIoJpNT4Ebi0KTzVZTyyA30xVKtFqbJRzbxbNGnTuXpByv9ugxhE2JyVpjgwHm4MVupg3mUCBJDTj1ttL1FF0fq5PUbxu9luFvtAX5aCERjUSUd5N-_WGu3HP8VzAa2UApkxDRy8LbS74BRDvHRlmvZ8RgScAMIWKn9oNXw_4qaSQ_D9oP7nwRzgS7RaniR9CUSlIfa32Zbdt5zM6tAi1_YAXtuGx2eyKcZKm4e-p4pUJxcoUyk"
              alt="Elegant spa reception area"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-[#bb768d]/10 hidden md:block"
          >
            <p className="text-4xl font-black text-[#bb768d]">{CLINIC_INFO.experienceYears}</p>
            <p className="text-sm font-bold opacity-70 text-slate-900">
              {CLINIC_INFO.experienceYears} Anos de Experiência
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nossa Filosofia</h2>
          <p className="text-lg leading-relaxed text-slate-700">
            Na {CLINIC_INFO.name}, acreditamos que a beleza não se resume a aparências — trata-se de
            confiança e bem-estar. Nossa clínica é fundada no princípio de "Realce em vez de
            Alteração".
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Utilizamos a mais recente tecnologia de grau médico e produtos de classe mundial para
            garantir que cada cliente receba uma experiência personalizada que respeite suas
            características únicas. Nosso objetivo é proporcionar um santuário onde a ciência
            encontra o luxo.
          </p>

          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#bb768d]/10 flex items-center justify-center">
                <ShieldCheck className="text-[#bb768d] w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">
                Segurança Primeiro
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 px-6 border-x border-[#bb768d]/20">
              <div className="w-12 h-12 rounded-full bg-[#bb768d]/10 flex items-center justify-center">
                <HeartHandshake className="text-[#bb768d] w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">
                Atendimento Personalizado
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#bb768d]/10 flex items-center justify-center">
                <FlaskConical className="text-[#bb768d] w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">
                Tecnologia de Ponta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#bb768d] text-white py-24 px-6 lg:px-12 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          O Que Nossas Clientes Dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="italic mb-6 text-white/90 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <p className="font-bold">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-[#bb768d]/10 pt-20 pb-10 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Flower2 className="text-[#bb768d] w-8 h-8" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {CLINIC_INFO.name}
              </h2>
            </div>
            <p className="max-w-sm text-slate-600">
              Seu destino para tratamentos estéticos de luxo e bem-estar holístico no coração da
              cidade.
            </p>
            <div className="flex gap-4">
              {[Share2, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#bb768d]/10 flex items-center justify-center text-[#bb768d] hover:bg-[#bb768d] hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-slate-900">
              Informações de Contato
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#bb768d] w-5 h-5 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#bb768d] w-5 h-5 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-slate-900">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-2 text-slate-600">
              {CLINIC_INFO.openingHours.map((item, i) => (
                <li
                  key={i}
                  className={`flex justify-between ${item.isClosed ? 'text-[#bb768d] font-bold' : ''}`}
                >
                  <span>{item.days}</span> <span>{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="w-full h-24 rounded-lg bg-slate-100 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative flex items-center gap-2 text-[#bb768d]">
                <MapPin className="w-6 h-6" />
                <span className="text-xs font-bold">Ver no Mapa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#bb768d]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#bb768d]">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-[#bb768d]">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ServiceDetail = ({ service, onBack }: { service: Service; onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#bb768d] font-bold mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Voltar para Início
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">{service.title}</h1>
            <div className="flex items-center gap-4 text-slate-500 font-semibold">
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-[#bb768d]" />
                {service.duration}
              </div>
              {service.price && (
                <div className="text-[#bb768d] font-bold">A partir de {service.price}</div>
              )}
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">{service.fullDescription}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Benefícios do Tratamento</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#bb768d] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => handleWhatsAppClick(service.title)}
            className="w-full sm:w-auto bg-[#bb768d] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#bb768d]/25 hover:translate-y-[-2px] transition-all"
          >
            Agendar este Serviço
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#bb768d]/10 max-w-[200px]">
            <p className="text-xs font-bold text-[#bb768d] uppercase mb-2">Dica da Especialista</p>
            <p className="text-sm text-slate-600 italic">
              "Resultados visíveis desde a primeira sessão."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f7] font-sans selection:bg-[#bb768d]/30">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <Services onServiceClick={handleServiceClick} />
              <About />
              <Testimonials />
            </motion.div>
          ) : (
            selectedService && <ServiceDetail service={selectedService} onBack={handleBack} />
          )}
        </AnimatePresence>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </motion.button>
    </div>
  );
}
