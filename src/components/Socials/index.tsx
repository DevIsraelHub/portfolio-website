"use client";
import { socialLink } from "@/constants";
import Link from "next/link";
import React from 'react'

type SocialProps = {
  classNames?: string;
  iconStyles?: string;
}
const Socials = ({ classNames, iconStyles }: SocialProps) => {
  return (
    <div className={`${classNames}`}>
      {socialLink.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className={`${iconStyles}`}>
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Socials
