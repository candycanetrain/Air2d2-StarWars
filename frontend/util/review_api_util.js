export const createReview = (review) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: {review}
  });
}

export const fetchReviews = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/reviews',
  });
}

export const fetchReview = id => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  });
}

export const updateReview = (review) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {review}
  });
};

export const deleteReview = id => {
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  });
};