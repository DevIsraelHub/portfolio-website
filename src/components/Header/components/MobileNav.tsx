import Logo from "@/components/Logo"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import React from 'react'
import Socials from "@/components/Socials"
import Link from "next/link"
import { NavItems } from "@/constants"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <SheetClose>
              <Logo />
            </SheetClose>
            <div className="flex flex-col items-center justify-center gap-y-10">
              {
                NavItems.map((item, index) => (
                  <SheetClose asChild>
                    <Link href={item.href} className="text-2xl hover:text-primary transition-all">
                      {item.name}
                    </Link>
                  </SheetClose>
                ))
              }
            </div>
            <Socials classNames="flex gap-x-4" iconStyles="hover:text-primary text-2xl transition-all" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
