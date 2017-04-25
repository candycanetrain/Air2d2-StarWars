import React from 'react';

import RoomIndexContainer from './rooms/room_index_container';

import Header from './header/header';
import Search from './search/search';
import SearchContainer from './search/search_container';

const Home = ({children}) => (
  <div>
    <div className="home">

      <div className="video-div">
        <video controls autoPlay loop id="home-video">
          <source src="http://res.cloudinary.com/candycanetrain/video/upload/ac_none,c_scale,w_1083/v1490078767/Candra_Star_Wars_Clip_aj8p7d.mp4"/>
        </video>
      </div>

      <div className="tag-line">
        <h1 id="home-welcome">Welcome to Air2d2</h1>
        <h4 id="home-subtitle">Use Air2d2 to book your galatic travels! </h4>
      </div>

      <SearchContainer />
    </div>
    <RoomIndexContainer />
  </ div>
);

export default Home;
