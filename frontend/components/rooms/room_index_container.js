import { connect } from 'react-redux';
import { fetchRooms, fetchRoom } from '../../actions/room_actions';
import RoomIndex from './room_index';


const mapStateToProps = (state) => ({
  rooms: Object.keys(state.rooms).map(key => state.rooms[key])
});

const mapDispatchToProps = dispatch => ({
  fetchRooms: () => dispatch(fetchRooms()),
  fetchRoom: () => dispatch(fetchRoom())
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomIndex)