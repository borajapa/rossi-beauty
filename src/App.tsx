/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  FlaskConical,
  Star,
  MapPin,
  Phone,
  Share2,
  Instagram,
  Facebook,
  Menu,
  X,
  ArrowLeft,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';
import {
  CLINIC_INFO,
  SERVICES,
  TESTIMONIALS,
  Service,
  handleWhatsAppClick,
  handleScheduleClick,
} from './constants';

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
          ? 'bg-white/80 backdrop-blur-md border-b border-primary/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <img
            src={CLINIC_INFO.logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover shadow-sm"
          />
          <h2 className="text-xl font-bold tracking-tight text-slate-900">{CLINIC_INFO.name}</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleScheduleClick()}
            className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all"
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
            className="absolute top-full left-0 w-full bg-white border-b border-primary/10 p-6 md:hidden"
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
                onClick={() => handleScheduleClick()}
                className="w-full bg-primary text-white py-3 rounded-xl font-bold"
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
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-primary">
              {CLINIC_INFO.tagline}
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              {CLINIC_INFO.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScheduleClick()}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all"
            >
              Agendar um Horário
            </button>
            <button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-primary/10 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/20 transition-all"
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
          <div className="aspect-[4/5] lg:aspect-square w-full bg-primary/5 rounded-[2rem] overflow-hidden relative group shadow-2xl">
            <img
              src="/index/recepcao.jpg"
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

import { useRef } from 'react';

const Services = ({ onServiceClick }: { onServiceClick: (service: Service) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-primary/5 py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nossos Serviços</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-slate-600 max-w-2xl">
              Tratamentos selecionados para proporcionar resultados visíveis e uma experiência
              luxuosa.
            </p>
          </div>

          <div className="flex gap-4 hidden sm:flex">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
              aria-label="Próximo"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:-mx-12 lg:px-12 md:mx-0 md:px-0"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => onServiceClick(service)}
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-primary/5 hover:shadow-xl transition-all cursor-pointer group min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 snap-start flex flex-col items-start"
            >
              <div className="aspect-square w-full rounded-xl overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                {service.shortDescription}
              </p>
              <div className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </div>
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
          <div className="w-full aspect-square bg-primary/10 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/index/nos.jpg"
              alt="Owners"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-primary/10 hidden md:block"
          >
            <p className="text-4xl font-black text-primary">{CLINIC_INFO.experienceYears}</p>
            <p className="text-sm font-bold opacity-70 text-slate-900">
              {CLINIC_INFO.experienceYears} Anos de Experiência
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Nossa Filosofia</h2>
          <p className="text-lg leading-relaxed text-slate-700 text-justify">
            Na {CLINIC_INFO.name}, acreditamos que o verdadeiro cuidado nasce da união entre
            excelência técnica e respeito. Há mais de uma década, construímos nossa trajetória com
            base na competência, padronização, pontualidade e rigorosos protocolos de higiene,
            sempre priorizando a segurança e o bem-estar de clientes e colaboradores.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 text-justify">
            Nosso princípio é simples: dar sempre mais do que recebemos. Por isso, cada atendimento
            é guiado pela cordialidade, elegância e atenção aos detalhes. Recebemos cada um com
            respeito e acolhimento, mantendo sempre o padrão de cuidado.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 text-justify">
            Mais do que prestar serviços, buscamos oferecer uma experiência em que cada cliente se
            sinta bem recebido, em um espaço onde o profissionalismo e a hospitalidade caminham
            juntos.
          </p>

          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">
                Segurança Primeiro
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 px-6 border-x border-primary/20">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <HeartHandshake className="text-primary w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tight text-slate-900">
                Atendimento Personalizado
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FlaskConical className="text-primary w-6 h-6" />
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="bg-primary text-white py-24 px-6 lg:px-12 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row mb-16 relative">
          {/* Centered Headers */}
          <div className="text-center w-full">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">O Que Nossas Clientes Dizem</h2>
            <a
              href={CLINIC_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3 py-2 rounded-full transition-all border border-white/20"
            >
              <div className="flex bg-white p-1 rounded-full">
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                  alt="Google"
                  className="w-5 h-5"
                />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-semibold">Avaliações no Google</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold">5.0</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Top Right Arrows */}
          <div className="flex gap-4 justify-center md:absolute md:right-0 md:bottom-0 md:translate-y-1/4 mt-8 md:mt-0 hidden sm:flex">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
              aria-label="Próximo"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
          >
            {TESTIMONIALS.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 flex flex-col h-full min-w-[280px] sm:min-w-[320px] md:min-w-[calc((100%-4rem)/3)] md:max-w-[calc((100%-4rem)/3)] shrink-0 snap-start"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt="Google"
                    className="w-4 h-4 opacity-50 grayscale"
                  />
                </div>
                <p className="italic mb-6 text-white/90 leading-relaxed flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                    {review.initials}
                  </div>
                  <p className="font-bold text-sm truncate">{review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-primary/10 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={CLINIC_INFO.logo}
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                {CLINIC_INFO.name}
              </h2>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rossi.soares_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/rossisoaresbeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: CLINIC_INFO.name,
                      text: CLINIC_INFO.tagline,
                      url: window.location.href,
                    });
                  }
                }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Compartilhar"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-slate-900">
              Informações de Contato
            </h4>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
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
                  className={`flex justify-between ${item.isClosed ? 'text-primary font-bold' : ''}`}
                >
                  <span>{item.days}</span> <span>{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="w-full h-32 rounded-xl overflow-hidden shadow-inner border border-slate-100 flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
              <iframe
                src={CLINIC_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-500 scale-105"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 {CLINIC_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary">
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
        className="flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" /> Voltar para Início
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900">{service.title}</h1>
            <div className="flex items-center gap-4 text-slate-500 font-semibold">
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-primary" />
                {service.duration}
              </div>
              {service.price && (
                <div className="text-primary font-bold">A partir de {service.price}</div>
              )}
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed">{service.fullDescription}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Benefícios do Tratamento</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => handleScheduleClick()}
            className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all"
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
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/10 max-w-[200px]">
            <p className="text-xs font-bold text-primary uppercase mb-2">Dica da Especialista</p>
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
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
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
        <FaWhatsapp />
      </motion.button>
    </div>
  );
}
