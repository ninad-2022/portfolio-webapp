import React, { FC, ReactNode } from "react";

const Heading: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-3-xl font-medium capitalize mb-8 sm:mb-40">
      {children}
    </h2>
  );
};
export default Heading;
