'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const heroHeading = (
    <h2 className="text-center font-bold text-4xl/12 ">
      Joias que contam{' '}
      <span className="bg-gradient-to-r from-main-red to-main-orange bg-clip-text text-transparent">
        histórias de amor.
      </span>
    </h2>
  )
  const heroDescription =
    'Descubra peças delicadas e encantadoras, feitas com carinho para mulheres que brilham de dentro para fora.'
  return (
    <section className="bg-main-red/15 px-3 py-12">
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center justify-center">
          <div className="w-11/12">{heroHeading}</div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center font-sans  font-semibold text-lg">
            {heroDescription}
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-y-4 font-sans">
            <Button className="flex rounded-lg text-lg font-semibold w-full h-14 items-center gap-x-4 bg-main-dark-red border-2 border-main-dark-red">
              Ver Coleção <ArrowRight />
            </Button>
            <Button className="flex rounded-lg text-lg font-semibold w-full h-14 items-center  text-main-dark-red gap-x-4 bg-transparent border-2 border-main-dark-red">
              Novidades <Sparkles />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
