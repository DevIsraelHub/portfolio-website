import { siteOwner } from "@/constants";
import Image from "next/image";
import React from 'react'

type BannerImageProps = {
  classNames?: string;
  imageSrc: string;
}
const BannerImage = ({ classNames, imageSrc }: BannerImageProps) => {
  return (
    <div className={classNames}>
      <Image
        src={imageSrc!}
        fill
        className="rounded-full object-cover"
        priority
        alt={`${siteOwner} image`}
      />
    </div>
  )
}

export default BannerImage
