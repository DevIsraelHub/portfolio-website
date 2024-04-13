import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

type ProjectProps = {
  image: string;
  category: string;
  name: string;
  descripiton: string;
  link: string;
  github: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg:tertiary dark:bg-secondary/40 xl:bg-work_bg_light xl:bg-[110%] bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={247}
            height={250}
            className="absolute bottom-0 shadow-2xl"
          />
          <div className="flex gap-x-4">
            <Link href={project.link} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 shadow-xl group-hover:opacity-100 transition-all">
              <Link2Icon className="text-xl" />
            </Link>
            <Link href={project.github} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 shadow-xl group-hover:opacity-100 transition-all">
              <Github className="text-xl" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.descripiton}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
