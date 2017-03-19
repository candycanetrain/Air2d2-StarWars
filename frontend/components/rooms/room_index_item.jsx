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
        <h1>{room.name}</h1>
        <div>{room.city}</div>
        <img src={room.img_url} alt=""/>
      </div>
    );
  }
}

export default withRouter(RoomIndexItem);