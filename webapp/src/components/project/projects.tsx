import React, { FC, Fragment } from "react";
import Heading from "@/components/heading/heading";
import ProjectList from "@/components/project/projectList";

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
  return (
    <section>
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
