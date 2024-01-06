import { useEffect } from "react";
import { useActiveSectionContext } from "./useActiveSectionContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

type useActiveInViewProps = {
  SectionName: SectionName;
  threshold: number;
};

const useActiveInView = ({ SectionName, threshold = 0.75 }: useActiveInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [SectionName, inView, setActiveSection, timeOfLastClick]);
  return { ref };
};

export default useActiveInView;
