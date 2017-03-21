import React from 'react';

import Header from './header/header';
import Search from './search/search';

const Home = ({children}) => (
  <div className="home">
    <Header />    
    <div className="video-div">
      <video controls autoPlay loop id="home-video">
        <source src="http://res.cloudinary.com/candycanetrain/video/upload/ac_none,c_scale,w_1083/v1490078767/Candra_Star_Wars_Clip_aj8p7d.mp4"/>
      </video>
    </div>
    <Search />
  </div>
);

export default Home;