'use client'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { DialogTitle } from '@radix-ui/react-dialog'
type Props = {
  icon?: React.ReactNode
  label?: string
  navbarItems: any[]
}
export default function NavDrawerMobile({ icon, label, navbarItems }: Props) {
  if (!navbarItems) return <div></div>
  const items = navbarItems.flatMap((item) => {
    if (item.hasSubs && item.subItems?.length) {
      return item.subItems
    }
    return item
  })
  return (
    <Drawer direction="left">
      <DrawerTrigger>{icon ? icon : label}</DrawerTrigger>
      <DrawerContent className="bg-main-dark-red z-90">
        <DialogTitle></DialogTitle>
        <DrawerHeader>
          <Separator />
          <DrawerDescription className="flex flex-col text-xl text-white gap-y-2 py-4">
            {items.map((item: any) => (
              <Link key={item.name} href={item.path}>
                {item.name}
              </Link>
            ))}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
