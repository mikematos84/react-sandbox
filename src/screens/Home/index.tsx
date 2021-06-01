import React from 'react';
import { Link } from "react-router-dom";
import { DemoRouteProps, useDemoRoutes } from '../../hooks/useDemoRoutes';

export const Home = (props: any) => {
  const { routes } = useDemoRoutes();
  return (
    <div className={"page"}>
      <h1>Demos</h1>
      <ol>
        {
          routes.map((route: DemoRouteProps, index: number) => (
            <li key={index}>
              <Link to={route.path}>Scroll Snap Container Demo</Link>
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default Home;