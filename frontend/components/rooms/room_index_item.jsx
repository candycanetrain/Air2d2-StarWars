import React from 'react';
import { withRouter } from 'react-router';

class RoomIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const roomId = this.props.room.id;
    this.props.router.push(`rooms/${roomId}`);
  }

  render() {
    const room = this.props.room;
    return(
      <div className="room-index-item"
        onClick={this.handleClick}>

        <div className="room-pic">
          <img className="featured-room-img" src={room.img_url} alt=""/>
        </div>
        <div className="mini-summary-under-pic"><span className="room-price">{room.price} Credits  </span><span className="mini-info">{room.name} in
          <span className="city-name-index-item"> {room.city}</span></span></div>
      </div>
    );
  }
}

export default withRouter(RoomIndexItem);
