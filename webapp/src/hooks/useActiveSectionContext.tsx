import { ActiveSectionContext } from "@/context/active-section-context";
import React, { useContext } from "react";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      "useActiveSectionContext must be used withing an ActiveSectionContextProvider"
    );

  return context;
};
