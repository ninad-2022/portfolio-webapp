"use client";
import Image from "next/image";
import React, { FC, Validator } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import PropTypes from "prop-types";
interface IntroProps {
  name: string;
  description: string;
  contactLink: string;
  cvLink: string;
  linkedinLink: string;
  githubLink: string;
  profileImg: object;
}

const Intro: FC<IntroProps> = ({
  name,
  description,
  contactLink,
  cvLink,
  linkedinLink,
  githubLink,
  profileImg,
}) => {
  console.log("profileImg: ", profileImg);
  return (
    <section className="mb-28 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              height="150"
              quality="95"
              alt="profile-picture"
              className="rounded-full border-4 border-10 border-white shadow-slate-600"
              priority={true}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-3xl absolute bottom-2 right-0"
          >
            🎯
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 mb-10 px-4 text-2xl font-light !leading-[1.5]"
      >
        <span className="font-bold">{`Hello, I am ${name}`}</span>
        {` ${description}`}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-2 justify-center align-middle px-4 text-lg font-medium sm:flex-row "
      >
        <Link
          href={contactLink}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover: translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href={cvLink}
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href={linkedinLink}
          target="_blank"
          className="bg-white p-4 text-grey-700 flex items-center justify-center gap-2 rounded-full focus:scale-[1.10] hover:text-gray-950 hover:scale-[1.10] transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href={githubLink}
          target="_blank"
          className="bg-white p-4 text-grey-700 flex items-center justify-center gap-2 rounded-full focus:scale-[1.10] hover:text-gray-950 hover:scale-[1.10] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

Intro.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contactLink: PropTypes.string.isRequired,
  cvLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  profileImg: PropTypes.object.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Intro;
