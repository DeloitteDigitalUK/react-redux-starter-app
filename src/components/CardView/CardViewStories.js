import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CardView from './index.js';

import logo from '../../static/images/bootstrap-logo.png';

storiesOf('CardView', module)
  .addDecorator(story =>
    <div className="col-xs-4 col-xs-offset-4">
      {story()}
    </div>
  )
  .add('Text Only', () => (
    <CardView
      title="My Bootstrap Card"
      text="This is an example of a React component for a Bootstrap card."
    />
  ))
  .add('With Button', () => (
    <CardView
      title="My Bootstrap Card"
      text="This is an example of a React component for a Bootstrap card."
      buttonUrl="http://v4-alpha.getbootstrap.com/components/card"
      buttonText="View Docs"
    />
  ))
  .add('With Image', () => (
    <CardView
      title="My Bootstrap Card"
      text="This is an example of a React component for a Bootstrap card."
      imageUrl={logo}
      imageAlt="Bootstrap Logo."
    />
  ))
  .add('With Everything', () => (
    <CardView
      title="My Bootstrap Card"
      text="This is an example of a React component for a Bootstrap card."
      imageUrl={logo}
      imageAlt="Bootstrap Logo."
      buttonUrl="http://v4-alpha.getbootstrap.com/components/card"
      buttonText="View Docs"
    />
  ));
