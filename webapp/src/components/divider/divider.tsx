"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";

type DividerProps = {
  classNames?: string;
}
const Divider: FC<DividerProps> = ({ classNames }) => {
  return (
    <motion.div
      className={`bg-gray-200 h-16 w-1 rounded-full hidden sm:block ${classNames}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
};
export default Divider;
