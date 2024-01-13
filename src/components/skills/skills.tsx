'use client'
import React, { Fragment } from "react";
import Heading from "../heading/heading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import useActiveInView from "@/hooks/useActiveInView";

const Skills = () => {
  const { ref } = useActiveInView({ SectionName: "skills",threshold: 0.75 });

  return (
    <section ref={ref} id="skills">
      <Heading>My Skills</Heading>
      <div className="flex gap-4 md:gap-8 w-[100%] md:px-60 md:justify-center flex-wrap">
        {skillsData.map(({ id, imageUrl, title }) => (
          <Fragment key={id}>
            <Image
              src={imageUrl}
              alt="skills-img"
              width="70"
              quality={99}
              className="hover:translate-x-2 hover:translate-y-2 transition-transform duration-300 hover:shadow-2xl"
              title={title}
              priority={true}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
