
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from '../layouts/CoreLayout/CoreLayout';
import Home from './Home';
import Detail from './Detail';
import WeatherPage from './Weather';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} />
    <Route path="/details/:id" component={Detail} />
    <Route path="/weather" component={WeatherPage} />
  </Route>

);
