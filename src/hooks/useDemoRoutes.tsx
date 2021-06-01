import React from 'react';
import _ from 'lodash';

import ScrollSnapContainerDemo from '../screens/Demos/ScrollSnapContainer';

const defaultDemos: React.ComponentType[] = [
  ScrollSnapContainerDemo
]

export type DemoRouteProps = {
  path: string,
  component: React.ComponentType
}

export const useDemoRoutes = (initialDemos: React.ComponentType[] = defaultDemos) => {
  const [demos, setDemos] = React.useState<React.ComponentType[]>(initialDemos || []);
  const [routes, setRoutes] = React.useState<DemoRouteProps[]>([]);

  React.useEffect(() => {
    let routes = demos.map((Component: React.ComponentType, index: number) => ({
      path: `/demos/${_.kebabCase(Component.name)}`,
      component: Component,
    }));
    setRoutes(routes);
  }, [demos]);

  return { routes, setDemos };
};
