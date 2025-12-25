'use client'

import { categories } from '@/constants/categories'
import { generalInfo } from '@/constants/general-info'
import { navbarItems } from '@/constants/navbar-items'
import { Facebook, Instagram, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'

export default function Footer() {
  const footerLabel = (
    <p className="text-lg font-semibold text-white">
      Biscuit <span className="text-main-pink ">Bijux</span>
    </p>
  )
  const footerDescription =
    'Joias delicadas feitas com amor para mulheres que brilham. ✨'
  const socials = [
    {
      name: 'facebook',
      icon: <Facebook />,
      url: generalInfo.facebook,
    },
    { name: 'instagram', icon: <Instagram />, url: generalInfo.instagram },
    { name: 'email', icon: <Mail />, url: `mailto:${generalInfo.email}` },
  ]
  const items = navbarItems
    .filter(
      (item: any) => item.name != 'Destaques' && item.name != 'Categorias',
    )
    .flatMap((item: any) => {
      if (item.hasSubs && item.subItems?.length) {
        return item.subItems
      }
      return item
    })
  const contact = [
    {
      name: 'email',
      value: generalInfo.email,
    },
    { name: 'phone', value: generalInfo.phone },
    { name: 'region', value: generalInfo.region },
  ]
  const bottomText = 'Feito com ❤️ por Encanto Joias'
  const allrightText = '© 2025 Todos os direitos reservados'
  return (
    <footer className="bg-main-dark-red px-5 py-14 text-white flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-2">
          <Sparkles className=" size-6" />
          {footerLabel}
        </div>
        <div className="font-sans">{footerDescription}</div>
        <div className="flex items-center gap-x-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url!}
              className="hover:text-main-red transition duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold">Categorias</h1>
        <div className="flex flex-col gap-y-1">
          {categories.map((category) => (
            <Link
              href={category.path}
              className="font-sans text-sm hover:text-main-red transition duration-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold">Informações</h1>
          <div className="flex flex-col gap-y-1">
            {items.map((item: any) => (
              <Link
                href={item.path!}
                className="font-sans text-sm hover:text-main-red transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-bold">Contato</h1>
            <div className="flex flex-col gap-y-1">
              {contact.map((item: any) => (
                <p className="font-sans text-sm hover:text-main-red transition duration-200">
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="text-center font-sans text-sm">
        <p>{bottomText}</p>
        <p>{allrightText}</p>
      </div>
    </footer>
  )
}
