import React from 'react';
import { IndexLink } from 'react-router';
import classes from './Header.scss';

export const Header = () => (
  <div>
    <h1>React Redux Starter App</h1>
    <ul>
      <li>
        <IndexLink to="/" activeClassName={classes.activeRoute}>
          Home
        </IndexLink>
      </li>
    </ul>
  </div>
);

export default Header;
