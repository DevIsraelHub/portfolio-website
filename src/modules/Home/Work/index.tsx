"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { projectData } from "@/constants";

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto text-center xl:h-[400px] flex flex-col justify-center mb-12 xl:mb-0 items-center xl:items-start">
          <h2 className="section-title mx-auto text-center">Latest Projects</h2>
          <p className="subtitle mb-8">This are some of the projects I&apos;ve built and worked on</p>
          <Button asChild className="mx-auto">
            <Link href="/projects">
              All Projects
            </Link>
          </Button>
        </div>
        <div className="xl:mx-w-[1000px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              800: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {
              projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
