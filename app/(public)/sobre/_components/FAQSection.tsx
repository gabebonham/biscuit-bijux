'use client'

import GeralAccordeon from '@/components/shared/GeralAccordeon'

export default function FAQSection() {
  const faqList = [
    {
      id: 0,
      question: 'Quais materiais são usados nas joias?',
      awnser:
        'Trabalhamos com prata 925, ouro 18k, pedras naturais e semipreciosas. Todas as nossas peças passam por rigoroso controle de qualidade.',
    },
    {
      id: 1,
      question: 'Como cuidar das minhas joias?',
      awnser:
        'Evite contato com produtos químicos, perfumes e água. Guarde as peças em local seco e separadas para evitar arranhões. Limpe com flanela macia.',
    },
    {
      id: 2,
      question: 'Posso trocar ou devolver?',
      awnser:
        'Sim! Você tem até 7 dias após o recebimento para solicitar troca ou devolução, desde que o produto esteja em perfeito estado e com embalagem original.',
    },
    {
      id: 3,
      question: 'Vocês fazem ajuste de tamanho em anéis?',
      awnser:
        'Sim, oferecemos serviço de ajuste para anéis. Entre em contato conosco para mais informações sobre prazos e valores.',
    },
    {
      id: 4,
      question: 'As joias possuem garantia?',
      awnser:
        'Todas as nossas peças possuem garantia de 6 meses contra defeitos de fabricação.',
    },
  ]
  return (
    <section className="flex flex-col gap-y-12 px-5 py-12">
      <div>
        <h1 className="text-2xl font-bold text-center">Perguntas Frequentes</h1>
      </div>
      <div>
        <GeralAccordeon accordeonList={faqList as any[]} />
      </div>
    </section>
  )
}
