import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';

// CSS
import 'bootstrap-loader';
import '../src/styles/core.scss';

// Load all files ending in Stories.js
const req = require.context('../src/', true, /Stories\.js$/);

// Wrap all components in a container, and vertically center them.
// TODO: Upgrade Storybook when https://github.com/kadirahq/react-storybook/issues/284 is fixed
// (Currently applies decorator on every HMR reload)
addDecorator(story => (
  <div className="container">
    <div className="row storybook-container">
      {story()}
    </div>
  </div>
));

configure(() => {
  req.keys().forEach(req);
}, module);
