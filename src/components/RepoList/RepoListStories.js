import React from 'react';
import { storiesOf } from '@kadira/storybook';
import _ from 'lodash';

import RepoList from './index';

const repo = {
  author: 'DeloitteDigitalUK',
  avatar: 'https://avatars.githubusercontent.com/u/10812267?v=3',
  description: 'Starter app with React, Redux, Webpack, CSS Modules, API calls etc.',
  name: 'react-redux-starter-app',
  starsCount: 3,
  url: 'https://github.com/DeloitteDigitalUK/react-redux-starter-app',
};

const repos = _.range(0, 5).map(i => ({
  id: i,
  ...repo,
}));

storiesOf('RepoList', module)
  .addDecorator(story =>
    <div className="col-xs-12">
      {story()}
    </div>
  )
  .add('Multiple Repos', () => (
    <RepoList
      isLoading={false}
      noReposText="No repositories to display."
      repos={repos}
    />
  ))
  .add('No Repos', () => (
    <RepoList
      isLoading={false}
      noReposText="No repositories to display."
      repos={[]}
    />
  ))
  .add('Loading', () => (
    <RepoList
      isLoading
      noReposText="No repositories to display."
      repos={undefined}
    />
  ));
