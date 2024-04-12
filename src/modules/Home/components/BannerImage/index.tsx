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
        priority
        alt={`${siteOwner} image`}
      />
    </div>
  )
}

export default BannerImage
