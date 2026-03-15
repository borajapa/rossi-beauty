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
  tagline: 'Naturalmente Única',
  description:
    'Sinta o ápice dos tratamentos estéticos e bem-estar em nossa clínica moderna e serena. Somos especialistas em realçar sua beleza natural com tratamentos personalizados.',
  experienceYears: '14',
  address: 'CLN 309 Bloco A Loja 113 - Asa Norte, Brasília - DF',
  phone: '(61) 99285-8523',
  whatsapp: '5561992858523',
  openingHours: [
    { days: 'Seg - Sex', hours: '08:00 - 18:00' },
    { days: 'Sábado/Domingo', hours: 'Fechado', isClosed: true },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'tratamentos-faciais',
    title: 'Tratamentos Faciais',
    shortDescription:
      'Terapias de rejuvenescimento adaptadas ao seu tipo de pele, com foco em hidratação e brilho.',
    fullDescription:
      'Nossos tratamentos faciais são projetados para revitalizar sua pele de dentro para fora. Utilizamos uma combinação de técnicas manuais e tecnologia avançada para limpar profundamente, hidratar e estimular a produção de colágeno. Cada sessão começa com uma análise detalhada da pele para garantir que usemos os produtos e métodos mais adequados para suas necessidades específicas.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCd4-cwAjDnSYldbllminNKMe3_UZSJCLs7Pdj78nvJJd88zuJXvBaw57iuLInvPvW0cVW-v081jOfhNwrz_vfEBjUxCQZjCRT6fBNggFOBb3sMuQ0hFUcrUnQoggLwM0BjleiRs6Z5lORSJfjpsfAJ0Cy3yGUJHM6JDsVGzUaq8hS0Uoxr5ua6-8dTdKkTDHwoZxh3Sz_S8o4mmYHjPvaf-Qpctjda6vYGaKDQSLyx15E9rRfNPgIg1TJRacYFFpbZzPrpcBnlAVIa',
    benefits: [
      'Limpeza profunda de poros',
      'Hidratação intensa e duradoura',
      'Melhora na textura e tom da pele',
      'Redução de linhas finas e sinais de cansaço',
    ],
    duration: '60 - 90 min',
  },
  {
    id: 'design-sobrancelhas',
    title: 'Design de Sobrancelhas',
    shortDescription:
      'Estilização de precisão e mapeamento para um olhar perfeito e natural que emoldura seu rosto lindamente.',
    fullDescription:
      'O design de sobrancelhas na Rossi Soares Beauty vai muito além da simples remoção de pelos. Utilizamos técnicas de visagismo e mapeamento facial para encontrar o formato ideal que harmonize com suas características únicas. Seja através da pinça, linha ou técnicas de coloração natural, nosso objetivo é realçar seu olhar de forma elegante e sofisticada.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuP9EgY6CvosKMokDETGRQAFDHc7du7zcVMxjgoNr1mxCXLtSoUSoKQxweGJd3Zbg-m9EbJafjcfUH3ykmHD9cq3ex79bmVh_ZYpnPmIb8k0aVleu__2oy41JM8DcD9R5RXlhUolIhUeCDMSZnuGjBO_Z1rb_c1NM_w0VHezZuNKZO-3hkMkkHHnG8gZDtshpSQhaFBvLU_3msvqI2J8d0dRz3KTsUNwjXJznUkYbZMuKmy1bMQs-rI_fnU5RXRIXpFwfb1a82QYj',
    benefits: [
      'Mapeamento facial personalizado',
      'Simetria e harmonia do olhar',
      'Técnicas de coloração de longa duração',
      'Acabamento natural e sofisticado',
    ],
    duration: '30 - 45 min',
  },
  {
    id: 'botox-preenchimento',
    title: 'Botox e Preenchimento',
    shortDescription:
      'Tratamentos administrados por especialistas para uma radiância jovem e realce sutil e natural.',
    fullDescription:
      "Nossos procedimentos injetáveis são realizados com o mais alto padrão de segurança e precisão. O Botox é utilizado para suavizar rugas de expressão, enquanto os preenchimentos com ácido hialurônico devolvem volume e contorno a áreas estratégicas do rosto. Nossa filosofia é o 'Realce Natural', garantindo resultados que rejuvenescem sem alterar sua expressão original.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbhtBdvU80qHWfBevK6g4KfvtCKAUTfF1LT5NhkGV1_XmiBy2TlcykN4fKiqJEIRRelzcx7Ukw8ypA8Bnrb2D6PZGQFBtgVu0id_2raqfFUwCio-6WG3QRAC5dM7ihcQtMbQBxbpkkswFcny2XdPBs2sL9JDUns8dmPgPSJ2u6EfTStw7eqotbZfDnCIKv975-V4VCkt4jJP1gqr8_uBWTUuwzAAU3d1b8BBrL4Dv20CrcV6Xbml0DZKMi_Lx_NCF7g2lVw9SA-bWn',
    benefits: [
      'Suavização de rugas e linhas de expressão',
      'Restauração de volume facial',
      'Contorno labial e facial definido',
      'Resultados naturais e duradouros',
    ],
    duration: '45 - 60 min',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sophia Martinez',
    initials: 'SM',
    text: 'A experiência mais profissional que já tive. Minha pele nunca esteve tão bem após apenas duas sessões de seus faciais personalizados.',
  },
  {
    name: 'Julianne Williams',
    initials: 'JW',
    text: 'Técnicos especialistas e um ambiente lindo. Rossi e sua equipe realmente dedicam tempo para ouvir suas necessidades. Altamente recomendado!',
  },
  {
    name: 'Emma Peters',
    initials: 'EP',
    text: "A clínica é deslumbrante e os resultados do Botox são muito naturais. Finalmente me sinto a melhor versão de mim mesma sem parecer 'artificial'.",
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
