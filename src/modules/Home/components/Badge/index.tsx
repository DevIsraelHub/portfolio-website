"use client";

import React from 'react';
import CountUp from "react-countup"

type BadgeProps = {
  classNames?: string;
  icon: React.JSX.Element;
  endCountNum?: number;
  endCountText?: string;
  badgeText?: string;
}
const Badge = ({
  classNames,
  icon,
  endCountNum,
  endCountText,
  badgeText
}: BadgeProps) => {
  return (
    <div className={`badge ${classNames}  dark:bg-card/10`}>
      <div className="text-xl sm:text-2xl md:text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-xl sm:text-2xl md:text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum!} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-xs sm:text-sm md:text-[15px] font-medium text-muted-foreground">
          {badgeText}
        </div>
      </div>
    </div>
  )
}

export default Badge
