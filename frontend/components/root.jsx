import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//react components below
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import RoomIndexContainer from './rooms/room_index_container';
import CurrentRoomShowContainer from './current_room_show/current_room_show_container';
import RoomMap from './room_map/room_map';
import Home from './home';


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
          <IndexRoute component={ Home} />
          <Route path="/rooms/:roomId" component={CurrentRoomShowContainer} />
          <Route path="/search" component={RoomIndexContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
export default Root;
