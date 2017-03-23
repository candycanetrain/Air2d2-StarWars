export const createBooking = (booking) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data: {booking}
  });
}

export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings'
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