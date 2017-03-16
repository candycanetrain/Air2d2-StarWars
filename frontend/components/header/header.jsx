import React from 'react';
import NavContainer from './nav/nav_container';

const Header = ({children}) => (
  <div>
    <header className="header-bar">
      <img src="https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/R2D2-128.png" alt=""/>
      <NavContainer />
    </header>
  </div>
);

export default Header;