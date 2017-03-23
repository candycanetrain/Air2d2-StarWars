import {merge} from 'lodash';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const _nullErrors = Object.freeze({
  errors: []
});

const reviewReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_REVIEW: 
      return merge({}, state, {[action.review.id]: action.review});
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, _nullErrors, {errors});
    default: 
      return state;    
  }
};






export default reviewReducer;