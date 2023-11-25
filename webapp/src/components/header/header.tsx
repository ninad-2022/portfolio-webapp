"use client";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

type LinkData = {
  hash: string;
  name: string;
};

type HeaderPros = {
  links: LinkData[];
  headerClasses?: string;
  navStyles?: string;
  linkStyles?: string;
};

const Header: FC<HeaderPros> = ({
  links,
  headerClasses,
  navStyles,
  linkStyles,
}) => {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <header className={`z-[999] relative ${headerClasses}`}>
      <motion.div
        className="fixed top-0 left-1/2 h-[4.2rem] w-full rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className={`flex fixed top-[0.15rem] h-12 left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[inital] sm:py-0 ${navStyles}`}
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map(({ hash, name }) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={hash}
              initial={{ y: -100, x: "50%", opacity: 0 }}
              animate={{ y: 0, x: "50%", opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full justify-center items-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === name },
                  linkStyles
                )}
                href={hash}
                onClick={() => setActiveSection(name)}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
