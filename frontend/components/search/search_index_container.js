import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchRooms, fetchRoom } from '../../actions/room_actions';

const mapStateToProps = (state, ownProps) => ({
  rooms: Object.keys(state.rooms).map(key => state.rooms[key])
});

const mapDispatchToProps = dispatch => ({
  fetchRooms: bookings => dispatch(fetchRooms(bookings))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
