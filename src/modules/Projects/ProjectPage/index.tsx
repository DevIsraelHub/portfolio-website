"use client";

import React, { useState } from 'react';
import { projectData } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/modules/Home/components/ProjectCard";

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];
const ProjectPage = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState("all projects")

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] dark:bg-secondary mb-12 mx-auto border dark:border-none">
            {
              categories.map((category, index) => (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              ))
            }
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {
              filteredProjects.map((project, index) => (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default ProjectPage
