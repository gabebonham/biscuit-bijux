'use client'

import { Card } from '@/components/ui/card'
import { generalInfo } from '@/constants/general-info'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactSection() {
  const contacts = [
    {
      name: 'Email',
      icon: <Mail className="text-main-pink" />,
      value: generalInfo.email,
    },
    {
      name: 'Telefone',
      icon: <Phone className="text-main-pink" />,
      value: generalInfo.phone,
    },
    {
      name: 'Endereço',
      icon: <MapPin className="text-main-pink" />,
      value: generalInfo.region,
    },
  ]
  return (
    <section className="grid grid-cols-1 gap-y-8 py-16">
      <h1 className="text-2xl text-center font-bold">Entre em Contato</h1>
      {contacts.map((contact) => (
        <Card className="w-full flex flex-col justify-center items-center gap-y-3 rounded-sm border-main-red/50">
          <div>{contact.icon}</div>
          <div>
            <p className="font-bold text-lg">{contact.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-sans">{contact.value}</p>
          </div>
        </Card>
      ))}
    </section>
  )
}
