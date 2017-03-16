import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//react components below
import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser){
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
    </Provider>
  );
}
export default Root;
