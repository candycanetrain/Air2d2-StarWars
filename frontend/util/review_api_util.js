export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: {review}
  });
}

export const fetchReviews = (id) => {
  return($.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: id
  })
)};

export const fetchReview = id => (
 $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  })
);

export const updateReview = review => {
  return( $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {review}
  }));
};

export const deleteReview = id => {
  return(
    $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`
  }));
};