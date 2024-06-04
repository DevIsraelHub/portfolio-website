import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, Download, ListTodo, Send, SmilePlus } from "lucide-react"
import Link from "next/link";
import React from 'react';
import BannerImage from "../components/BannerImage";
import Badge from "../components/Badge";
import { siteOwner } from "@/constants";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-full xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-6 xl:flex-row justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h2 className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Software Developer</h2>
            <h1 className="h1">Hello, my name is {siteOwner}
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Hey, I&apos;m an experienced and a degree holder software developer skilled in writing python code.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Button asChild className="gap-x-2">
                <Link href="/contact">
                  Contact me <Send size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-x-2 bg-transparent">
                <Link download={true} href="/vicki-resume.pdf">
                  Download Cv <Download size={18} />
                </Link>
              </Button>
            </div>
            <Socials
              classNames="flex items-center gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:fill-primary hover:text-primary transition-all"
            />
          </div>
          <div className="w-full max-w-[500px] mx-auto flex relative">
            <Badge
              classNames="absolute top-[65%] sm:top-[24%] -left-[1.5rem] sm:-left-[5rem]"
              icon={<Briefcase />}
              endCountNum={3}
              badgeText="Years Of Experince"
            />
            <Badge
              classNames="absolute top-[85%] sm:top-[80%] left-[50%] sm:-left-[1rem]"
              icon={<ListTodo />}
              endCountNum={70}
              // endCountText="k"
              badgeText="Projects Completed"
            />
            <Badge
              classNames="absolute opacity-0 sm:opacity-100 top-[40%] sm:top-[55%] -right-8"
              icon={<SmilePlus />}
              endCountNum={26}
              badgeText="Happy Clients"
            />
            <div className="w-full aspect-square overflow-hidden h-[500px] bg-no-repeat rounded-full absolute -top-1 -right-2">
            </div>
            <BannerImage
              classNames="w-full h-full aspect-square bg-no-repeat relative bg-bottom"
              imageSrc="/hero/vicki.jpg"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-36 xl:bottom-12 animate-bounce">
          <ChevronDown className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
