import { siteOwner } from "@/constants"
import Link from "next/link"
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="uppercase text-xl font-black text-primary">
      {siteOwner}
    </Link>
  )
}

export default Logo
