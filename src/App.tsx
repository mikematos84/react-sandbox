import React, { MouseEvent } from 'react';
import { ScrollSnapContainer, ScrollSnapController, ScrollSnapSection } from './components/ScrollSnapContainer';
import _ from 'lodash';
import { LoremIpsum } from 'lorem-ipsum';
import { Section } from './components/ScrollSnapContainer/types/Section';

const lorem = new LoremIpsum();
const sections = Array(3).fill(null).map((section: Section[], index: number) => (
  {
    title: `Page ${index + 1}`,
    body: Array(_.random(1, 20)).fill(null).map(p => lorem.generateParagraphs(1)),
    ref: React.createRef<HTMLScriptElement>()
  }
))

function App() {
  return (
    <ScrollSnapContainer sections={sections} />
  );
}

export default App;
