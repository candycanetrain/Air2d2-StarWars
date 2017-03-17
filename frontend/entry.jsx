import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import {login, logout} from './actions/session_actions';
import * as RoomAPIUtil from './util/room_api_util';

const windowFunctions = {login, logout};
Object.assign(window, windowFunctions);
window.fetchRooms = RoomAPIUtil.fetchRooms;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  Modal.setAppElement(document.body);
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  

  ReactDOM.render(<Root store={store}/>, root);
});