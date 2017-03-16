import React from 'react';
import NavContainer from './nav/nav_container';

const Header = ({children}) => (
  <div>
    <header className="header-bar">
      <h1>Air2d2 logo here</h1>
      <NavContainer />
    </header>
  </div>
);

export default Header;