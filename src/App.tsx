import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import _ from 'lodash';

import { Home } from './screens/Home';
import { Error404 } from './screens/Error404';
import { DemoRouteProps, useDemoRoutes } from './hooks/useDemoRoutes';

function App() {
  const { routes } = useDemoRoutes();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/404" exact component={Error404} />
          {
            routes.map((route: DemoRouteProps, index: number) => (
              <Route key={index} path={route.path} exact component={route.component} />
            ))
          }
          <Route render={(props: RouteComponentProps) => <Redirect to={{ pathname: "/404" }} />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
