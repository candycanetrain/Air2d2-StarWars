import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import {login, logout} from './actions/session_actions';
import * as ReviewUtil from './util/review_api_util';
import {selectRoom} from './reducers/selectors';

import {fetchRooms, fetchRoom} from './actions/room_actions';
window.createReview = ReviewUtil.createReview;
window.fetchReviews = ReviewUtil.fetchReviews;
window.fetchReview = ReviewUtil.fetchReview;

const windowFunctions = {login, logout, selectRoom};
Object.assign(window, windowFunctions);

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