import { Category } from '@/models/category.model'
import { randomUUID } from 'crypto'

export const earrings: Category = {
  id: randomUUID(),
  name: 'Brincos',
  description:
    'Nossos brincos são pensados para valorizar cada detalhe do seu estilo. Com designs modernos e delicados, eles são ideais para compor looks do dia a dia ou dar um toque especial em ocasiões especiais. Leves, confortáveis e cheios de personalidade, são o acessório perfeito para expressar quem você é.',
  path: '/categorias/brincos',
  type: 'earring',
}
export const necklaces: Category = {
  id: randomUUID(),
  name: 'Colares',
  description:
    'Os colares da Biscuit Bijux unem elegância e versatilidade em peças que fazem toda a diferença. Com acabamentos cuidadosos e estilos que vão do básico ao sofisticado, eles complementam qualquer produção, trazendo charme e destaque na medida certa.',
  path: '/categorias/colares',
  type: 'necklace',
}
export const kits: Category = {
  id: randomUUID(),
  name: 'Kits',
  description:
    'Nossos kits de colar e brincos foram criados para quem ama praticidade sem abrir mão do estilo. As peças se harmonizam perfeitamente entre si, formando combinações elegantes e prontas para usar. Uma ótima opção para presentear ou renovar o visual com muito bom gosto.',
  path: '/categorias/kits',
  type: 'kit',
}
export const categories: Category[] = [earrings, necklaces, kits]
