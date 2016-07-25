import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CardView from './index.js';

import logo from '../../images/bootstrap-logo.png';

storiesOf('CardView', module)
  .add('Text Only', () => (
    <div className="col-xs-4 col-xs-offset-4">
      <CardView
        title="My Bootstrap Card"
        text="This is an example of a React component for a Bootstrap card."
      />
    </div>
  ))
  .add('With Button', () => (
    <div className="col-xs-4 col-xs-offset-4">
      <CardView
        title="My Bootstrap Card"
        text="This is an example of a React component for a Bootstrap card."
        buttonUrl="http://v4-alpha.getbootstrap.com/components/card"
        buttonText="View Docs"
      />
    </div>
  ))
  .add('With Image', () => (
    <div className="col-xs-4 col-xs-offset-4">
      <CardView
        title="My Bootstrap Card"
        text="This is an example of a React component for a Bootstrap card."
        imageUrl={logo}
        imageAlt="Bootstrap Logo."
      />
    </div>
  ))
  .add('With Everything', () => (
    <div className="col-xs-4 col-xs-offset-4">
      <CardView
        title="My Bootstrap Card"
        text="This is an example of a React component for a Bootstrap card."
        imageUrl={logo}
        imageAlt="Bootstrap Logo."
        buttonUrl="http://v4-alpha.getbootstrap.com/components/card"
        buttonText="View Docs"
      />
    </div>
  ));
