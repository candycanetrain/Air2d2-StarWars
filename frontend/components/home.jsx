import React from 'react';

import Header from './header/header';
import Search from './search/search';

const Home = ({children}) => (
  <div className="home">
    <Header />
    <Search />
  </div>
);

export default Home;