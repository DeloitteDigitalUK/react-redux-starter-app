import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Weather from './Weather.js';
import { belfastWeather} from '../../routes/Weather/modules/WeatherHelper.js'

const weather = {
  "weather":  belfastWeather
};

storiesOf('Weather', module)
  .add('Default State', () => (
    <div className="col-xs-10 col-xs-offset-1">
      <Weather {...weather} />
    </div>
  ));
