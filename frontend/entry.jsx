import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';
import {fetchReviews, fetchReview, createReview} from './actions/review_actions';
import {fetchBookings, fetchBooking, createBooking} from './actions/booking_actions';
import * as ReviewUtil from './util/review_api_util';
import {selectRoom} from './reducers/selectors';

import {fetchRooms, fetchRoom} from './actions/room_actions';
window.createReview = createReview;
window.fetchReviews = fetchReviews;
window.fetchReview = fetchReview;
window.fetchBookings = fetchBookings;
window.fetchBooking = fetchBooking;


const windowFunctions = {selectRoom};
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