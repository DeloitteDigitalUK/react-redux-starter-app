import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
  </Route>
);
