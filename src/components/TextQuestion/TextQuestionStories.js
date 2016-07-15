import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TextQuestion from './index.js';

storiesOf('TextQuestion', module)
  .add('Default State', () => (
    <div className="col-xs-8 col-xs-offset-2">
      <TextQuestion label="First Name" />
    </div>
  ))
  .add('With a Value', () => (
    <div className="col-xs-8 col-xs-offset-2">
      <TextQuestion label="Last Name" value="Stark" />
    </div>
  ));
