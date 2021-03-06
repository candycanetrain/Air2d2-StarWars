import { connect } from 'react-redux';
import { fetchRoom } from '../../actions/room_actions';
import { selectRoom } from '../../reducers/selectors';
import CurrentRoomShow from './current_room_show';

const mapStateToProps = (state, {params}) => {
  const roomId = parseInt(params.roomId);
  const room = state.currentRoom;
  return {
    roomId,
    room
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRoom: id => dispatch(fetchRoom(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentRoomShow);
