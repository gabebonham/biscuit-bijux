'use client'
import logo from '@/public/images/header-logo2.png'
import Image from 'next/image'
import NavDrawerMobile from './NavDrawerMobile'
import { Menu } from 'lucide-react'
import { navbarItems } from '@/constants/navbar-items'
export default function Header() {
  const headerTitle = (
    <p className="text-lg font-semibold">
      Biscuit <span className="text-main-pink ">Bijux</span>
    </p>
  )
  return (
    <header className="flex px-4 h-18 items-center justify-between w-full bg-main-dark-red text-white">
      <div className="flex">
        <NavDrawerMobile
          icon={<Menu className="size-6" />}
          navbarItems={navbarItems}
        />
      </div>
      <div className="flex items-center gap-x-2">
        <Image
          className="size-14"
          src={logo}
          alt="logo"
          width={494}
          height={505}
        />
        <div>{headerTitle}</div>
      </div>
      <div></div>
    </header>
  )
}
