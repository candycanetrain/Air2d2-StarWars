import React from 'react';
import { Link } from 'react-router';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {

  render() {
    const rooms = this.props.rooms

    return(
      <ul>
        {rooms.map((room) => (
         <li className="featured-room" key={room.id}>
              <SearchIndexItem room={room} key={room.id}/>
         </li>
        ))}
      </ul>
    )
  }
}

export default SearchIndex;