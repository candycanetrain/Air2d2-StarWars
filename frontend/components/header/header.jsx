import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router';



const Header = ({children}) => (
  <div>
    <header className="header-bar">
      <Link to="/"><img src="https://cdn0.iconfinder.com/data/icons/geek-zone-icons-rounded/110/R2D2-128.png" alt=""/></Link>
      <NavContainer />
    </header>
  </div>
);

export default Header;