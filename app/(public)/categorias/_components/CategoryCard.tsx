'use client'

import { Card } from '@/components/ui/card'
import { Category } from '@/models/category.model'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ category }: { category: Category }) {
  const { description, id, name, path, type, imgUrl } = category
  return (
    <Link
      href={path}
      className="relative rounded-2xl cursor-pointer overflow-hidden p-0 aspect-square group inset-shadow-sm inset-shadow-indigo-500"
    >
      <Image
        width={600}
        height={600}
        src={imgUrl}
        alt="earring"
        className=" absolute inset-0 w-full h-full object-cover
           transition-transform duration-500 ease-in-out
           group-hover:scale-110 contrast-50 "
      />
      <div className="relative z-10 flex flex-col items-start justify-between px-6 h-full text-white py-8">
        <div></div>
        <div className="text-shadow-lg/50 space-y-2">
          <p className="font-bold text-2xl">{name}</p>
          <p className="flex items-center gap-x-2 group-hover:gap-x-3 transition-all duration-300 text-lg">
            Ver coleção <ArrowRight className="size-4 " />
          </p>
        </div>
      </div>
    </Link>
  )
}
