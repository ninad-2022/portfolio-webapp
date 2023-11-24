import React, { FC, Fragment } from "react";
import Heading from "@/components/heading/heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project/project";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = () => {
  return (
    <section>
      <Heading>My Projects</Heading>
      <div>
        {Array.isArray(projectsData) && projectsData.map((project) => (
            <Fragment key={project.id}>
              <Project {...project} />
            </Fragment>
          ))}
      </div>
    </section>
  );
};

export default Projects;
