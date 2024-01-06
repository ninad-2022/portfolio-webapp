"use client";
import React, { FC, Fragment, useEffect } from "react";
import Heading from "@/components/heading/heading";
import ProjectList from "@/components/project/projectList";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { useInView } from "react-intersection-observer";
import useActiveInView from "@/hooks/useActiveInView";

type Tag = {
  id: number;
  name: string;
};

type ProjectData = {
  id: number;
  title: string;
  description: string;
  tags: readonly Tag[];
  imageUrl: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
  };
};
type ProjectsProps = {
  heading: string;
  projectsData: ProjectData;
};

const Projects: FC<ProjectsProps> = ({ heading, projectsData }) => {
  const { ref } = useActiveInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-3">
      <Heading>{heading}</Heading>
      <div>
        {Array.isArray(projectsData) &&
          projectsData.map((project) => (
            <Fragment key={project.id}>
              <ProjectList {...project} />
            </Fragment>
          ))}
      </div>
    </section>
  );
};

export default Projects;
