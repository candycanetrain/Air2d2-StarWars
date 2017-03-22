import { connect } from 'react-redux';

import { fetchRooms, fetchRoom } from '../../actions/room_actions';

import Search from './search';


const mapStateToProps = (state) => ({
  rooms: Object.keys(state.rooms).map(key => state.rooms[key])
});

const mapDispatchToProps = dispatch => ({
  fetchRooms: (params) => dispatch(fetchRooms(params)),
  fetchRoom: (id) => dispatch(fetchRoom(id))
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);