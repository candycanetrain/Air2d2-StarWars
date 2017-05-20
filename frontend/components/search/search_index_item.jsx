import React from 'react';
import { withRouter } from 'react-router';

class SearchIndexItem extends React.Component {
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
      <div className="search-index-item"
        onClick={this.handleClick}>
        <div className="featured-room-header">
          <h3>{room.name} in {room.city}</h3>
          <span className="featured-room-price">Book for {room.price} Credits/Night</span>
        </div>
        <img className="featured-room-img" src={room.img_url} alt=""/>
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
