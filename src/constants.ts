/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  duration: string;
  price?: string;
}

export const CLINIC_INFO = {
  name: 'Rossi Soares Beauty',
  logo: '/logo.png',
  tagline: 'Naturalmente Única',
  description:
    'Descubra uma experiência de cuidado e bem-estar em um espaço pensado para você. Nosso propósito é valorizar a beleza natural com excelência, técnica e atenção genuína em cada atendimento com tratamentos personalizados.',
  experienceYears: '14',
  address: 'CLN 309 Bloco A Loja 113 - Asa Norte, Brasília - DF',
  phone: '(61) 99285-8523',
  whatsapp: '5561992858523',
  openingHours: [
    { days: 'Seg - Sex', hours: '08:00 - 18:00' },
    { days: 'Sábado/Domingo', hours: 'Fechado', isClosed: true },
  ],
  googleReviewsUrl:
    'https://www.google.com/search?q=rossi+soares&oq=rossi&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIKCAEQLhixAxiABDIHCAIQABiABDIGCAMQRRg9MgYIBBBFGD0yBggFEEUYPDIGCAYQRRg8MgYIBxAFGEDSAQgyODQ3ajBqN6gCCLACAfEFgLnf2F6dgz3xBYC539henYM9&sourceid=chrome&ie=UTF-8#lrd=0x935a39007c08d0ff:0xd909b0a1a0ae345b,1,,,,',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8660877846574!2d-47.887961!3d-15.7581561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39007c08d0ff%3A0xd909b0a1a0ae345b!2sRossi%20Soares%20Beauty!5e0!3m2!1spt-BR!2sbr!4v1715694380123!5m2!1spt-BR!2sbr',
};

