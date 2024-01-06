import React, { useEffect } from 'react'
import { useActiveSectionContext } from './useActiveSectionContext';
import { useInView } from 'react-intersection-observer';

const useActiveInView = (SectionName:string) => {

    const { ref, inView } = useInView({ threshold: 0.5 });
    const { setActiveSection } = useActiveSectionContext();
  
    useEffect(() => {
      if (inView) setActiveSection(SectionName);
    }, [SectionName, inView, setActiveSection]);
  return { ref }
}

export default useActiveInView