'use client'

import { categories } from '@/constants/categories'
import CategoryCard from './CategoryCard'
import { Sparkles } from 'lucide-react'

export default function CategoriesPage() {
  const title = 'Nossas Categorias'
  const description =
    'Descubra nossa coleção completa de joias encantadoras, organizadas para você encontrar exatamente o que procura'
  return (
    <section className="py-32 px-5 bg-main-red/5 flex flex-col gap-y-18">
      <div className="text-center flex flex-col gap-y-4 items-center">
        <div className="flex items-center gap-x-2 text-lg font-sans text-main-pink">
          <Sparkles className="size-5" />
          Explore
        </div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <h1 className="font-sans text-gray-600">{description}</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-8">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </section>
  )
}
