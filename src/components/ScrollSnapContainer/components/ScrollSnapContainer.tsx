import React from 'react';
import { ScrollSnapSection } from "..";
import { Section } from "../types/Section";
import { ScrollSnapContainerProps } from "../types/ScrollSnapContainerProps";
import ScrollSnapController from "./ScrollSnapController";

const ScrollSnapContainer = ({
  children,
  sections
}: ScrollSnapContainerProps) => {
  const container = React.useRef<HTMLDivElement>(null);

  const handleSelection = (section: Section) => {
    let top: number = section.ref?.current!.offsetTop || 0;
    container.current!.scrollTo({
      top,
      behavior: "smooth"
    })
  }

  return (
    <div className="ss container" ref={container}>
      {
        children
          ? children
          : sections?.map((section: Section, index: number) => (
            <ScrollSnapSection key={index} ref={section.ref} id={`section-${index + 1}`}>
              <h1>{section.title}</h1>
              {
                section.body && section.body.map((p: string, pIndex: number) => (
                  <p key={pIndex}>{p}</p>
                ))
              }
            </ScrollSnapSection>
          ))
      }
      <ScrollSnapController sections={sections} onSelect={handleSelection} />
    </div>
  );
};

export default ScrollSnapContainer;
