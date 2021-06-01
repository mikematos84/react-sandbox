import React from 'react';
import { ScrollSnapSectionProps } from "../types";

export const ScrollSnapSection = React.forwardRef<HTMLScriptElement, any>((props: ScrollSnapSectionProps, ref) => {
  return (
    <section className="ss section" ref={ref}>
      {props.children}
    </section>
  );
});

export default ScrollSnapSection;
