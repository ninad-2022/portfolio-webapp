"use client";
import { motion } from "framer-motion";
import React, { FC, Validator } from "react";
import PropTypes from "prop-types";

interface DividerProps {
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

Divider.propTypes = {
  classNames: PropTypes.string as Validator<string>,
};

export default Divider;
