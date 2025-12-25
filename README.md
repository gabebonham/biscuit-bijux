# 🛍️ Biscuit Bijux

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

**Biscuit Bijux** é um projeto de e-commerce desenvolvido com **Next.js**, focado na venda de **bijuterias artesanais**.  
Este repositório foi estruturado com foco em **avaliação técnica**, priorizando boas práticas de arquitetura frontend, organização de código, escalabilidade e experiência do usuário.

---

## 🎯 Objetivo do Projeto

Demonstrar domínio prático em:

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Componentização e arquitetura de UI
- Organização de dados e navegação dinâmica
- Boas práticas de frontend moderno

O projeto simula uma loja real, mas também serve como **portfólio técnico**.

---

## 🧩 Stack Tecnológica

### Frontend
- **Next.js** (App Router)
- **React**
- **TypeScript**

### Estilização
- **Tailwind CSS**
- Variáveis CSS para identidade visual
- Layout responsivo (mobile-first)
- Animações e efeitos de hover

### Qualidade e Organização
- Componentes reutilizáveis
- Separação clara entre dados, UI e lógica
- Estrutura escalável

---

## 🎨 Identidade Visual

Paleta de cores definida via CSS Variables:

```css
--main-dark: 3 7 30;
--main-dark-red: 106 4 15;
--main-red: 157 2 8;
--main-light-red: 208 0 0;
--main-orange: 232 93;
```

A identidade busca transmitir elegância, artesanato e modernidade.

---

## 🗂️ Estrutura do Projeto

```bash
src/
├── app/                # Rotas e layouts (Next.js App Router)
│   ├── home/
│   ├── categorias/
│   └── layout.tsx
│
├── components/         # Componentes reutilizáveis
│   ├── Navbar/
│   ├── Card/
│   ├── Button/
│   └── ProductCard/
│
├── data/               # Dados estáticos (mock)
│   ├── categories.ts
│   └── navbarItems.ts
│
├── styles/             # Estilos globais
│
└── utils/              # Funções auxiliares
```

---

## 🧭 Navegação Dinâmica

A navegação é construída a partir de dados, permitindo:

- Itens simples
- Itens com subcategorias
- Botões de ação

Exemplo:

```ts
export const navbarItems = [
  {
    name: 'Home',
    path: '/home',
    isButton: true,
  },
  {
    name: 'Categorias',
    path: '/categorias',
    isButton: true,
    subitems: [],
  },
];
```

Essa abordagem facilita manutenção e escalabilidade.

---

## 💎 Produtos e Categorias

Categorias principais:

- Brincos
- Colares
- Kits (colar + brinco)
- Chaveiros

Cada produto contém:
- Nome
- Imagem
- Descrição
- Categoria

As descrições são pensadas para **SEO**, clareza e valorização do produto.

---

## ⚡ Boas Práticas Aplicadas

- Componentização reutilizável
- Classes utilitárias bem organizadas
- Evita lógica duplicada
- Layout responsivo
- Preparado para integração com backend futuro

---

## 🚀 Executando Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/biscuit-bijux.git
```

### 2. Entre na pasta

```bash
cd biscuit-bijux
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
npm run dev
```

Acesse em:  
`http://localhost:3000`

---

## 🛠️ Melhorias Futuras

- Integração com banco de dados
- CMS ou painel administrativo
- Carrinho persistente
- Checkout e pagamento
- Autenticação de usuários

---

## 👤 Autor

Desenvolvido por **ta lho**  
Frontend Developer  
Especializado em **Next.js, React, TypeScript e UI moderna**

---

## 📄 Licença

MIT License — uso livre para fins educacionais e de portfólio.
