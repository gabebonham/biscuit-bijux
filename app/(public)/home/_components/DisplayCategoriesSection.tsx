'use client'

import { categories } from '@/constants/categories'
import CategoryDisplayCard from './CategoryDisplayCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function DisplayCategoriesSection() {
  return (
    <section className="flex flex-col gap-y-8 px-4 bg-main-dark-red/10 py-14">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-2xl">Explore nossas categorias</h1>
        <p className="font-sans text-gray-500">
          Encontre a joia perfeita para cada momento
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryDisplayCard key={category.id} category={category} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href={'/categorias'}
          className="flex items-center gap-x-2 group text-main-red font-sans"
        >
          Ver todas as categorias{' '}
          <ArrowRight className="size-5 group-hover:translate-x-2 transition-all" />
        </Link>
      </div>
    </section>
  )
}
