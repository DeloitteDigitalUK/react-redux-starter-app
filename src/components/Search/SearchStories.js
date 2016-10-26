import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Search from './index';

storiesOf('Search', module)
  .addDecorator(story =>
    <div className="col-xs-8 col-xs-offset-2">
      {story()}
    </div>
  )
  .add('Default State', () => (
    <Search
      heading="Search GitHub"
      buttonText="Search"
    />
  ))
  .add('With A Valid Search Term', () => (
    <Search
      heading="Search GitHub"
      inputValue="React"
      buttonText="Search"
    />
  ))
  .add('With an invalid Character', () => (
    <Search
      heading="Search GitHub"
      inputValue="~"
      buttonText="Search"
      errorMessage="You have entered a forbidden character!"
    />
  ))
  .add('Submitted without entering anything', () => (
    <Search
      heading="Search GitHub"
      buttonText="Search"
      errorMessage="You need to enter search criteria before submitting"
    />
  ))
  .add('Clicking off Search box', () => (
    <Search
      heading="Search GitHub"
      buttonText="Search"
      errorMessage="Please enter search criteria"
    />
  ));
