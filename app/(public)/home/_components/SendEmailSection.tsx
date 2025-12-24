'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Heart } from 'lucide-react'

export default function SendEmailSection() {
  return (
    <section className="bg-main-red/10 px-3 py-12">
      <div className="flex flex-col items-center justify-center text-center gap-y-4">
        <Heart className="size-10 text-main-red" />
        <h1 className="font-bold text-xl">Quer fazer um pedido especial?</h1>
        <p className="font-sans text-gray-500">
          Entre em contato conosco por e-mail e conte o que você procura.
          Teremos prazer em ajudar a criar ou separar a peça ideal para você.
        </p>
        <div className="flex flex-col items-center gap-y-4 w-full">
          <Input
            className="bg-white font-sans border-black/50"
            placeholder="Seu melhor email..."
          />
          <Textarea
            className="bg-white font-sans border-black/50"
            placeholder="Sua mensagem..."
          />
          <Button className="cursor-pointer w-full bg-main-red font-sans font-semibold text-lg h-12 rounded-lg hover:bg-main-light-red transition">
            Enviar!
          </Button>
        </div>
      </div>
    </section>
  )
}
