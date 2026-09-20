# Rossi Soares Beauty 💆‍♀️

Site institucional da **Rossi Soares Beauty** — clínica de estética localizada em Brasília/DF. Desenvolvido com React, TypeScript e Tailwind CSS v4.

🌐 **[rossisoares.com](https://rossisoares.com)**

---

## ✨ Funcionalidades

- **Hero section** com chamada para agendamento
- **Carrossel de serviços** com navegação por setas
- **Página de todos os serviços** organizada por categorias (Natural Brows, Estética Facial, Lash & Brow, Depilação, Nanopigmentação e outros)
- **Página de detalhe** de cada serviço com benefícios e botão de agendamento
- **Depoimentos** de clientes em carrossel, com link para avaliações no Google
- **Seção Sobre** com filosofia do estúdio
- **Footer** com mapa, horários de funcionamento e redes sociais
- **Botão flutuante do WhatsApp** para contato rápido
- Navegação totalmente responsiva (mobile-first)

---

## 🛠 Stack

| Tecnologia             | Versão |
| ---------------------- | ------ |
| React                  | 19     |
| TypeScript             | 5.8    |
| Tailwind CSS           | 4      |
| Vite                   | 6      |
| Motion (Framer Motion) | 12     |
| Lucide React           | latest |
| React Icons            | 5      |

---

## 🚀 Como rodar localmente

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento (porta 3000)
npm run dev
```

Acesse em `http://localhost:3000`.

---

## 📦 Scripts disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento          |
| `npm run build`   | Gera o bundle de produção em `/dist` |
| `npm run preview` | Preview do build de produção         |
| `npm run lint`    | Verifica erros de ESLint             |
| `npm run format`  | Formata o código com Prettier        |

---

## 📁 Estrutura do projeto

```
rossi-soares-beauty/
├── public/
│   ├── index/          # Imagens da hero e da seção sobre
│   └── servicos/       # Imagens dos serviços (por categoria)
├── src/
│   ├── App.tsx         # Componentes e lógica de navegação
│   ├── constants.ts    # Dados dos serviços, depoimentos e informações da clínica
│   ├── index.css       # Estilos globais e variáveis CSS
│   └── main.tsx        # Entry point
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🗂 Adicionando/editando serviços

Todos os serviços estão em `src/constants.ts` no array `SERVICES`. Cada serviço segue a interface:

```ts
{
  id: string;           // identificador único (slug)
  title: string;        // nome exibido
  shortDescription: string; // resumo para o card
  fullDescription: string;  // descrição completa na página de detalhe
  topics?: string[];    // lista de sub-itens (opcional)
  image: string;        // caminho relativo a /public
  benefits: string[];   // lista de benefícios
  duration: string;     // duração do procedimento
  price?: string;       // preço (opcional)
  category: string;     // categoria — deve existir em SERVICE_CATEGORIES
}
```

Para adicionar uma nova **categoria**, inclua o nome em `SERVICE_CATEGORIES` no mesmo arquivo.

---

## 📲 Agendamento e contato

O botão de agendamento abre o link `https://rossisoares.belasis.app/scheduling`.  
O WhatsApp direciona para o número configurado em `CLINIC_INFO.whatsapp`.

Ambos podem ser alterados em `src/constants.ts`.

---

## 🚢 Deploy

O site é hospedado no **Cloudflare Workers**, no projeto `rossi-beauty`, conectado a este repositório no GitHub.

- **Branch de produção:** `main`.
- **Build:** `npm run build`, com saída em `dist/`.
- **Publicação:** cada push na `main` dispara o build e o deploy pela integração Git da Cloudflare.
- **Domínio:** `rossisoares.com`, associado ao Worker no painel da Cloudflare.

As configurações de build, deploy e domínios são administradas no painel da Cloudflare. Não há script local de publicação neste repositório. Para acompanhar uma atualização, consulte as implantações do Worker `rossi-beauty`.

Para validar o site localmente antes de enviar alterações:

```bash
npm run build
npm run preview
```

---

## 📄 Licença

Apache 2.0 — veja o cabeçalho dos arquivos fonte.
