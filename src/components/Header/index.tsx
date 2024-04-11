"use client";

import React, { useEffect, useState } from 'react'
import ThemeToggle from "../ThemeProvider/ThemeToggle"
import Logo from "../Logo"
import NavLinks from "./components/NavLinks"
import MobileNav from "./components/MobileNav"
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 5 ? setHeader(true) : setHeader(false)
    });

    return () => window.removeEventListener("scroll", scrollYPos!)
  })

  return (
    <header className={`${header
      ? "py-4 bg-white shadow-lg dark:bg-accent"
      : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9f5]"}`}
    >
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <NavLinks
              lineStyles="relative hover:text-primary transition-all"
              classNames="hidden lg:flex gap-x-8 items-center"
              underLineStlyes="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggle />
            {/* Mobile Nav  */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
