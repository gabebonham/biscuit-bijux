'use client'

import { Gem, Heart, Sparkle, Sparkles } from 'lucide-react'

export default function QualitiesSection() {
  return (
    <section className="px-4 py-20">
      <div className="flex flex-col gap-y-8 justify-center items-center text-center">
        <div className="flex flex-col gap-y-3 justify-center items-center">
          <Sparkles className="size-8 fill-main-yellow" />
          <div>
            <h1 className="font-semibold">Qualidade Premium</h1>
            <p className="font-sans text-gray-500">
              Prata 925 e materiais de alta qualidade.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 justify-center items-center">
          <Heart className="size-8 fill-main-red" />
          <div>
            <h1 className="font-semibold">Emabalagem Especial</h1>
            <p className="font-sans text-gray-500">
              Cada peça em caixinha de presente.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 justify-center items-center">
          <Gem className="size-8 " />
          <div>
            <h1 className="font-semibold">Durabilidade Garantida</h1>
            <p className="font-sans text-gray-500">
              Acabamento reforçado para manter o brilho e a beleza por muito
              mais tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
