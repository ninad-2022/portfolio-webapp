import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/assets/corpcomment.png";
import rmtdevImg from "@/assets/rmtdev.png";
import wordanalyticsImg from "@/assets/wordanalytics.png";

import html5Logo from "@/assets/skills/html-1.svg";
import cssLogo from "@/assets/skills/css-3.svg";
import cssLogo2 from "@/assets/skills/css-3.svg";
import scssLogo from "@/assets/skills/sass-1.svg";
import bootstrap5Logo from "@/assets/skills/bootstrap-5-1.svg";
import tailwindLogo from "@/assets/skills/tailwind-css-2.svg";
import muiLogo from "@/assets/skills/material-ui-1.svg";
import jsLogo from "@/assets/skills/javascript-1.svg";
import jsLogo2 from "@/assets/skills/logo-javascript.svg";
import tsLogo from "@/assets/skills/typescript.svg";
import reactjsLogo from "@/assets/skills/react-2.svg";
import reduxLogo from "@/assets/skills/redux.svg";
import nextjsLogo from "@/assets/skills/nextjs-2.svg";
import nodejsLogo1 from "@/assets/skills/nodejs-1.svg";
import nodejsLogo2 from "@/assets/skills/nodejs-3.svg";
import jwtLogo from "@/assets/skills/jwtio-json-web-token.svg";
import postmanLogo from "@/assets/skills/postman-icon.svg";
import mongodbLogo from "@/assets/skills/mongodb-icon-2.svg";
import mongodb2Logo from "@/assets/skills/mongodb-icon-2.svg";
import reddisLogo from "@/assets/skills/redis.svg";
import mssqlLogo from "@/assets/skills/microsoft-sql-server-1.svg";
import gitLogo from "@/assets/skills/git.svg";
import githubLogo from "@/assets/skills/github-icon-1.svg";
import bitbucketLogo from "@/assets/skills/bitbucket-blue.svg";
import debuggerLogo from "@/assets/skills/debug-alt-svgrepo-com.svg";
import debuuger2Logo from "@/assets/skills/debug-svgrepo-com.svg";

type LinkData = {
  hash: string;
  name: string;
};

type Skill = {
  id: number;
  title: string;
  imageUrl: string;
}

export const links: LinkData[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      { name: "React", id: 1 },
      { name: "Next.js", id: 2 },
      { name: "MongoDB", id: 3 },
      { name: "Tailwind", id: 4 },
      { name: "Prisma", id: 5 },
    ],
    imageUrl: corpcommentImg,
  },
  {
    id: 2,
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      { name: "React", id: 1 },
      { name: "Redux", id: 6 },
      { name: "Sql", id: 7 },
      { name: "Mssql", id: 8 },
      { name: "nodejs", id: 9 },
    ],
    imageUrl: rmtdevImg,
  },
  {
    id: 3,
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      { name: "Redux", id: 6 },
      { name: "Sql", id: 7 },
      { name: "nodejs", id: 9 },
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData: Skill[] = [
  { id: 1, title: 'HTML5', imageUrl: html5Logo },
  { id: 2, title: 'CSS', imageUrl: cssLogo },
  { id: 4, title: 'SCSS', imageUrl: scssLogo },
  { id: 5, title: 'Bootstrap 5', imageUrl: bootstrap5Logo },
  { id: 6, title: 'Tailwind CSS', imageUrl: tailwindLogo },
  { id: 7, title: 'Material-UI', imageUrl: muiLogo },
  { id: 9, title: 'JavaScript', imageUrl: jsLogo2 },
  { id: 10, title: 'TypeScript', imageUrl: tsLogo },
  { id: 11, title: 'React.js', imageUrl: reactjsLogo },
  { id: 12, title: 'Redux', imageUrl: reduxLogo },
  { id: 13, title: 'Next.js', imageUrl: nextjsLogo },
  { id: 15, title: 'Node.js', imageUrl: nodejsLogo2 },
  { id: 16, title: 'JWT.io', imageUrl: jwtLogo },
  { id: 17, title: 'Postman', imageUrl: postmanLogo },
  { id: 18, title: 'MongoDB', imageUrl: mongodbLogo },
  { id: 20, title: 'Redis', imageUrl: reddisLogo },
  { id: 21, title: 'Microsoft SQL Server', imageUrl: mssqlLogo },
  { id: 22, title: 'Git', imageUrl: gitLogo },
  { id: 23, title: 'GitHub', imageUrl: githubLogo },
  { id: 24, title: 'Bitbucket', imageUrl: bitbucketLogo },
  { id: 25, title: 'Debugger', imageUrl: debuggerLogo },
] as const;