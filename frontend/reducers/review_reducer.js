import {merge} from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const _initialState = Object.freeze({
  reviews: [],
  errors: []
});

const reviewReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, {reviews: action.reviews});
    case RECEIVE_REVIEW: 
      let newState =  merge({}, state);
      newState.reviews.push(action.review);
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, _initialState, {errors: action.errors});
    default: 
      return state;    
  }
};

export default reviewReducer;