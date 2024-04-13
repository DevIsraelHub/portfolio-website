import Image from "next/image"
import React from 'react'

const SkillsImages = ({ item }: any) => {
  return (
    <Image
      height={48}
      width={48}
      src={item.imgPath}
      alt={"skills images"}
      priority
    />
  )
}

export default SkillsImages