export const SERVICES: Service[] = [
  {
    id: 'natural-brows',
    title: 'Natural Brows (Design de Sobrancelha)',
    shortDescription: 'Um design inovador que busca ressaltar o natural fugindo dos padrões.',
    fullDescription:
      'Um design inovador que busca ressaltar o natural fugindo dos padrões. Cada sobrancelha é única e avaliamos a sua estrutura para executar um trabalho de excelência.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260130130124_1000210266.jpg',
    benefits: [
      'Avaliação estrutural',
      'Design personalizado',
      'Harmonização facial',
      'Técnica exclusiva',
    ],
    duration: '30 min',
    price: 'R$ 110,00',
  },
  {
    id: 'natural-brows-henna',
    title: 'Natural Brows Henna',
    shortDescription: 'Design de sobrancelha com aplicação de henna para um esfumado perfeito.',
    fullDescription:
      'Design de sobrancelha com aplicação de henna que deixa um esfumado perfeito. Ideal para quem busca preenchimento de falhas e mais volume.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121231418_gabryela-albernaz-sobrancelhas-henna.jpg',
    benefits: ['Esfumado perfeito', 'Preenchimento de falhas', 'Longa duração', 'Design exclusivo'],
    duration: '45 min',
    price: 'R$ 150,00',
  },
  {
    id: 'natural-brows-man',
    title: 'Natural Brows Man',
    shortDescription: 'Design de sobrancelha masculino que traz leveza e suavidade ao olhar.',
    fullDescription:
      'Design de sobrancelha masculino que traz leveza e suavidade ao olhar, respeitando os traços masculinos de forma natural.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260212130505_sobrancelha_masculina.jpg',
    benefits: ['Leveza e suavidade', 'Aspecto natural', 'Limpeza do olhar', 'Realce masculino'],
    duration: '30 min',
    price: 'R$ 85,00',
  },
  {
    id: 'grow-up',
    title: 'Grow Up (Reconstrução)',
    shortDescription: 'Microagulhamento para desenvolvimento dos fios.',
    fullDescription:
      'Microagulhamento com serum hidratante e estimulante, focado no desenvolvimento e crescimento dos fios das sobrancelhas.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121230517_525462133_622974800726150_8684289071664901263_n.jpg',
    benefits: [
      'Estimula o crescimento',
      'Hidratação profunda',
      'Regeneração folicular',
      'Fios mais fortes',
    ],
    duration: '45 min',
    price: 'R$ 180,00',
  },
  {
    id: 'tintura-sobrancelha',
    title: 'Tintura de Sobrancelha',
    shortDescription: 'Aplicação de tinta nas sobrancelhas para maior destaque.',
    fullDescription:
      'Aplicação de tinta específica para sobrancelhas. Promove coloração dos fios brancos ou claros, dando mais destaque e sensação de volume.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121232034_sobrancelha-henna-.jpg',
    benefits: [
      'Cobertura de fios brancos',
      'Destaque do olhar',
      'Efeito natural',
      'Praticidade diária',
    ],
    duration: '20 min',
    price: 'R$ 40,00',
  },
  {
    id: 'tintura-cilios',
    title: 'Tintura dos Cílios',
    shortDescription: 'Coloração dos cílios para um efeito alongado.',
    fullDescription:
      'Pintar os cílios com coloração específica para a área dos olhos, realçando o olhar e dispensando o uso de rímel no dia a dia.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260205105133_1000442545.jpg',
    benefits: [
      'Efeito rímel prolongado',
      'Realce do olhar',
      'Procedimento seguro e rápido',
      'Praticidade',
    ],
    duration: '30 min',
    price: 'R$ 50,00',
  },
  {
    id: 'face-spa',
    title: 'Face Spa',
    shortDescription: 'Tratamento que combina limpeza com dermaplaning.',
    fullDescription:
      'O Face Spa é um tratamento completo que combina limpeza profunda com dermaplaning, promovendo renovação e cuidado intensivo em uma única sessão. A associação das técnicas permite remover impurezas e desobstruir os poros.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121230820_2_Kit-para-limpeza-de-pele-potencialize-seus-resultados-com-uma-pele-bem-preparada-1.jpg',
    benefits: [
      'Limpeza profunda',
      'Remoção de células mortas',
      'Desobstrução de poros',
      'Renovação celular',
    ],
    duration: '1h 45min',
    price: 'R$ 350,00',
  },
  {
    id: 'limpeza-de-pele',
    title: 'Limpeza de Pele',
    shortDescription: 'Controle da oleosidade e prevenção de acne.',
    fullDescription:
      'Tratamento completo para desobstrução dos poros e controle da oleosidade. Tem como principal objetivo remover impurezas acumuladas, prevenir acne e manter a saúde cutânea em dia.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121230931_95bb51711c02939ce0c954927a43b5920cf90d23-768x441.jpg',
    benefits: [
      'Controle da oleosidade',
      'Prevenção de acne',
      'Remoção de cravos e impurezas',
      'Pele iluminada',
    ],
    duration: '1h 30min',
    price: 'R$ 250,00',
  },
  {
    id: 'dermaplaning',
    title: 'Dermaplaning',
    shortDescription: 'Peeling físico para remover camadas de células mortas.',
    fullDescription:
      'Peeling físico que remove a camada de células mortas, promovendo renovação. Estimula elastina, colágeno, clareamento de manchas e suaviza poros.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121230757_Blog-Fotos-3-1.jpg',
    benefits: [
      'Remoção de penugem facial',
      'Pele ultra macia',
      'Estímulo de colágeno',
      'Melhora absorção de produtos',
    ],
    duration: '1h',
    price: 'R$ 180,00',
  },
  {
    id: 'revitalizacao-facial',
    title: 'Revitalização Facial',
    shortDescription: 'Limpeza, renovação e hidratação da pele.',
    fullDescription:
      'Tratamento rápido e eficaz que promove a limpeza, renovação e hidratação da pele. Inclui higienização, esfoliação e hidratação profunda para um glow imediato.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121231830_revitalizacao-facial.jpg',
    benefits: [
      'Hidratação profunda',
      'Glow imediato',
      'Renovação expressa da pele',
      'Nutrição celular',
    ],
    duration: '45 min',
    price: 'R$ 120,00',
  },
  {
    id: 'ultra-skin',
    title: 'Ultra Skin',
    shortDescription: 'Peeling ultrassônico para esfoliação delicada.',
    fullDescription:
      'Utiliza tecnologia ultrassônica para potencializar os resultados de renovação. O peeling ultrassônico promove esfoliação delicada, removendo células mortas de forma indolor.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121231733_IMAGENS_06.jpg',
    benefits: [
      'Esfoliação não agressiva',
      'Limpeza indolor',
      'Melhora da textura facial',
      'Estímulo da circulação',
    ],
    duration: '45 min',
    price: 'R$ 150,00',
  },
  {
    id: 'velvet-glow',
    title: 'Velvet Glow',
    shortDescription: 'Combinação de dermaplaning, peeling ultrassônico e vacuoterapia.',
    fullDescription:
      'Combina dermaplaning, peeling ultrassônico e vacuoterapia, promovendo uma renovação profunda e potencializando a absorção de ativos hidratantes para um brilho aveludado.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260221221426_images1.jpg',
    benefits: [
      'Pele aveludada',
      'Potencialização de ativos',
      'Tratamento multitécnicas',
      'Brilho intenso',
    ],
    duration: '1h',
    price: 'R$ 250,00',
  },
  {
    id: 'revitalift',
    title: 'RevitaLift',
    shortDescription: 'Foco em firmeza e melhora do contorno facial.',
    fullDescription:
      'Protocolo focado em firmeza, estímulo de colágeno e melhora do contorno facial, associando tecnologia de eletroestimulador e vacuoterapia para um efeito lifting.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260220204834_revitalift1.jpg',
    benefits: [
      'Efeito Lifting',
      'Melhora o contorno facial',
      'Estímulo muscular',
      'Ativa circulação',
    ],
    duration: '30 min',
    price: 'R$ 150,00',
  },
  {
    id: 'dermo-glow',
    title: 'Dermo Glow',
    shortDescription: 'Peeling de Diamante para esfoliação controlada.',
    fullDescription:
      'Utiliza Peeling de Diamante para promover uma esfoliação controlada e eficaz, removendo células mortas e melhorando incrivelmente a textura da pele.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260122003606_526584992_3730351207099389_8978752874073137719_n.jpg',
    benefits: [
      'Esfoliação mecânica',
      'Textura uniforme',
      'Atenuação de linhas finas',
      'Renovação epitelial',
    ],
    duration: '45 min',
    price: 'R$ 180,00',
  },
  {
    id: 'microagulhamento',
    title: 'Microagulhamento',
    shortDescription: 'Estimulação intensiva da produção de colágeno.',
    fullDescription:
      'Ativa os mecanismos naturais de regeneração da pele, estimulando a produção intensiva de colágeno e melhorando a firmeza, textura e luminosidade.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121231026_LaVUHI2nPEnDCyNankYkJC4B4Yj7SHLrc5FiWpaF.jpg',
    benefits: [
      'Indução percutânea de colágeno',
      'Melhora cicatrizes de acne',
      'Rejuvenescimento',
      'Firmeza e brilho',
    ],
    duration: '45 min',
    price: 'R$ 150,00',
  },
  {
    id: 'natural-pump',
    title: 'Natural Pump',
    shortDescription: 'Revitalização e hidratação profunda para os lábios.',
    fullDescription:
      'Hidratação profunda com ácido hialurônico e blend de vitaminas. Revitaliza, hidrata e rejuvenesce os lábios, estimulando colágeno na região labial.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121232648_hidralips-microagulhamento-dermapen-labios-brasilia-sandra-martins.png',
    benefits: [
      'Lábios hidratados',
      'Redução de descamação labial',
      'Aparência saudável',
      'Estimula colágeno labial',
    ],
    duration: '30 min',
    price: 'R$ 150,00',
  },
  {
    id: 'brow-lamination',
    title: 'Brow Lamination',
    shortDescription: 'Alinhamento dos fios da sobrancelha para maior volume.',
    fullDescription:
      'Técnica de alinhamento dos fios da sobrancelha, deixando as sobrancelhas muito mais volumosas, espessas e perfeitamente penteadas.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260130130158_1000242313.jpg',
    benefits: [
      'Fios alinhados',
      'Visual moderno e volumoso',
      'Esconde pequenas falhas',
      'Durabilidade incrível',
    ],
    duration: '1h',
    price: 'R$ 200,00',
  },
  {
    id: 'lash-lifting',
    title: 'Lash Lifting',
    shortDescription: 'Levantamento e curvatura dos fios naturais dos cílios.',
    fullDescription:
      'Técnica que levanta e curva os fios naturais dos cílios, deixando o olhar mais aberto. Durabilidade de até 2 meses sem necessidade de manutenção frequente.',
    image:
      'https://uploads-app.s3.amazonaws.com/uploads/inventory_products/salon_36199/large_thumb_20260121230340_524632329_1275075183650799_6022851935625825302_n.jpg',
    benefits: ['Curvatura ideal', 'Volume natural', 'Olhar marcante', 'Disensa curvex'],
    duration: '1h 15min',
    price: 'R$ 200,00',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Thais P.',
    initials: 'TP',
    text: 'A Rossi é uma excelente profissional, muito atenciosa e detalhista. O espaço é lindo, super limpo e aconchegante. Fiz sobrancelha e limpeza de pele e amei os resultados! Super recomendo.',
    rating: 5,
  },
  {
    name: 'Carolina M.',
    initials: 'CM',
    text: 'Atendimento impecável desde a marcação até o dia do procedimento. Profissional super capacitada que explica tudo com detalhes e transmite muita confiança. Voltarei com certeza!',
    rating: 5,
  },
  {
    name: 'Ana M.',
    initials: 'AM',
    text: 'Profissional maravilhosa! Muito caprichosa, atenciosa e o ambiente é perfeito, super aconchegante e limpinho. O trabalho dela é impecável.',
    rating: 5,
  },
];

export const handleWhatsAppClick = (serviceName?: string) => {
  const message = encodeURIComponent(
    serviceName
      ? `Olá! Gostaria de agendar o serviço: ${serviceName}`
      : `Olá! Gostaria de saber mais sobre os serviços da Rossi Soares Beauty.`
  );
  window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${message}`, '_blank');
};

export const handleScheduleClick = () => {
  window.open('https://rossisoares.belasis.app/scheduling', '_blank');
};
