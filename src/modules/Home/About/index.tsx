"use client";

import React from 'react'
import BannerImage from "../components/BannerImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { infoData, qualificationData, skillData } from "@/constants";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import SkillsImages from "../components/SkillsImages";

const About = () => {
  const getData = (arr: typeof qualificationData | typeof skillData, title: string) => {
    return arr.find((item) => item.title === title)
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <BannerImage
              classNames="bg-about_shape_light w-[505px] h-[505px] bg-no-repeat relative"
              imageSrc="/about/developer.jpg"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full dark:bg-secondary grid xl:grid-cols-3 xl:max-w-[520px] bg-secondary border dark:border-none">
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I Specialize in crafting intuitive website with cutting-edge technology, delivering dynamic and engaging user experience.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {
                        infoData.map((item, index) => (
                          <div key={index} className="flex items-center text-left gap-x-4">
                            <div className="text-primary">
                              {item.icon}
                            </div>
                            <div>{item.text}</div>
                          </div>
                        ))
                      }
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <h1 className="text-primary">Language Skill</h1>
                      <div className="border-b border-border"></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awsome Journey
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience")?.title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "experience")?.data.map((item: any, index) => {
                          return (
                            <div key={index} className="flex gap-x-8 group">
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-medium text-xl leading-none mb-2">
                                  {item.company}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {item.role}
                                </div>
                                <div>{item.years}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, "experience")?.title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, "education")?.data.map((item: any, index) => {
                          return (
                            <div key={index} className="flex gap-x-8 group">
                              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                              </div>
                              <div>
                                <div className="font-medium text-xl leading-none mb-2">
                                  {item.university}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {item.role}
                                </div>
                                <div>{item.years}</div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map((item: any, index) => (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <p className="font-medium">{item.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div />
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map((item: any, index) => (
                          <SkillsImages key={index} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div >
    </section >
  )
}

export default About
