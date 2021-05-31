import { RefObject } from 'react';

export interface Section {
  title?: string;
  body?: string[];
  ref: RefObject<HTMLScriptElement>;
}
