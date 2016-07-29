import React from 'react';
import { storiesOf } from '@kadira/storybook';
import WeatherView from './WeatherView.js';
import { belfastWeather } from './WeatherFixture.js';

const weather = {
  weather:  belfastWeather
};

storiesOf('Weather', module)
  .add('Default State', () => (
    <div className="col-xs-10 col-xs-offset-1">
      <WeatherView {...weather} />
    </div>
  ));
