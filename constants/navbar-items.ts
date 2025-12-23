import { categories } from './categories'

export const navbarItems = [
  {
    name: 'Home',
    path: '/home',
    isButton: true,
    hasSubs: false,
  },
  {
    name: 'Sobre Nós',
    path: '/sobre',
    isButton: true,
    hasSubs: false,
  },
  {
    name: 'Categorias',
    path: '/categorias',
    isButton: true,
    hasSubs: true,
    subItems: categories.map((category) => ({
      name: category.name,
      path: category.path,
      isButton: true,
      hasSubs: false,
    })),
  },
  {
    name: 'Destaques',
    isButton: false,
    hasSubs: true,
    subItems: [
      {
        name: 'Novidades',
        path: '/categorias?filter=new',
        isButton: true,
        hasSubs: false,
      },
      {
        name: 'Mais Vendidos',
        path: '/categorias?filter=bestsellers',
        isButton: true,
        hasSubs: false,
      },
    ],
  },
]
