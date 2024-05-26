import { siteOwner } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="uppercase text-xl font-black text-primary w-[180px]">
      <Image
        width={50}
        height={50}
        className="w-full h-full"
        src="/vicki-full-logo.svg"
        alt={`${siteOwner} logo`}
      />
    </Link>
  )
}

export default Logo
