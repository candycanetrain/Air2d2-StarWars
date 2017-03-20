import React from 'react';
import Header from './header/header';
import Background from './background';
// import RoomMap from './room_map/room_map';
import Search from './search/search';

const App = ({children}) => (
  <div>
    <Header />
    <Background />
    <section className="SearchIndexContainer">
     <Search />
    </section>

    {children}
  </div>
);

export default App;