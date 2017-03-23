import * as ReviewUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
import {hashHistory} from 'react-router';


export const fetchReviews = () => dispatch => {
 return(
  ReviewUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)};

export const fetchReview = (id) => dispatch => (
  ReviewUtil.fetchReview(id)
    .then(review => dispatch(receiveReview(review)))
);

export const createReview = review => dispatch => (
  ReviewUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON))).then(hashHistory.push("/"))
);

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) =>  ({
  type: RECEIVE_REVIEW,
  review
});

// export const createReview = (review) => ({
//   type: CREATE_REVIEW,
//   review
// }); 

export const deleteReview = (id) => ({
   type: DELETE_REVIEW,
   id
});

export const updateReview = (review) => ({
   type: UPDATE_REVIEW,
   review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

