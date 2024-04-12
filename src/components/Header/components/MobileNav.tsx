import Logo from "@/components/Logo"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import React from 'react'
import NavLinks from "./NavLinks"
import Socials from "@/components/Socials"

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
            <NavLinks
              classNames="flex flex-col items-center gap-y-6"
              lineStyles="text-2xl hover:text-primary transition-all"
            />
            <Socials classNames="flex gap-x-4" iconStyles="hover:text-primary text-2xl transition-all" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav