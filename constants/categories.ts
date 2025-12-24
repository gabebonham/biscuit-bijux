import { Category } from '@/models/category.model'

export const earrings: Category = {
  id: '1',
  name: 'Brincos',
  imgUrl:
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  description:
    'Nossos brincos são pensados para valorizar cada detalhe do seu estilo. Com designs modernos e delicados, eles são ideais para compor looks do dia a dia ou dar um toque especial em ocasiões especiais. Leves, confortáveis e cheios de personalidade, são o acessório perfeito para expressar quem você é.',
  path: '/categorias/brincos',
  type: 'earring',
}
export const necklaces: Category = {
  id: '2',
  name: 'Colares',
  imgUrl:
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  description:
    'Os colares da Biscuit Bijux unem elegância e versatilidade em peças que fazem toda a diferença. Com acabamentos cuidadosos e estilos que vão do básico ao sofisticado, eles complementam qualquer produção, trazendo charme e destaque na medida certa.',
  path: '/categorias/colares',
  type: 'necklace',
}
export const kits: Category = {
  id: '3',
  imgUrl:
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
  name: 'Kits',
  description:
    'Nossos kits de colar e brincos foram criados para quem ama praticidade sem abrir mão do estilo. As peças se harmonizam perfeitamente entre si, formando combinações elegantes e prontas para usar. Uma ótima opção para presentear ou renovar o visual com muito bom gosto.',
  path: '/categorias/kits',
  type: 'kit',
}
export const keyChains: Category = {
  id: '4',
  imgUrl:
    'https://images.unsplash.com/photo-1687363714985-990685339050?q=80&w=387',
  name: 'Chaveiros',
  description:
    'Nossos chaveiros unem funcionalidade e estilo em peças cheias de personalidade. Perfeitos para acompanhar chaves, bolsas ou mochilas, eles trazem charme aos detalhes do dia a dia e são uma ótima opção para presentear com criatividade.',
  path: '/categorias/chaveiros',
  type: 'keychain',
}
export const decoration: Category = {
  id: '5',
  imgUrl:
    'https://images.unsplash.com/photo-1611920630905-426e08849c32?q=80&w=387',
  name: 'Decorações',
  description:
    'Nossas peças de decoração foram pensadas para transformar ambientes com delicadeza e bom gosto. Cada detalhe adiciona charme e personalidade ao espaço, criando uma atmosfera acolhedora e cheia de estilo.',
  path: '/categorias/decoracoes',
  type: 'decoration',
}
export const categories: Category[] = [
  earrings,
  necklaces,
  kits,
  keyChains,
  decoration,
]
