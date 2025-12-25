'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {
  accordeonList: {
    id: number
    question: string
    awnser: string
  }[]
}
export default function GeralAccordeon({ accordeonList }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-0"
    >
      {accordeonList.map((item) => (
        <AccordionItem value={`item-${item.id.toString()}`}>
          <AccordionTrigger className="cursor-pointer hover:text-main-pink text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance font-sans text-gray-600">
            <p>{item.awnser}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
