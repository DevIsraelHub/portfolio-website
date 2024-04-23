import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, Download, ListTodo, Send, SmilePlus } from "lucide-react"
import Link from "next/link";
import React from 'react';
import BannerImage from "../components/BannerImage";
import Badge from "../components/Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h2 className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</h2>
            <h1 className="h1">Hello, my name is Rodríguez collins
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatum provident aperiam accusantium dolorum autem aut aspernatur doloribus odit ipsam?
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Button asChild className="gap-x-2">
                <Link href="/contact">
                  Contact me <Send size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-x-2 bg-transparent">
                <Link href="/contact">
                  Download Cv <Download size={18} />
                </Link>
              </Button>
            </div>
            <Socials
              classNames="flex items-center gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:fill-primary hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              classNames="absolute top-[24%] -left-[5rem]"
              icon={<Briefcase />}
              endCountNum={3}
              badgeText="Years Of Experince"
            />
            <Badge
              classNames="absolute top-[80%] -left-[1rem]"
              icon={<ListTodo />}
              endCountNum={12}
              endCountText="k"
              badgeText="Projects Completed"
            />
            <Badge
              classNames="absolute top-[55%] -right-8"
              icon={<SmilePlus />}
              endCountNum={26}
              badgeText="Happy Clients"
            />
            <div className="bg-primary w-[500px] h-[500px] bg-no-repeat rounded-full absolute -top-1 -right-2">
            </div>
            <BannerImage
              classNames=" w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imageSrc="/hero/developer.png"
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
