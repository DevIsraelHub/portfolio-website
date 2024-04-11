"use client";
import React from 'react'
import Link from "next/link";
import { NavItems } from "@/constants";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavLinksProps = {
  classNames?: string;
  lineStyles?: string;
  underLineStlyes?: string;
}
const NavLinks = ({ classNames, lineStyles, underLineStlyes }: NavLinksProps) => {
  const pathname = usePathname()

  return (
    <div className={`${classNames}`}>
      {
        NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`capitalize ${lineStyles}`}
          >
            {item.href === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStlyes}`}
              />
            )}
            {item.name}
          </Link>
        ))
      }
    </div>
  )
}

export default NavLinks
