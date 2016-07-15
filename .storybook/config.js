import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';

// CSS
import 'bootstrap-loader';
import '../src/styles/core.scss';

// Load all files ending in Story.js
const req = require.context('../src/', true, /Stories\.js$/);

// Wrapp all components in a container for easiness.
addDecorator(story => (
  <div className="container">
    <div className="row">
      {story()}
    </div>
  </div>
));

configure(() => {
  req.keys().forEach(req);
}, module);
