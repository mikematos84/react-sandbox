import { Section } from '../types/Section';
import { BaseScrollSnapProps } from './BaseScrollSnapProps';


export interface ScrollSnapContainerProps extends BaseScrollSnapProps {
  sections?: Section[]
}
