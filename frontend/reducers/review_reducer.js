import {merge} from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/review_actions';

const _initialState = Object.freeze({
  reviews: [],
  errors: []
});

const reviewReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState =  merge({}, state);
  
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, _initialState, {reviews: action.reviews});
    case RECEIVE_REVIEW: 
      newState.reviews.push(action.review);
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = action.errors;
      return newState;
    case CLEAR_REVIEW_ERRORS:
      newState.errors = [];
      return newState;
    default: 
      return state;    
  }
};

export default reviewReducer;