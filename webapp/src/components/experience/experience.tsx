"use client";
import React, { Fragment } from "react";
import Heading from "../heading/heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import useActiveInView from "@/hooks/useActiveInView";

const Experience = () => {
  const { ref } = useActiveInView({ SectionName: "Experience", threshold: 0.5 });

  return (
    <section id="experience" ref={ref} className="scroll-mt-29 mb-28 sm:mb-40">
      <Heading>my experience</Heading>
      <VerticalTimeline lineColor="">
        {experiencesData.map(
          ({ id, title, description, location, date, icon }) => (
            <Fragment key={id}>
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem  solid #9ca3af",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="font-normal !mt-0">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
