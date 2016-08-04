import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Search from './index.js';

storiesOf('Search', module)
	.add('Default State', () => (
		<div className="col-xs-8 col-xs-offset-2">
			<Search heading="Search GitHub"
  buttonText="Search"
   />
		</div>
	))
	.add('With A Valid Search Term', () => (
		<div className="col-xs-8 col-xs-offset-2">
		<Search heading="Search GitHub"
  inputValue="React"
  buttonText="Search"
  />
		</div>
	))
	.add('With an invalid Character', () => (
		<div className="col-xs-8 col-xs-offset-2">
			<Search heading="Search GitHub"
  inputValue="~"
  buttonText="Search"
  errorMessage="You have entered a forbidden character!"
   />
		</div>
	))
	.add('Submitted without entering anything', () => (
		<div className="col-xs-8 col-xs-offset-2">
			<Search heading="Search GitHub"
  buttonText="Search"
  errorMessage="You need to enter search criteria before submitting"
   />
		</div>
	))
	.add('Clicking off Search box', () => (
		<div className="col-xs-8 col-xs-offset-2">
			<Search heading="Search GitHub"
  buttonText="Search"
  errorMessage="Please enter search criteria"
   />
		</div>
	));
