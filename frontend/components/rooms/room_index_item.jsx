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
    const room = this.props.room
    return(
      <div className="room-index-item"
        onClick={this.handleClick}>
        <h3>{room.name} in 
          <div className="city-name-index-item">{room.city}</div>
        </h3>
        <img className="featured-room-img" src={room.img_url} alt=""/>
        <div className="featured-room-price">Price: {room.price} Credits</div>
      </div>
    );
  }
}

export default withRouter(RoomIndexItem);