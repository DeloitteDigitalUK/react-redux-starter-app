import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const AppContainer = (props) => {
  const { history, routes, routerKey, store } = props;

  /* eslint-disable react/no-children-prop */
  return (
    <Provider store={store}>
      <div style={{ height: '100%' }}>
        <Router history={history} children={routes} key={routerKey} />
      </div>
    </Provider>
  );
  /* eslint-enable react/no-children-prop */
};

AppContainer.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  routerKey: PropTypes.number,
  store: PropTypes.object.isRequired,
};

export default AppContainer;
