"use client";
import Image from "next/image";
import React from "react";
import profile from "@/assets/profile.jpg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section>
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
              src={profile}
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
              delay: 0.5,
            }}
            className="text-3xl absolute bottom-2 right-0"
          >
            🎯
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
