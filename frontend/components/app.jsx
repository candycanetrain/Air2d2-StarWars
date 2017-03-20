import React from 'react';
import Header from './header/header';
import Background from './background';
// import RoomMap from './room_map/room_map';
import Search from './search/search';
import Home from './home';

const App = ({children}) => (
  <div>
    <Home />
    <section className="SearchIndexContainer">
     <Search />
    </section>

    {children}
  </div>
);

export default App;