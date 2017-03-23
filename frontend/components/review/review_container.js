import { connect } from 'react-redux';

import { createReview } from '../../actions/review_actions';

import Review from './review';

const mapStateToProps = (state, {params}) => {
  const currentUser = state.session.currentUser;
  const room = state.currentRoom;
  const errors = state.bookings.errors
  // const party_size = 1;
  return {
    currentUser,
    room,
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: booking => dispatch(createReview(booking))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
