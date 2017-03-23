import {merge} from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const _initialState = Object.freeze({
  //should i have another object to hold "reviews"? reviews: ??
  reviews: [],
  errors: []
});

const reviewReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW: 
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, _initialState, {errors});
    default: 
      return state;    
  }
};






export default reviewReducer;