export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    URL: `api/bookings/`,
    data: {booking}
  });
}

export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings',
  });
}

export const fetchBooking = id => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  });
}

export const updateBooking = (booking) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/bookings/${booking.id}`,
    data: {booking}
  });
};

export const deleteBooking = id => {
  $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${id}`
  });
};