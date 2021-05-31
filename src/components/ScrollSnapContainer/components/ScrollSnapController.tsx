import { MouseEvent, RefObject } from 'react';
import { Section } from '../types/Section';

export const ScrollSnapController = ({
  sections,
  onSelect,
}: {
  sections?: any[],
  onSelect: (section: Section) => void
}) => {
  console.log(sections);

  return (
    <div className="ss controller right">
      <div className={'selector-container'}>
        {
          sections && sections.map((section: any, index: number) => (
            <a
              key={index}
              href="#"
              className="selector"
              onClick={(event: MouseEvent) => onSelect(section)}
            ></a>
          ))
        }
      </div>
    </div>
  );
};

export default ScrollSnapController;
