'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const heroHeading = 'Joias que contam histórias de amor.'
  const heroDescription =
    'Descubra peças delicadas e encantadoras, feitas com carinho para mulheres que brilham de dentro para fora.'
  return (
    <section className="bg-main-red/20">
      <div>
        <div>
          <h2>{heroHeading}</h2>
        </div>
        <div>
          <p>{heroDescription}</p>
        </div>
        <div>
          <div>
            <Button className="flex items-center gap-x-4">
              Ver Coleção <ArrowRight />
            </Button>
            <Button className="flex items-center gap-x-4">
              Novidades <Sparkles />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
